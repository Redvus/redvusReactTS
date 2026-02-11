import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Анимация заголовка
        if (headerRef.current) {
            const title = headerRef.current.querySelector('.app-title');
            const subtitle = headerRef.current.querySelector('.app-subtitle');

            gsap.fromTo(
                title,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out'
                }
            );

            gsap.fromTo(
                subtitle,
                { opacity: 0, y: -30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    return (
        <header ref={headerRef} className="app-header relative z-10 pt-16 pb-24 text-center">
            <h1 className="app-title">
                Галерея работ
            </h1>
            <p className="app-subtitle text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
                Интерактивное портфолио с анимациями GSAP и современным дизайном
            </p>

            {/* <div className="mt-10 flex justify-center space-x-4">
                <div className="tech-badge px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-sm">
                    React 18
                </div>
                <div className="tech-badge px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-sm">
                    TypeScript
                </div>
                <div className="tech-badge px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-sm">
                    GSAP
                </div>
                <div className="tech-badge px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-sm">
                    Vite
                </div>
            </div> */}
        </header>
    );
}

export default Header;