// import React, { useEffect, useRef } from 'react';
import React, { useRef } from 'react';
// import { gsap } from 'gsap';
import Navigation from '../Navigation/Navigation';

import RedvusLogo from '../../UI/RedvusLogo';
// import Social from '../../UI/Social';

import Social from '../../UI/Social';

interface HeaderProps {
    onAboutClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick = () => { } }) => {
    const headerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     // Анимация заголовка
    //     if (headerRef.current) {
    //         const title = headerRef.current.querySelector('.app-title');
    //         const subtitle = headerRef.current.querySelector('.app-subtitle');

    //         gsap.fromTo(
    //             title,
    //             { opacity: 0, y: -50 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 1,
    //                 ease: 'power3.out'
    //             }
    //         );

    //         gsap.fromTo(
    //             subtitle,
    //             { opacity: 0, y: -30 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 1,
    //                 delay: 0.3,
    //                 ease: 'power3.out'
    //             }
    //         );
    //     }
    // }, []);

    return (
        <>
            <header ref={headerRef} className="header">
                <RedvusLogo className="header__logo" />
                <div className="header__nav">
                    <Navigation onAboutClick={onAboutClick} />
                    <Social className="header__social" />
                </div>
            </header>
        </>
    );
}

export default Header;