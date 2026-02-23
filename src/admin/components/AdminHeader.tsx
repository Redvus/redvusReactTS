import React, { useState, useEffect } from 'react';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { gsap } from 'gsap';

const AdminHeader: React.FC = () => {
    const { user } = useAdminAuth();
    const [currentTime, setCurrentTime] = useState('');
    const [notifications, setNotifications] = useState(3);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            }));
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    const clearNotifications = () => {
        gsap.to('.notification-badge', {
            scale: 0,
            duration: 0.3,
            onComplete: () => {
                setNotifications(0);
                setShowNotifications(false);
            }
        });
    };

    return (
        <header className="admin-header">
            <div className="header-left">
                <h1 className="header-title">Управление галереей</h1>
                <div className="header-time">
                    <span className="time-icon">🕐</span>
                    <span>{currentTime}</span>
                </div>
            </div>

            <div className="header-right">
                <div className="header-notifications">
                    <button
                        className="notifications-button"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <span className="bell-icon">🔔</span>
                        {notifications > 0 && (
                            <span className="notification-badge">{notifications}</span>
                        )}
                    </button>

                    {showNotifications && (
                        <div className="notifications-dropdown">
                            <div className="dropdown-header">
                                <h3>Уведомления</h3>
                                <button onClick={clearNotifications} className="clear-button">
                                    Очистить
                                </button>
                            </div>
                            <div className="notifications-list">
                                <div className="notification-item">
                                    <span className="notification-icon">🆕</span>
                                    <div className="notification-content">
                                        <p>Новый проект добавлен</p>
                                        <span className="notification-time">5 минут назад</span>
                                    </div>
                                </div>
                                <div className="notification-item">
                                    <span className="notification-icon">👁️</span>
                                    <div className="notification-content">
                                        <p>Просмотры проекта "Корпоративный портал" выросли на 20%</p>
                                        <span className="notification-time">2 часа назад</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="header-user">
                    <div className="user-greeting">
                        <span>Привет,</span>
                        <strong>{user?.name.split(' ')[0]}</strong>
                    </div>
                    <div className="user-status">
                        <span className="status-dot active"></span>
                        <span>Online</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;