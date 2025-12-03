import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { gsap } from 'gsap';

const AdminSidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { logout, user } = useAdminAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);

        const sidebar = document.querySelector('.admin-sidebar');
        if (sidebar) {
            gsap.to(sidebar, {
                width: isCollapsed ? '250px' : '80px',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    const navItems = [
        { path: '/admin', icon: '📊', label: 'Дашборд' },
        { path: '/admin/works', icon: '🖼️', label: 'Работы' },
        { path: '/admin/add', icon: '➕', label: 'Добавить' },
        { path: '/admin/categories', icon: '🏷️', label: 'Категории' },
        { path: '/admin/settings', icon: '⚙️', label: 'Настройки' },
        { path: '/admin/users', icon: '👥', label: 'Пользователи' },
        { path: '/admin/logs', icon: '📝', label: 'Логи' },
    ];

    return (
        <aside className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <button onClick={toggleSidebar} className="sidebar-toggle">
                    {isCollapsed ? '→' : '←'}
                </button>
                {!isCollapsed && <h2 className="sidebar-title">Админ-панель</h2>}
            </div>

            <div className="sidebar-user">
                <div className="user-avatar">
                    {user?.name.charAt(0)}
                </div>
                {!isCollapsed && (
                    <div className="user-info">
                        <span className="user-name">{user?.name}</span>
                        <span className="user-role">{user?.role === 'admin' ? 'Администратор' : 'Редактор'}</span>
                    </div>
                )}
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        <span className="nav-icon">{item.icon}</span>
                        {!isCollapsed && <span className="nav-label">{item.label}</span>}
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button onClick={handleLogout} className="logout-button">
                    <span className="logout-icon">🚪</span>
                    {!isCollapsed && <span>Выйти</span>}
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;