import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
// import Logo from '../../UI/Logo/Logo';
import { useGSAP } from '../../../hooks/useGSAP';
import gsap from 'gsap';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerRef = useGSAP(() => {
        gsap.from('.header-content', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }, []);

    return (
        <header ref={headerRef} className="header">
            <div className="header-content">
                <Link to="/" className="logo-link">
                    {/* <Logo /> */}
                </Link>

                <Navigation
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                />
            </div>
        </header>
    );
};

export default Header;