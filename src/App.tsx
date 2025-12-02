import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './scss/app.scss'
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Анимация фоновых элементов
        gsap.to('.bg-blob-1', {
            x: 100,
            y: 50,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        gsap.to('.bg-blob-2', {
            x: -80,
            y: -30,
            duration: 25,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 5
        });
    }, []);

    return (
        <div className="app min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Декоративные элементы фона */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="bg-blob-1 absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="bg-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-100 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <Header />

            <main ref={containerRef} className="app-main relative z-10">
                <Gallery />
            </main>

            <Footer />
        </div>
    );
};

export default App;
