import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
// import TextReveal from '../../components/Animations/TextReveal/TextReveal';
import gsap from 'gsap';

const Home: React.FC = () => {
    const containerRef = useGSAP(() => {
        // Анимация для заголовка
        gsap.from('.main-title', {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        });

        // Анимация для подзаголовка
        gsap.from('.subtitle', {
            duration: 1,
            delay: 0.5,
            y: 50,
            opacity: 0,
            ease: 'back.out(1.7)'
        });
    }, []);

    return (
        <div ref={containerRef} className="home-page">
            <h1 className="main-title">
                {/* <TextReveal text="Добро пожаловать" /> */}
            </h1>

            <p className="subtitle">
                Анимированная навигация с GSAP
            </p>

            <div className="content">
                <p>Это главная страница с плавными анимациями</p>
            </div>
        </div>
    );
};

export default Home;