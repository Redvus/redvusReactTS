import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../components/Dashboard';
import WorksList from '../components/WorksList';
import WorkForm from '../components/WorkForm';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { useGallery } from '../../contexts/GalleryContext';
import { gsap } from 'gsap';

const AdminDashboard: React.FC = () => {
    const { isAuthenticated, loading: authLoading, user } = useAdminAuth();
    const navigate = useNavigate();

    const {
        works,
        loading: galleryLoading,
        addWork,
        updateWork,
        deleteWork,
        publishWork,
        unpublishWork,
        getWorkStats
    } = useGallery();

    const [editingWork, setEditingWork] = useState<any>(null);
    const [previewWork, setPreviewWork] = useState<any>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Показ уведомлений
    const showNotification = (message: string) => {
        setSuccessMessage(message);
        setShowSuccess(true);

        gsap.fromTo('.success-notification',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
        );

        setTimeout(() => {
            gsap.to('.success-notification', {
                y: -50,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
                onComplete: () => setShowSuccess(false)
            });
        }, 3000);
    };

    // Обработка добавления работы
    const handleAddWork = async (data: any) => {
        try {
            await addWork({
                ...data,
                published: true,
                views: 0,
                likes: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });

            showNotification('Работа успешно добавлена!');
            navigate('/admin/works');
        } catch (error) {
            console.error('Ошибка добавления работы:', error);
            showNotification('Ошибка при добавлении работы');
        }
    };

    // Обработка редактирования работы
    const handleEditWork = async (data: any) => {
        if (!editingWork) return;

        try {
            await updateWork(editingWork.id, data);

            showNotification('Работа успешно обновлена!');
            setEditingWork(null);
            navigate('/admin/works');
        } catch (error) {
            console.error('Ошибка обновления работы:', error);
            showNotification('Ошибка при обновлении работы');
        }
    };

    // Обработка удаления работы
    const handleDeleteWork = async (id: number) => {
        try {
            await deleteWork(id);
            showNotification('Работа успешно удалена!');
        } catch (error) {
            console.error('Ошибка удаления работы:', error);
            showNotification('Ошибка при удалении работы');
        }
    };

    // Публикация/снятие с публикации
    const handleTogglePublish = async (work: any) => {
        try {
            if (work.published) {
                await unpublishWork(work.id);
                showNotification('Работа снята с публикации');
            } else {
                await publishWork(work.id);
                showNotification('Работа опубликована');
            }
        } catch (error) {
            console.error('Ошибка изменения статуса:', error);
            showNotification('Ошибка при изменении статуса');
        }
    };

    // Статистика для дашборда
    const stats = getWorkStats();
    const adminStats = {
        totalWorks: stats.total,
        worksByType: stats.byType,
        worksAddedThisMonth: works.filter(work => {
            const workDate = new Date(work.createdAt || work.date);
            const now = new Date();
            return workDate.getMonth() === now.getMonth() &&
                workDate.getFullYear() === now.getFullYear();
        }).length,
        totalViews: works.reduce((sum, work) => sum + (work.views || 0), 0),
        totalLikes: works.reduce((sum, work) => sum + (work.likes || 0), 0),
        published: stats.published,
        draft: stats.draft
    };

    // Активность для дашборда
    const recentActivity = [
        {
            type: 'stats',
            message: `Опубликовано ${stats.published} из ${stats.total} работ`,
            time: 'Текущий статус'
        },
        ...works
            .sort((a, b) => new Date(b.updatedAt || b.date).getTime() - new Date(a.updatedAt || a.date).getTime())
            .slice(0, 3)
            .map(work => ({
                type: 'work',
                message: `Обновлена работа "${work.title}"`,
                time: new Date(work.updatedAt || work.date).toLocaleDateString('ru-RU')
            }))
    ];

    if (authLoading || galleryLoading) {
        return (
            <div className="admin-loading">
                <div className="loading-spinner"></div>
                <p>Загрузка админ-панели...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return (
        <AdminLayout>
            {/* Уведомление об успехе */}
            {showSuccess && (
                <div className="success-notification">
                    <div className="success-content">
                        <span className="success-icon">✅</span>
                        <span>{successMessage}</span>
                    </div>
                </div>
            )}

            <Routes>
                <Route
                    path="/"
                    element={
                        <Dashboard
                            stats={adminStats}
                            recentActivity={recentActivity}
                            user={user}
                        />
                    }
                />

                <Route
                    path="/works"
                    element={
                        editingWork ? (
                            <WorkForm
                                onSubmit={handleEditWork}
                                initialData={editingWork}
                                isEditing={true}
                                onCancel={() => {
                                    setEditingWork(null);
                                    navigate('/admin/works');
                                }}
                            />
                        ) : (
                            <WorksList
                                works={works}
                                onEdit={(work) => {
                                    setEditingWork(work);
                                    navigate(`/admin/works/edit/${work.id}`);
                                }}
                                onDelete={handleDeleteWork}
                                onPreview={setPreviewWork}
                                onTogglePublish={handleTogglePublish}
                            />
                        )
                    }
                />

                <Route
                    path="/add"
                    element={
                        <WorkForm onSubmit={handleAddWork} />
                    }
                />

                <Route
                    path="/works/edit/:id"
                    element={
                        editingWork ? (
                            <WorkForm
                                onSubmit={handleEditWork}
                                initialData={editingWork}
                                isEditing={true}
                                onCancel={() => {
                                    setEditingWork(null);
                                    navigate('/admin/works');
                                }}
                            />
                        ) : (
                            <div>Загрузка...</div>
                        )
                    }
                />

                <Route path="/categories" element={<div>Управление категориями</div>} />
                <Route path="/settings" element={<div>Настройки галереи</div>} />
                <Route path="/users" element={<div>Пользователи</div>} />
                <Route path="/logs" element={<div>Логи активности</div>} />
            </Routes>

            {/* Модальное окно предпросмотра */}
            {previewWork && (
                <div className="admin-preview-modal">
                    <div className="preview-overlay" onClick={() => setPreviewWork(null)}></div>
                    <div className="preview-content">
                        <button
                            className="preview-close"
                            onClick={() => setPreviewWork(null)}
                        >
                            ✕
                        </button>
                        <img src={previewWork.imageUrl} alt={previewWork.title} />
                        <div className="preview-info">
                            <h3>{previewWork.title}</h3>
                            <p>{previewWork.description}</p>
                            <div className="preview-stats">
                                <span>Просмотры: {previewWork.views || 0}</span>
                                <span>Лайки: {previewWork.likes || 0}</span>
                                <span>Статус: {previewWork.published ? 'Опубликовано' : 'Черновик'}</span>
                            </div>
                            <button
                                className="view-site-button"
                                onClick={() => {
                                    window.open(`/?preview=${previewWork.id}`, '_blank');
                                }}
                            >
                                Посмотреть на сайте
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default AdminDashboard;