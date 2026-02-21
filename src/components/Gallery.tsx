import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

import Loader from './Loader';
// import Modal from './Modal';
import Modal from './ModalMany';

import GalleryFilter from './GalleryFilter';
import GalleryItem from './GalleryItem';

import type { GalleryItem as GalleryItemType, FilterType } from '../types/gallery.types';
import { galleryItems } from '../data/gallery.data';

const Gallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [filteredItems, setFilteredItems] = useState<GalleryItemType[]>(galleryItems);
    const [isLoading, setIsLoading] = useState(false);

    const galleryRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('gallery-theme') as 'light' | 'dark';
        if (savedTheme) {
            return savedTheme;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });
    // const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // useEffect(() => {
    //     // Анимация фоновых элементов
    //     gsap.to('.bg-blob-1', {
    //         x: 100,
    //         y: 50,
    //         duration: 20,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: 'sine.inOut'
    //     });

    //     gsap.to('.bg-blob-2', {
    //         x: -80,
    //         y: -30,
    //         duration: 25,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: 'sine.inOut',
    //         delay: 5
    //     });
    // }, []);

    // Фильтрация работ с использованием requestAnimationFrame для избежания каскадных рендеров
    useEffect(() => {
        let isMounted = true;

        const filterItems = () => {
            setIsLoading(true);

            // Имитация асинхронной загрузки данных
            setTimeout(() => {
                if (!isMounted) return;

                const newItems = activeFilter === 'all'
                    ? [...galleryItems]
                    : galleryItems.filter(item => item.type === activeFilter);

                setFilteredItems(newItems);
                setIsLoading(false);
            }, 300);
        };

        // Используем requestAnimationFrame для планирования обновления состояния
        const animationFrameId = requestAnimationFrame(filterItems);

        return () => {
            isMounted = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [activeFilter]);

    // Анимация при изменении фильтра
    useEffect(() => {
        if (!isLoading && galleryRef.current) {
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
            const items = galleryRef.current.querySelectorAll('.gallery-item');

            // Используем gsap для плавной анимации
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
    }, [filteredItems, isLoading]);

    // Применение темы к DOM
    // useEffect(() => {
    //     document.body.classList.toggle('theme-dark', theme === 'dark');
    // }, [theme]);

    // const toggleTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme);
    //     document.body.classList.toggle('theme-dark', newTheme === 'dark');
    //     localStorage.setItem('gallery-theme', newTheme);
    // };

    // Переключение темы
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('gallery-theme') as 'light' | 'dark';

        if (savedTheme) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
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

    const handleFilterChange = (filter: FilterType) => {
        setActiveFilter(filter);
    };

    // Открытие модального окна
    const handleOpenModal = (item: GalleryItemType) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    // Закрытие модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedItem(null), 300);
    };

    // Оптимизированная функция для вычисления статистики
    // const getGalleryStats = () => {
    //     const totalItems = filteredItems.length;
    //     const uniqueCategories = new Set(filteredItems.map(item => item.type)).size;
    //     return { totalItems, uniqueCategories };
    // };

    // const { totalItems, uniqueCategories } = getGalleryStats();

    return (
        <>
            <Header />

            <GalleryFilter
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
            />

            <main ref={containerRef} className="wrapper">
                <div className="gallery-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="theme-toggle">
                        <button onClick={toggleTheme} aria-label={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}>
                            {theme === 'light' ? (
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* <div className="gallery-stats mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <div className="text-center sm:text-left mb-4 sm:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800">Портфолио проектов</h3>
                                <p className="text-gray-600 mt-1">Отфильтруйте работы по категориям</p>
                            </div>

                            <div className="flex items-center space-x-6">
                                <div className="text-center">
                                    <span
                                        ref={counterRef}
                                        className="block text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                                    >
                                        {totalItems}
                                    </span>
                                    <span className="text-gray-600 text-sm">Найдено работ</span>
                                </div>

                                <div className="hidden md:block text-center">
                                    <span className="block text-4xl font-bold text-gray-800">
                                        {uniqueCategories}
                                    </span>
                                    <span className="text-gray-600 text-sm">Категорий</span>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {isLoading ? (
                        <div className="loading-container py-32">
                            <div className="text-center">
                                <Loader />
                                <p className="mt-4 text-gray-600">Загружаем работы...</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div ref={galleryRef} className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((item, index) => (
                                        <GalleryItem
                                            key={item.id}
                                            item={item}
                                            index={index}
                                            theme={theme}
                                            onOpenModal={handleOpenModal}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-full">
                                        <div className="text-center py-20">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 mb-6">
                                                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ничего не найдено</h3>
                                            <p className="text-gray-600 max-w-md mx-auto">
                                                В выбранной категории пока нет работ. Попробуйте выбрать другую категорию или посмотрите все работы.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* {filteredItems.length > 0 && (
                                <div className="mt-12 text-center">
                                    <button
                                        onClick={() => {
                                            // Пример: добавить больше элементов
                                            console.log('Загрузить еще работы');
                                        }}
                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        <span>Показать ещё работы</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            )} */}
                        </>
                    )}
                </div>
            </main>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                item={selectedItem}
            />

            <Footer />
        </>
    );
};

export default Gallery;