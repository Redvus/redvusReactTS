import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GalleryFilter from './GalleryFilter';
import GalleryItem from './GalleryItem';
import Loader from './Loader';
import { useGallery } from '../contexts/GalleryContext';
import '../styles/main.scss';

const Gallery: React.FC = () => {
    const {
        filteredWorks,
        loading,
        filterWorks,
        searchWorks,
        getWorkStats
    } = useGallery();

    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const galleryRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    // Переключение темы
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('gallery-theme') as 'light' | 'dark';

        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.toggle('theme-dark', savedTheme === 'dark');
        } else if (prefersDark) {
            setTheme('dark');
            document.body.classList.add('theme-dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.toggle('theme-dark', newTheme === 'dark');
        localStorage.setItem('gallery-theme', newTheme);
    };

    // Анимация при изменении фильтра
    useEffect(() => {
        if (!loading && galleryRef.current) {
            // Анимация счетчика
            if (counterRef.current) {
                gsap.fromTo(
                    counterRef.current,
                    { scale: 1.5, rotation: 10 },
                    {
                        scale: 1,
                        rotation: 0,
                        duration: 0.5,
                        ease: 'back.out(1.7)'
                    }
                );
            }

            // Анимация элементов галереи
            const items = galleryRef.current.querySelectorAll('.gallery-grid__item');

            gsap.killTweensOf(items);
            gsap.set(items, { opacity: 0, y: 30 });

            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });
        }
    }, [filteredWorks, loading]);

    // Обработка поиска
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            searchWorks(searchTerm);
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [searchTerm, searchWorks]);

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        filterWorks(filter as any);
    };

    const handleOpenModal = (item: any) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedItem(null), 300);
    };

    const stats = getWorkStats();

    // Показываем только опубликованные работы
    const publishedWorks = filteredWorks.filter(work => work.published !== false);

    return (
        <div className="app">
            {/* Переключатель темы и кнопка админки */}
            <div className="theme-toggle">
                <button onClick={toggleTheme} aria-label={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                <a href="/admin" className="admin-link" title="Админ-панель">
                    ⚙️
                </a>
            </div>

            {/* Хедер */}
            <header className="app-header">
                <h1 className="app-header__title">Галерея работ</h1>
                <p className="app-header__subtitle">
                    {publishedWorks.length} проектов в портфолио
                </p>

                <div className="header-search">
                    <input
                        type="text"
                        placeholder="Поиск проектов..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <span className="search-icon">🔍</span>
                </div>
            </header>

            {/* Основной контент */}
            <main className="gallery-container container">
                <GalleryFilter
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                />

                {/* Статистика */}
                <div className="gallery-stats">
                    <div className="gallery-stats__item">
                        <span ref={counterRef} className="gallery-stats__number">
                            {publishedWorks.length}
                        </span>
                        <span className="gallery-stats__label">Опубликовано</span>
                    </div>
                    <div className="gallery-stats__item">
                        <span className="gallery-stats__number">
                            {Object.keys(stats.byType).length}
                        </span>
                        <span className="gallery-stats__label">Категорий</span>
                    </div>
                    <div className="gallery-stats__item">
                        <span className="gallery-stats__number">
                            {stats.totalViews || 0}
                        </span>
                        <span className="gallery-stats__label">Просмотров</span>
                    </div>
                    <div className="gallery-stats__item">
                        <span className="gallery-stats__number">
                            {stats.totalLikes || 0}
                        </span>
                        <span className="gallery-stats__label">Лайков</span>
                    </div>
                </div>

                {/* Загрузка или контент */}
                {loading ? (
                    <div className="loading-container py-32">
                        <Loader />
                        <p className="mt-4 text-gray-600">Загружаем работы...</p>
                    </div>
                ) : (
                    <>
                        <div ref={galleryRef} className="gallery-grid">
                            {publishedWorks.length > 0 ? (
                                publishedWorks.map((item, index) => (
                                    <GalleryItem
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        theme={theme}
                                        onOpenModal={handleOpenModal}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 mb-6">
                                        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {searchTerm ? 'Ничего не найдено' : 'Работы скоро появятся'}
                                    </h3>
                                    <p className="text-gray-600 max-w-md mx-auto">
                                        {searchTerm
                                            ? 'Попробуйте изменить запрос поиска'
                                            : 'Администратор добавляет новые проекты'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </main>

            {/* Футер */}
            <footer className="app-footer">
                <div className="app-footer__content container">
                    <p>© 2024 Галерея работ. Всего проектов: {stats.total}</p>
                    <div className="mt-2 text-sm text-gray-500">
                        {stats.draft > 0 && (
                            <span>В разработке: {stats.draft} проектов</span>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Gallery;