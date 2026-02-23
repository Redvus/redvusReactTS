import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';

interface PreloaderProps {
    minDisplayTime?: number;
    onComplete?: () => void;
}

// Массив цитат
const quotes = [
    { text: "Искусство — это ложь, которая делает нас способными осознать правду.", author: "Пабло Пикассо" },
    { text: "Дизайн — это не только то, как это выглядит. Дизайн — это то, как это работает.", author: "Стив Джобс" },
    { text: "Хороший дизайн — это как можно меньше дизайна.", author: "Дитер Рамс" },
    { text: "Вдохновение существует, но оно должно застать вас за работой.", author: "Пабло Пикассо" },
    { text: "Простота — это высшая форма сложности.", author: "Леонардо да Винчи" },
    { text: "Каждый проект — это возможность научиться чему-то новому.", author: "Неизвестный автор" },
    { text: "Детали — это не детали. Детали создают дизайн.", author: "Чарльз Имз" }
];

const Preloader: React.FC<PreloaderProps> = ({
    minDisplayTime = 1,
    onComplete
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const preloaderContentRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);
    const authorRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    // Находим статический блок прелоадера
    const preloaderElement = document.getElementById('preloader');

    // Устанавливаем случайную цитату при загрузке
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        if (quoteRef.current && authorRef.current) {
            quoteRef.current.textContent = quotes[randomIndex].text;
            authorRef.current.textContent = `— ${quotes[randomIndex].author}`;
        }
    }, []);

    // Прогресс-бар
    useEffect(() => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            if (progressBarRef.current) {
                const elapsed = Date.now() - startTime;
                const progress = Math.min((elapsed / 3000) * 100, 100);
                progressBarRef.current.style.width = `${progress}%`;
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Смена цитат
    useEffect(() => {
        const interval = setInterval(() => {
            if (quoteRef.current && authorRef.current) {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                quoteRef.current.textContent = quotes[randomIndex].text;
                authorRef.current.textContent = `— ${quotes[randomIndex].author}`;
            }
        }, minDisplayTime * 2000);

        return () => clearInterval(interval);
    }, []);

    // Скрываем прелоадер после загрузки
    useEffect(() => {
        const hidePreloader = () => {
            if (preloaderElement) {
                gsap.to(preloaderElement, {
                    duration: minDisplayTime / 2.2,
                    delay: minDisplayTime * 1.3,
                    autoAlpha: 0,
                    ease: 'power2.out',
                    onComplete: () => {
                        preloaderElement.style.display = 'none';
                        setIsVisible(false);
                    }
                });
            }

            // setTimeout(() => {
            //     if (preloaderElement) {
            //         // Скрываем элемент
            //         // setTimeout(() => {
            //         //     preloaderElement.style.opacity = '0';
            //         // }, 700);
            //         // setTimeout(() => {
            //         //     preloaderElement.style.display = 'none';
            //         // }, 1800);

            //         setIsVisible(false);

            //         // Показываем контент
            //         const rootElement = document.getElementById('root');
            //         if (rootElement) {
            //             rootElement.classList.add('visible');
            //         }

            //         if (onComplete) {
            //             onComplete();
            //         }
            //     }
            // }, minDisplayTime);
        };

        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader);
            return () => window.removeEventListener('load', hidePreloader);
        }
    }, [minDisplayTime, onComplete, preloaderElement]);

    // Если элемент не найден или не видим, не рендерим
    if (!preloaderElement || !isVisible) return null;

    // Рендерим через портал прямо в статический блок
    return ReactDOM.createPortal(
        <div ref={preloaderContentRef} className="preloader__content">
            {/* <div className="preloader__logo">
                <svg viewBox="0 0 100 100" className="preloader__logo-svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 50 L70 50 M50 30 L50 70" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div> */}

            <div className="preloader__quote_container">
                <h2 ref={quoteRef} className="preloader__quote"></h2>
                <div ref={authorRef} className="preloader__author"></div>
            </div>

            <div className="preloader__progress">
                <div ref={progressBarRef} className="preloader__progress_bar" style={{ width: '0%' }} />
            </div>

            {/* <div className="preloader__hint">
                <span className="preloader__hint-icon">✨</span>
                <span>загрузка вдохновения...</span>
            </div> */}
        </div>,
        preloaderElement
    );
};

export default Preloader;