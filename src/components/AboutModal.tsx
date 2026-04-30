import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
    SiBlender,
    SiFigma,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiGit,
    SiSass,
    SiGsap,
    SiCoreldraw,
    SiPhp
} from 'react-icons/si';
import {
    DiIllustrator,
    DiPhotoshop,
    DiHtml5
} from "react-icons/di";
import { TbBrandAdobeIndesign } from "react-icons/tb";
import {
    FaPalette,
    FaVideo
} from 'react-icons/fa';
import avatarPhoto from '../assets/images/redvusSelf.jpg';

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

    const skillsWeb = [
        { name: 'HTML', level: 95, icon: <DiHtml5 /> },
        { name: 'SCSS', level: 90, icon: <SiSass /> },
        { name: 'GSAP', level: 70, icon: <SiGsap /> },
        { name: 'PHP', level: 50, icon: <SiPhp /> },
        { name: 'JavaScript', level: 60, icon: <SiJavascript /> },
        { name: 'TypeScript', level: 35, icon: <SiTypescript /> },
        { name: 'React', level: 50, icon: <SiReact /> },
        { name: 'Git', level: 50, icon: <SiGit /> },
    ];

    const skillsDesign = [
        { name: 'Illustrator', level: 95, icon: <DiIllustrator /> },
        { name: 'Photoshop', level: 95, icon: <DiPhotoshop /> },
        { name: 'InDesign', level: 90, icon: <TbBrandAdobeIndesign /> },
        { name: 'Blender', level: 85, icon: <SiBlender /> },
        { name: 'Substance Painter', level: 85, icon: <FaPalette /> },
        { name: 'DaVinci Resolve', level: 60, icon: <FaVideo /> },
        { name: 'CorelDraw', level: 85, icon: <SiCoreldraw /> },
        { name: 'Figma', level: 70, icon: <SiFigma /> },
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="about-modal__body">
                    <div className="about-modal__description">
                        <div className="about-modal__header">
                            <div className="about-modal__avatar">
                                <img src={avatarPhoto} alt="Аватар" className="avatar-image" />
                            </div>
                            <h2 className="about-modal__title">Александр Суворов</h2>
                        </div>
                        <div className="about-modal__text">
                            <p>
                                Дизайном увлекся еще в институте, а после окончания в 1996 году работать по профессии не сложилось, пошел применять навыки в рекламе. Начинал с печатей и штампов, потом начал заниматься наружной рекламой в самый рассвет в начале 2000-х. Постепенно освоил верстку для печатных изданий, разрабатывал логотипы и придумал несколько шрифтовых начертаний.
                            </p>
                            <p>
                                Начиная с 2013 года начал заниматься веб-дизайном и разработал первые пару сайтов. Дальше стал освавиать языки программирования, такие как HTML, CSS и JavaScript, чтобы создавать более интерактивные и функциональные веб-сайты. Параллельно с веб-дизайном стал изучать 3D-разработку – осваивал моделирование, текстурирование и анимацию.
                            </p>
                            <p>
                                В 2024 попробовал себя в разработке мобильного приложения с дополненной реальностью. Стал понемногу осваивать язык программирования Kotlin и платформу Android для создания мобильных приложений. К тому же в приложении использовалась 3D-графика. Постепенно расширяя свои навыки и знания, я стал более универсальным дизайнером, с недавнего времени увлекся видеопроизводством и созданием видео.
                            </p>
                        </div>
                    </div>

                    <div className="about-modal__skills">
                        <div className="about-modal__skills_grid">
                            <h3>Навыки в дизайне</h3>
                            {skillsDesign.map((skill, index) => (
                                <div key={index} className="about-modal__skills_item">
                                    <div className="about-modal__skills_header">
                                        <span className="about-modal__skills_icon">{skill.icon}</span>
                                        <span className="about-modal__skills_name">{skill.name}</span>
                                        <span className="about-modal__skills_percent">{skill.level}%</span>
                                    </div>
                                    <div className="about-modal__skills_bar">
                                        <div
                                            className="about-modal__skills_progress"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="about-modal__skills_grid">
                            <h3>Навыки в веб-разработке</h3>
                            {skillsWeb.map((skill, index) => (
                                <div key={index} className="about-modal__skills_item">
                                    <div className="about-modal__skills_header">
                                        <span className="about-modal__skills_icon">{skill.icon}</span>
                                        <span className="about-modal__skills_name">{skill.name}</span>
                                        <span className="about-modal__skills_percent">{skill.level}%</span>
                                    </div>
                                    <div className="about-modal__skills_bar">
                                        <div
                                            className="about-modal__skills_progress"
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