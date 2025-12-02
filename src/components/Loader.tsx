import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader: React.FC = () => {
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loaderRef.current) {
            const circles = loaderRef.current.querySelectorAll('.circle');

            // Создаем анимацию для каждого круга
            circles.forEach((circle, index) => {
                gsap.to(circle, {
                    y: -20,
                    duration: 0.6,
                    delay: index * 0.1,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power2.inOut'
                });

                gsap.to(circle, {
                    scale: 1.2,
                    duration: 0.6,
                    delay: index * 0.1,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power2.inOut'
                });
            });
        }
    }, []);

    return (
        <div ref={loaderRef} className="loader flex items-center justify-center space-x-3">
            <div className="circle w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="circle w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="circle w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="circle w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>
    );
};

export default Loader;