import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { GalleryItem as GalleryItemType } from '../types/gallery.types';

interface GalleryItemProps {
    item: GalleryItemType;
    index: number;
    theme: 'light' | 'dark';
    onOpenModal: (item: GalleryItemType) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, index, onOpenModal }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (itemRef.current) {
            gsap.fromTo(
                itemRef.current,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'back.out(1.7)'
                }
            );
        }
    }, [index]);

    // const handleMouseEnter = () => {
    //     if (itemRef.current) {
    //         gsap.to(itemRef.current, {
    //             scale: 1.05,
    //             y: -10,
    //             duration: 0.4,
    //             ease: 'power2.out'
    //         });

    //         if (imageRef.current) {
    //             gsap.to(imageRef.current, {
    //                 scale: 1.1,
    //                 duration: 0.6,
    //                 ease: 'power2.out'
    //             });
    //         }
    //     }
    // };

    // const handleMouseLeave = () => {
    //     if (itemRef.current) {
    //         gsap.to(itemRef.current, {
    //             scale: 1,
    //             y: 0,
    //             duration: 0.4,
    //             ease: 'power2.out'
    //         });

    //         if (imageRef.current) {
    //             gsap.to(imageRef.current, {
    //                 scale: 1,
    //                 duration: 0.6,
    //                 ease: 'power2.out'
    //             });
    //         }
    //     }
    // };

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

    const getTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            'web': 'Веб',
            'mobile': 'Мобильное',
            'design': 'Дизайн',
            'branding': 'Брендинг',
            'illustration': 'Иллюстрация'
        };
        return labels[type] || type;
    };

    const handleClick = () => {
        onOpenModal(item);
    };

    return (
        <div
            ref={itemRef}
            className="gallery__item group"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <picture className="gallery__item_image">
                <img
                    ref={imageRef}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-600"
                    loading="lazy"
                />
                <div
                    className="gallery__item_type absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                >
                    {getTypeLabel(item.type)}
                </div>
            </picture>

            <div className="gallery__item_content p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="gallery__item_title text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {item.title}
                    </h3>
                    <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <p className="gallery__item_description text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    className="gallery-grid__button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal(item);
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ marginRight: '8px' }}
                    >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Смотреть проект
                </button>
            </div>
        </div>
    );
};

export default GalleryItem;