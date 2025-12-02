import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { FilterType } from '../types/gallery.types';
import type { FilterOption } from '../data/gallery.data';
import { filterOptions } from '../data/gallery.data';

interface GalleryFilterProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({ activeFilter, onFilterChange }) => {
    const filterRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const indicatorRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (filterRef.current) {
            gsap.fromTo(
                filterRef.current,
                { opacity: 0, y: -30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'elastic.out(1, 0.5)'
                }
            );
        }
    }, []);

    useEffect(() => {
        // Анимация активного индикатора
        if (indicatorRef.current) {
            const activeIndex = filterOptions.findIndex(opt => opt.id === activeFilter);
            const activeButton = buttonRefs.current[activeIndex];

            if (activeButton) {
                gsap.to(indicatorRef.current, {
                    x: activeButton.offsetLeft,
                    width: activeButton.offsetWidth,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        }
    }, [activeFilter]);

    const handleFilterClick = (filter: FilterType, index: number) => {
        onFilterChange(filter);

        // Анимация кнопки при клике
        if (buttonRefs.current[index]) {
            gsap.to(buttonRefs.current[index], {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
        }
    };

    return (
        <div ref={filterRef} className="gallery-filter mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                Наши работы
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Исследуйте наше портфолио, фильтруя по категориям. Каждый проект — это уникальное решение и внимание к деталям.
            </p>

            <div className="relative">
                <div className="filter-buttons-container flex flex-wrap justify-center gap-2 relative">
                    <span
                        ref={indicatorRef}
                        className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl transition-all duration-300"
                        style={{
                            width: '100px',
                            zIndex: 0
                        }}
                    />

                    {filterOptions.map((filter: FilterOption, index: number) => (
                        <button
                            key={filter.id}
                            ref={el => { buttonRefs.current[index] = el; }}
                            className={`filter-button relative z-10 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter.id
                                ? 'text-white shadow-lg'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                            onClick={() => handleFilterClick(filter.id, index)}
                        >
                            <span className="flex items-center gap-2">
                                {filter.label}
                                <span className={`px-2 py-1 text-xs rounded-full ${activeFilter === filter.id
                                    ? 'bg-white/20'
                                    : 'bg-gray-200'
                                    }`}>
                                    {filter.count}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryFilter;