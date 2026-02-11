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
        <footer className="app-footer relative z-10 mt-20 py-8 text-center border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-gray-600">
                    &copy; {new Date().getFullYear()} My Gallery. All rights reserved.
                </p>
                {/* <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Документация</a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Контакты</a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;