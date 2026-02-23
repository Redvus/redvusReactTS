import React from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '../../../hooks/useGSAP';
import gsap from 'gsap';
import type { NavigationProps } from '../../../types';

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, toggleMenu }) => {
    const navItems = [
        { path: '/', name: 'Главная' },
        { path: '/about', name: 'О нас' },
        { path: '/services', name: 'Услуги' },
        { path: '/contact', name: 'Контакты' },
    ];

    const navRef = useGSAP(() => {
        if (isMenuOpen) {
            gsap.fromTo('.nav-item',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
            );
        }
    }, [isMenuOpen]);

    return (
        <nav ref={navRef} className="navigation">
            <button onClick={toggleMenu} className="menu-toggle">
                {isMenuOpen ? 'Закрыть' : 'Меню'}
            </button>

            <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.path} className="nav-item">
                        <Link
                            to={item.path}
                            onClick={toggleMenu}
                            className="nav-link"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;