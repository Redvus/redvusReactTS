import React from 'react';
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
        // <footer ref={footerRef} className="footer bg-gray-800 text-white py-6 mt-12">
        //     <div className="container mx-auto text-center">
        //         <p>&copy; {new Date().getFullYear()} My Gallery. All rights reserved.</p>
        //     </div>
        // </footer>

        <footer className="app-footer relative z-10 mt-20 py-8 text-center border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-gray-600">
                    © 2024 Creative Gallery. Создано с использованием React, TypeScript, GSAP и Vite
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Документация</a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Контакты</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;