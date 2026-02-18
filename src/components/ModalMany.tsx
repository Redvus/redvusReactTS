import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
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
    const imageRef = useRef<HTMLImageElement>(null);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    const animationFrameRef = useRef<number | null>(null);
    const isMountedRef = useRef<boolean>(true);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [showThumbnails, setShowThumbnails] = useState(true);

    // Мемоизируем массив изображений
    const projectImages = useMemo(() => {
        if (!item) return [];
        return item.images && item.images.length > 0 ? item.images : [item.imageUrl];
    }, [item]);

    const hasMultipleImages = projectImages.length > 1;

    // Сброс индекса при открытии нового проекта
    useEffect(() => {
        if (!isOpen || !item?.id) return;

        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            if (isMountedRef.current) {
                setCurrentImageIndex(0);
            }
            animationFrameRef.current = null;
        });
    }, [isOpen, item?.id]);

    // Обновляем src изображения при изменении индекса
    useEffect(() => {
        if (imageRef.current && projectImages[currentImageIndex]) {
            imageRef.current.src = projectImages[currentImageIndex];
        }
    }, [currentImageIndex, projectImages]);

    // Анимация смены изображения
    const animateImageChange = useCallback((newIndex: number) => {
        if (isAnimating || !imageRef.current || !projectImages[newIndex]) return;

        setIsAnimating(true);

        // Определяем направление анимации
        const direction = newIndex > currentImageIndex ? 'next' : 'prev';

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentImageIndex(newIndex);
                setIsAnimating(false);
            }
        });

        // Анимация текущего изображения
        tl.to(imageRef.current, {
            x: direction === 'next' ? -30 : 30,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                // Меняем src после того, как изображение исчезло
                if (imageRef.current) {
                    imageRef.current.src = projectImages[newIndex];
                }
            }
        })
            .set(imageRef.current, {
                x: direction === 'next' ? 30 : -30,
            })
            .to(imageRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
    }, [isAnimating, currentImageIndex, projectImages]);

    // Навигационные функции
    const handleNextImage = useCallback(() => {
        if (!hasMultipleImages || isAnimating) return;

        const nextIndex = (currentImageIndex + 1) % projectImages.length;
        animateImageChange(nextIndex);
    }, [currentImageIndex, projectImages.length, hasMultipleImages, isAnimating, animateImageChange]);

    const handlePreviousImage = useCallback(() => {
        if (!hasMultipleImages || isAnimating) return;

        const prevIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
        animateImageChange(prevIndex);
    }, [currentImageIndex, projectImages.length, hasMultipleImages, isAnimating, animateImageChange]);

    const handleThumbnailClick = useCallback((index: number) => {
        if (index === currentImageIndex || isAnimating) return;

        animateImageChange(index);
    }, [currentImageIndex, isAnimating, animateImageChange]);

    // Обработчик клавиш
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'Escape':
                // handleClose();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (hasMultipleImages) {
                    handlePreviousImage();
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (hasMultipleImages) {
                    handleNextImage();
                }
                break;
        }
    }, [isOpen, hasMultipleImages, handlePreviousImage, handleNextImage]);

    // Закрытие модального окна
    const handleClose = useCallback(() => {
        if (!modalRef.current || !overlayRef.current || !contentRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                if (isMountedRef.current) {
                    onClose();
                }
            }
        });

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
            .set(modalRef.current, { display: 'none' });
    }, [onClose]);

    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }, [handleClose]);

    // Touch события
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }, []);

    const handleTouchEnd = useCallback(() => {
        if (!touchStart || !touchEnd || !hasMultipleImages || isAnimating) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNextImage();
        } else if (isRightSwipe) {
            handlePreviousImage();
        }

        setTouchStart(null);
        setTouchEnd(null);
    }, [touchStart, touchEnd, hasMultipleImages, isAnimating, handleNextImage, handlePreviousImage]);

    // Анимация открытия/закрытия
    useEffect(() => {
        if (!modalRef.current || !overlayRef.current || !contentRef.current) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.set(modalRef.current, { display: 'flex' });

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

            if (thumbnailsRef.current && hasMultipleImages) {
                gsap.fromTo(thumbnailsRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, delay: 0.3 }
                );
            }
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, hasMultipleImages]);

    // Устанавливаем флаг монтирования
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

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

            <div
                ref={contentRef}
                className="modal-content"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Кнопка закрытия */}
                <button
                    className="modal-close"
                    onClick={handleClose}
                    aria-label="Закрыть модальное окно"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Секция изображений */}
                <div className="modal-image-section">
                    {/* Основное изображение */}
                    <div className="modal-image-container">
                        <img
                            ref={imageRef}
                            src={projectImages[currentImageIndex] || ''}
                            alt={`${item.title} - изображение ${currentImageIndex + 1}`}
                            className="modal-image"
                        />

                        {/* Навигация по изображениям */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    className="modal-image-nav modal-image-nav--prev"
                                    onClick={handlePreviousImage}
                                    aria-label="Предыдущее изображение"
                                    disabled={isAnimating}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>

                                <button
                                    className="modal-image-nav modal-image-nav--next"
                                    onClick={handleNextImage}
                                    aria-label="Следующее изображение"
                                    disabled={isAnimating}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>

                                {/* Индикатор текущего изображения */}
                                <div className="modal-image-counter">
                                    {currentImageIndex + 1} / {projectImages.length}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Миниатюры */}
                    {hasMultipleImages && (
                        <div ref={thumbnailsRef} className="modal-thumbnails">
                            <div className="thumbnails-header">
                                <h4>Все изображения проекта</h4>
                                <button
                                    className="toggle-thumbnails"
                                    onClick={() => setShowThumbnails(prev => !prev)}
                                >
                                    {showThumbnails ? 'Скрыть' : 'Показать'}
                                </button>
                            </div>

                            {showThumbnails && (
                                <div className="thumbnails-grid">
                                    {projectImages.map((img, index) => (
                                        <button
                                            key={index}
                                            className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                            disabled={isAnimating}
                                        >
                                            <img src={img} alt={`${item.title} - миниатюра ${index + 1}`} />
                                            <div className="thumbnail-overlay">
                                                <span>{index + 1}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Информация о проекте */}
                <div className="modal-info-section">
                    <div className="modal-header">
                        <div className="modal-meta">
                            <span className="modal-type">{getTypeLabel(item.type)}</span>
                            <span className="modal-date">{item.date}</span>
                        </div>
                        <h2 className="modal-title">{item.title}</h2>
                        <p className="modal-description">{item.description}</p>
                    </div>

                    <div className="modal-tags">
                        <h3 className="modal-subtitle">Технологии:</h3>
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
                            <span>Посмотреть проект</span>
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