import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && modalRef.current && overlayRef.current && contentRef.current) {
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
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleClose = () => {
        if (modalRef.current && overlayRef.current && contentRef.current) {
            const tl = gsap.timeline({
                onComplete: onClose
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
        }
    };

    const skills = [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'JavaScript', level: 90, icon: '💛' },
        { name: 'HTML/CSS', level: 95, icon: '🎨' },
        { name: 'GSAP', level: 80, icon: '✨' },
        { name: 'SCSS', level: 90, icon: '🎭' },
        { name: 'Node.js', level: 75, icon: '🚀' },
        { name: 'Git', level: 85, icon: '📚' },
    ];

    return (
        <div
            ref={modalRef}
            className="about-modal"
            style={{ display: 'none' }}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            <div ref={overlayRef} className="about-modal__overlay" />
            <div ref={contentRef} className="about-modal__content">
                <button className="about-modal__close" onClick={handleClose}>
                    ✕
                </button>

                <div className="about-modal__header">
                    <div className="about-modal__avatar">
                        <span>👨‍💻</span>
                    </div>
                    <h2 className="about-modal__title">Обо мне</h2>
                </div>

                <div className="about-modal__body">
                    <div className="about-modal__description">
                        <p>
                            Привет! Я фронтенд-разработчик с опытом создания современных веб-приложений.
                            Специализируюсь на React, TypeScript и создании интерактивных интерфейсов.
                        </p>
                        <p>
                            Люблю решать сложные задачи, создавать плавные анимации и писать чистый код.
                            В свободное время изучаю новые технологии и работаю над pet-проектами.
                        </p>
                    </div>

                    <div className="about-modal__skills">
                        <h3>Мои навыки</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-header">
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="about-modal__contacts">
                        <h3>Контакты</h3>
                        <div className="contacts-list">
                            <a href="mailto:email@example.com" className="contact-link">
                                <span>📧</span> email@example.com
                            </a>
                            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span>💻</span> GitHub
                            </a>
                            <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span>📱</span> Telegram
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AboutModal;