// import React, { useEffect, useRef } from 'react';
import React, { useRef } from 'react';
// import { gsap } from 'gsap';
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
    // const indicatorRef = useRef<HTMLSpanElement>(null);

    // useEffect(() => {
    //     if (filterRef.current) {
    //         gsap.fromTo(
    //             filterRef.current,
    //             { opacity: 0, y: -30 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 1,
    //                 ease: 'elastic.out(1, 0.5)'
    //             }
    //         );
    //     }
    // }, []);

    // useEffect(() => {
    //     // Анимация активного индикатора
    //     if (indicatorRef.current) {
    //         const activeIndex = filterOptions.findIndex(opt => opt.id === activeFilter);
    //         const activeButton = buttonRefs.current[activeIndex];

    //         if (activeButton) {
    //             gsap.to(indicatorRef.current, {
    //                 x: activeButton.offsetLeft,
    //                 width: activeButton.offsetWidth,
    //                 duration: 0.4,
    //                 ease: 'power2.out'
    //             });
    //         }
    //     }
    // }, [activeFilter]);

    const handleFilterClick = (filter: FilterType, /*index: number*/) => {
        onFilterChange(filter);

        // // Анимация кнопки при клике
        // if (buttonRefs.current[index]) {
        //     gsap.to(buttonRefs.current[index], {
        //         scale: 1.2,
        //         duration: 0.1,
        //         yoyo: true,
        //         repeat: 1
        //     });
        // }
    };

    return (
        <div ref={filterRef} className="gallery-filter">
            <div className="gallery-filter__container">
                {/* <span
                    ref={indicatorRef}
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl transition-all duration-300"
                    style={{
                        width: '100px',
                        zIndex: 0
                    }}
                /> */}

                {filterOptions.map((filter: FilterOption, index: number) => (
                    <button
                        key={filter.id}
                        ref={el => { buttonRefs.current[index] = el; }}
                        className={`gallery-filter__button ${activeFilter === filter.id
                            ? 'gallery-filter__button--active'
                            : ''
                            }`}
                        onClick={() => handleFilterClick(filter.id, /*index*/)}
                    >
                        <span className="gallery-filter__label">
                            {filter.label}
                            <span className={`gallery-filter__count ${activeFilter === filter.id
                                ? 'gallery-filter__count--active'
                                : ''
                                }`}>
                                {filter.count}
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GalleryFilter;