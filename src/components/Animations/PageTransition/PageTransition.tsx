import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import type { PageTransitionProps } from '../../../types';

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = contentRef.current;
        if (element) {
            // Анимация появления
            gsap.fromTo(element,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );
        }

        // Очистка анимации при размонтировании
        return () => {
            if (element) {
                gsap.killTweensOf(element);
            }
        };
    }, [location.pathname]);

    return (
        <div ref={contentRef} className="page-content">
            {children}
        </div>
    );
};

export default PageTransition;