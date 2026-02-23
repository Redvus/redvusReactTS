import React from 'react';
import Social from '../../UI/Social';
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

const Footer: React.FC = () => {
    // const footerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (footerRef.current) {
    //         gsap.fromTo(
    //             footerRef.current,
    //             { opacity: 0, y: 30 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 1,
    //                 ease: 'elastic.out(1, 0.5)',
    //                 delay: 0.5

    //             }
    //         );
    //     }
    // }, []);

    return (
        <footer className="footer">
            <div className="footer__block">
                <p>
                    &copy; {new Date().getFullYear()} Портфолио Александра Суворова. Все права защищены.
                </p>
                <p>
                    Сделано на React и TypeScript.
                </p>
                {/* <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Документация</a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Контакты</a>
                </div> */}
            </div>
            <div className="footer__block footer__social">
                <Social className="header__social" />
            </div>
        </footer>
    );
};

export default Footer;