import React from 'react';

interface NavProps {
    onAboutClick: () => void;
}

const Nav: React.FC<NavProps> = ({ onAboutClick }) => {
    const navItems = [
        // { id: 'gallery', label: 'Галерея', href: '/' },
        // { id: 'portfolio', label: 'Портфолио', href: '/portfolio' },
        { id: 'about', label: 'Обо мне', isModal: true },
        { id: 'blog', label: 'Блог', href: 'https://readvus.ru' },
    ];

    const handleNavClick = (item: typeof navItems[0]) => {
        if (item.isModal) {
            onAboutClick();
        } else if (item.href) {
            // Используем обычную ссылку вместо window.location
            window.location.assign(item.href);
            // или
            // window.location.href = item.href;
        }
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                {navItems.map((item) => (
                    <li key={item.id} className="nav__item">
                        {item.isModal ? (
                            <button
                                className="nav__link"
                                onClick={() => handleNavClick(item)}
                            >
                                {item.label}
                            </button>
                        ) : (
                            <a
                                href={item.href}
                                className="nav__link"
                                target='_blank'
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item);
                                }}
                            >
                                {item.label}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;