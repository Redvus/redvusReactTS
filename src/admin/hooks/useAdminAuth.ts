import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminCredentials {
    email: string;
    password: string;
}

export const useAdminAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<AdminUser | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('admin_token');
            const userData = localStorage.getItem('admin_user');

            if (token && userData) {
                setIsAuthenticated(true);
                setUser(JSON.parse(userData));
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (credentials: AdminCredentials) => {
        setLoading(true);

        try {
            // Имитация API запроса
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
                const userData: AdminUser = {
                    id: '1',
                    email: credentials.email,
                    name: 'Администратор',
                    role: 'admin',
                    lastLogin: new Date().toISOString()
                };

                const token = 'admin_token_' + Date.now();

                localStorage.setItem('admin_token', token);
                localStorage.setItem('admin_user', JSON.stringify(userData));

                setIsAuthenticated(true);
                setUser(userData);

                return { success: true };
            }

            return { success: false, error: 'Неверные учетные данные' };
        } catch (error) {
            return { success: false, error: 'Ошибка сервера' };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/admin/login');
    };

    return {
        isAuthenticated,
        user,
        loading,
        login,
        logout
    };
};