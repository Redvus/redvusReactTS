import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import type { GalleryItem } from '../../types/gallery.types';

interface WorksListProps {
    works: GalleryItem[];
    onEdit: (work: GalleryItem) => void;
    onDelete: (id: number) => Promise<void>;
    onPreview: (work: GalleryItem) => void;
}

const WorksList: React.FC<WorksListProps> = ({ works, onEdit, onDelete, onPreview }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
    const [selectedWorks, setSelectedWorks] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const filteredWorks = works
        .filter(work => {
            const matchesSearch = work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                work.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === 'all' || work.type === selectedType;
            return matchesSearch && matchesType;
        })
        .sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return a.title.localeCompare(b.title);
        });

    const handleDelete = async (id: number) => {
        if (window.confirm('Вы уверены, что хотите удалить эту работу?')) {
            setIsLoading(true);
            await onDelete(id);
            setIsLoading(false);
        }
    };

    const handleBulkDelete = async () => {
        if (selectedWorks.length === 0) return;

        if (window.confirm(`Вы уверены, что хотите удалить ${selectedWorks.length} работ?`)) {
            setIsLoading(true);
            for (const id of selectedWorks) {
                await onDelete(id);
            }
            setSelectedWorks([]);
            setIsLoading(false);
        }
    };

    const toggleSelectAll = () => {
        if (selectedWorks.length === filteredWorks.length) {
            setSelectedWorks([]);
        } else {
            setSelectedWorks(filteredWorks.map(work => work.id));
        }
    };

    const toggleSelectWork = (id: number) => {
        setSelectedWorks(prev =>
            prev.includes(id)
                ? prev.filter(workId => workId !== id)
                : [...prev, id]
        );
    };

    useEffect(() => {
        const items = document.querySelectorAll('.works-table tbody tr');
        gsap.fromTo(
            items,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: 'power3.out'
            }
        );
    }, [filteredWorks]);

    const getTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            'web': '🌐 Веб',
            'mobile': '📱 Мобильное',
            'design': '🎨 Дизайн',
            'branding': '🏷️ Брендинг',
            'illustration': '🖼️ Иллюстрация'
        };
        return labels[type] || type;
    };

    const getTypeColor = (type: string) => {
        const colors: Record<string, string> = {
            'web': '#3b82f6',
            'mobile': '#10b981',
            'design': '#8b5cf6',
            'branding': '#f59e0b',
            'illustration': '#ec4899'
        };
        return colors[type] || '#6b7280';
    };

    return (
        <div className="works-list">
            <div className="list-header">
                <div className="header-left">
                    <h2>Работы ({filteredWorks.length})</h2>
                    {selectedWorks.length > 0 && (
                        <div className="selection-info">
                            <span>Выбрано: {selectedWorks.length}</span>
                            <button
                                onClick={handleBulkDelete}
                                disabled={isLoading}
                                className="bulk-delete-button"
                            >
                                {isLoading ? 'Удаление...' : 'Удалить выбранные'}
                            </button>
                        </div>
                    )}
                </div>

                <div className="header-controls">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Поиск работ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="search-icon">🔍</span>
                    </div>

                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="type-filter"
                    >
                        <option value="all">Все категории</option>
                        <option value="web">Веб</option>
                        <option value="mobile">Мобильные</option>
                        <option value="design">Дизайн</option>
                        <option value="branding">Брендинг</option>
                        <option value="illustration">Иллюстрации</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                        className="sort-select"
                    >
                        <option value="date">По дате</option>
                        <option value="title">По названию</option>
                    </select>
                </div>
            </div>

            {filteredWorks.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">🖼️</div>
                    <h3>Работ не найдено</h3>
                    <p>Попробуйте изменить параметры поиска</p>
                </div>
            ) : (
                <div className="works-table-container">
                    <table className="works-table">
                        <thead>
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        checked={selectedWorks.length === filteredWorks.length && filteredWorks.length > 0}
                                        onChange={toggleSelectAll}
                                    />
                                </th>
                                <th>Изображение</th>
                                <th>Название</th>
                                <th>Категория</th>
                                <th>Теги</th>
                                <th>Дата</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredWorks.map((work) => (
                                <tr key={work.id} className={selectedWorks.includes(work.id) ? 'selected' : ''}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedWorks.includes(work.id)}
                                            onChange={() => toggleSelectWork(work.id)}
                                        />
                                    </td>
                                    <td>
                                        <div className="work-image">
                                            <img
                                                src={work.imageUrl}
                                                alt={work.title}
                                                onClick={() => onPreview(work)}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="work-info">
                                            <h4 className="work-title">{work.title}</h4>
                                            <p className="work-description">{work.description}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                            className="work-type"
                                            style={{
                                                backgroundColor: getTypeColor(work.type) + '20',
                                                color: getTypeColor(work.type),
                                                borderColor: getTypeColor(work.type)
                                            }}
                                        >
                                            {getTypeLabel(work.type)}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="work-tags">
                                            {work.tags.slice(0, 3).map((tag, index) => (
                                                <span key={index} className="work-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                            {work.tags.length > 3 && (
                                                <span className="more-tags">+{work.tags.length - 3}</span>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <span className="work-date">{work.date}</span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                onClick={() => onPreview(work)}
                                                className="action-button preview"
                                                title="Просмотр"
                                            >
                                                👁️
                                            </button>
                                            <button
                                                onClick={() => onEdit(work)}
                                                className="action-button edit"
                                                title="Редактировать"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                onClick={() => handleDelete(work.id)}
                                                disabled={isLoading}
                                                className="action-button delete"
                                                title="Удалить"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="list-footer">
                <div className="pagination">
                    <button className="page-button" disabled>←</button>
                    <button className="page-button active">1</button>
                    <button className="page-button">2</button>
                    <button className="page-button">3</button>
                    <button className="page-button">→</button>
                </div>

                <div className="stats">
                    <span>Показано {filteredWorks.length} из {works.length} работ</span>
                </div>
            </div>
        </div>
    );
};

export default WorksList;