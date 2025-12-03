import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useAdminAuth } from '../hooks/useAdminAuth';

const AdminLogin: React.FC = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const loginRef = useRef<HTMLDivElement>(null);

    const { login } = useAdminAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginRef.current) {
            const elements = loginRef.current.querySelectorAll('.animate-in');
            gsap.fromTo(
                elements,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await login(credentials);

        if (result.success) {
            navigate('/admin');
        } else {
            setError(result.error || 'Ошибка авторизации');
            setIsLoading(false);
        }
    };

    const handleDemoLogin = () => {
        setCredentials({
            email: 'admin@example.com',
            password: 'admin123'
        });
    };

    return (
        <div className="admin-login" ref={loginRef}>
            <div className="login-container animate-in">
                <div className="login-header">
                    <div className="logo">🖼️</div>
                    <h1>Админ-панель галереи</h1>
                    <p>Войдите для управления контентом</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form animate-in">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={credentials.email}
                            onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="admin@example.com"
                            required
                            autoComplete="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                            placeholder="••••••••"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {error && (
                        <div className="error-message animate-in">
                            ⚠️ {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="loading-spinner"></span>
                                Вход...
                            </>
                        ) : (
                            'Войти'
                        )}
                    </button>

                    <div className="demo-section animate-in">
                        <p>Для теста используйте:</p>
                        <button
                            type="button"
                            onClick={handleDemoLogin}
                            className="demo-button"
                        >
                            Demo: admin@example.com / admin123
                        </button>
                    </div>
                </form>

                <div className="login-footer animate-in">
                    <p>© 2024 Галерея работ. Админ-панель</p>
                    <p>
                        <a href="/" className="back-link">
                            ← Вернуться на сайт
                        </a>
                    </p>
                </div>
            </div>

            <div className="login-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>
        </div>
    );
};

export default AdminLogin;