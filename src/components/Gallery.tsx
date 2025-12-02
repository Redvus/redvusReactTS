import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GalleryFilter from './GalleryFilter';
import GalleryItem from './GalleryItem';
import Loader from './Loader';
import type { GalleryItem as GalleryItemType, FilterType } from '../types/gallery.types';
import { galleryItems } from '../data/gallery.data';

const Gallery: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [filteredItems, setFilteredItems] = useState<GalleryItemType[]>(galleryItems);
    const [isLoading, setIsLoading] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

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

    const handleFilterChange = (filter: FilterType) => {
        setActiveFilter(filter);
    };

    // Оптимизированная функция для вычисления статистики
    const getGalleryStats = () => {
        const totalItems = filteredItems.length;
        const uniqueCategories = new Set(filteredItems.map(item => item.type)).size;
        return { totalItems, uniqueCategories };
    };

    const { totalItems, uniqueCategories } = getGalleryStats();

    return (
        <div className="gallery-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <GalleryFilter
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
            />

            <div className="gallery-stats mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-sm">
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
            </div>

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
                                <GalleryItem key={item.id} item={item} index={index} />
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

                    {filteredItems.length > 0 && (
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
                    )}
                </>
            )}
        </div>
    );
};

export default Gallery;