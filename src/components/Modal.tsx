import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { GalleryItem } from '../types/gallery.types';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: GalleryItem | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && modalRef.current && overlayRef.current && contentRef.current) {
            // Блокируем скролл на body
            document.body.style.overflow = 'hidden';

            // Анимация появления
            gsap.set(modalRef.current, { display: 'flex' });
            modalRef.current.classList.add('is-open');

            const tl = gsap.timeline();

            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
                .fromTo(contentRef.current,
                    { y: 50, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: 'back.out(1.2)'
                    },
                    '-=0.2'
                );
        } else {
            // Восстанавливаем скролл
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleClose = () => {
        if (modalRef.current && overlayRef.current && contentRef.current) {
            const tl = gsap.timeline();

            tl.to(contentRef.current, {
                y: 50,
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                ease: 'power2.in'
            })
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power2.out'
                }, '-=0.2')
                .set(modalRef.current, { display: 'none' })
                .then(onClose);
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };

    if (!item) return null;

    const getTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            'web': 'Веб-разработка',
            'mobile': 'Мобильное приложение',
            'design': 'Дизайн',
            'branding': 'Брендинг',
            'illustration': 'Иллюстрация'
        };
        return labels[type] || type;
    };

    return (
        <div
            ref={modalRef}
            className="modal"
            style={{ display: 'none' }}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
        >
            <div
                ref={overlayRef}
                className="modal-overlay"
                onClick={handleOverlayClick}
                aria-hidden="true"
            />

            <div ref={contentRef} className="modal-content">
                <button
                    className="modal-close"
                    onClick={handleClose}
                    aria-label="Закрыть модальное окно"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="modal-image">
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="modal-image__img"
                    />
                </div>

                <div className="modal-body">
                    <div className="modal-header">
                        <div className="modal-meta">
                            <span className="modal-type">{getTypeLabel(item.type)}</span>
                            <span className="modal-date">{item.date}</span>
                        </div>
                        <h2 className="modal-title">{item.title}</h2>
                        <p className="modal-description">{item.description}</p>
                    </div>

                    <div className="modal-tags">
                        <h3 className="modal-subtitle">Технологии и инструменты:</h3>
                        <div className="modal-tags__list">
                            {item.tags.map((tag, index) => (
                                <span key={index} className="modal-tags__tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="modal-details">
                        <h3 className="modal-subtitle">Детали проекта:</h3>
                        <div className="modal-details__content">
                            <div className="modal-details__item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Срок: 2-3 месяца</span>
                            </div>
                            <div className="modal-details__item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span>Тип: {getTypeLabel(item.type)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button className="modal-action__button modal-action__button--primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <a href={item.published} target="_blank" rel="noopener noreferrer">Посмотреть проект</a>
                        </button>
                        <button className="modal-action__button">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span>Скачать кейс</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;