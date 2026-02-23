import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { GalleryItem } from '../../types/gallery.types';

interface WorkFormProps {
    onSubmit: (data: Partial<GalleryItem>) => Promise<void>;
    initialData?: GalleryItem | null;
    isEditing?: boolean;
    onCancel?: () => void;
}

const WorkForm: React.FC<WorkFormProps> = ({
    onSubmit,
    initialData,
    isEditing = false,
    onCancel
}) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');
    const [dragOver, setDragOver] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'web',
        imageUrl: '',
        date: new Date().toISOString().split('T')[0],
        tags: [] as string[]
    });

    const [newTag, setNewTag] = useState('');

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                description: initialData.description,
                type: initialData.type,
                imageUrl: initialData.imageUrl,
                date: initialData.date,
                tags: [...initialData.tags]
            });
            setPreviewUrl(initialData.imageUrl);
        }
    }, [initialData]);

    useEffect(() => {
        if (formRef.current) {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await onSubmit(formData);

            if (!isEditing) {
                // Сброс формы после успешного добавления
                setFormData({
                    title: '',
                    description: '',
                    type: 'web',
                    imageUrl: '',
                    date: new Date().toISOString().split('T')[0],
                    tags: []
                });
                setPreviewUrl('');
            }
        } catch (error) {
            console.error('Ошибка при сохранении:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (file: File) => {
        // Имитация загрузки на сервер
        setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setFormData(prev => ({ ...prev, imageUrl: result }));
            setPreviewUrl(result);
            setLoading(false);
        };
        reader.readAsDataURL(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    const addTag = () => {
        if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, newTag.trim()]
            }));
            setNewTag('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && newTag.trim()) {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="work-form">
            <div className="form-header">
                <h2>{isEditing ? 'Редактирование работы' : 'Добавить новую работу'}</h2>
                {onCancel && (
                    <button type="button" onClick={onCancel} className="cancel-button">
                        Отмена
                    </button>
                )}
            </div>

            <div className="form-grid">
                {/* Основная информация */}
                <div className="form-section">
                    <h3 className="section-title">Основная информация</h3>

                    <div className="form-group">
                        <label htmlFor="title">Название проекта *</label>
                        <input
                            id="title"
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="Введите название проекта"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Описание *</label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Опишите проект"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Категория *</label>
                        <select
                            id="type"
                            value={formData.type}
                            onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                        >
                            <option value="web">Веб-разработка</option>
                            <option value="mobile">Мобильные приложения</option>
                            <option value="design">Дизайн</option>
                            <option value="branding">Брендинг</option>
                            <option value="illustration">Иллюстрации</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Дата завершения</label>
                        <input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                        />
                    </div>
                </div>

                {/* Загрузка изображения */}
                <div className="form-section">
                    <h3 className="section-title">Изображение проекта</h3>

                    <div className="image-upload">
                        <div
                            className={`upload-area ${dragOver ? 'drag-over' : ''} ${previewUrl ? 'has-preview' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            {previewUrl ? (
                                <div className="image-preview">
                                    <img src={previewUrl} alt="Preview" />
                                    <button
                                        type="button"
                                        className="remove-image"
                                        onClick={() => {
                                            setPreviewUrl('');
                                            setFormData(prev => ({ ...prev, imageUrl: '' }));
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="upload-icon">📁</div>
                                    <p>Перетащите изображение сюда или</p>
                                    <label htmlFor="file-upload" className="upload-button">
                                        Выбрать файл
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="file-input"
                                    />
                                </>
                            )}
                        </div>

                        <div className="upload-info">
                            <p>Поддерживаемые форматы: JPG, PNG, WebP</p>
                            <p>Максимальный размер: 5 MB</p>
                            <p>Рекомендуемый размер: 1200×800 пикселей</p>
                        </div>
                    </div>

                    {/* Теги */}
                    <div className="form-group">
                        <label>Теги и технологии</label>
                        <div className="tags-input">
                            <input
                                type="text"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Введите тег и нажмите Enter"
                            />
                            <button type="button" onClick={addTag} className="add-tag-button">
                                Добавить
                            </button>
                        </div>

                        <div className="tags-list">
                            {formData.tags.map((tag, index) => (
                                <span key={index} className="tag-item">
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => removeTag(tag)}
                                        className="remove-tag"
                                    >
                                        ✕
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? (
                        <span className="loading-spinner"></span>
                    ) : isEditing ? (
                        'Сохранить изменения'
                    ) : (
                        'Добавить работу'
                    )}
                </button>

                {isEditing && onCancel && (
                    <button type="button" onClick={onCancel} className="secondary-button">
                        Отмена
                    </button>
                )}
            </div>
        </form>
    );
};

export default WorkForm;