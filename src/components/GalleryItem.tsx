import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { GalleryItem as GalleryItemType } from '../types/gallery.types';

interface GalleryItemProps {
    item: GalleryItemType;
    index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, index }) => {
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

    const handleMouseEnter = () => {
        if (itemRef.current) {
            gsap.to(itemRef.current, {
                scale: 1.05,
                y: -10,
                duration: 0.4,
                ease: 'power2.out'
            });

            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    scale: 1.1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        }
    };

    const handleMouseLeave = () => {
        if (itemRef.current) {
            gsap.to(itemRef.current, {
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            });

            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        }
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

    return (
        <div
            ref={itemRef}
            className="gallery-item group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="gallery-item-image overflow-hidden rounded-t-2xl">
                <img
                    ref={imageRef}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-600"
                    loading="lazy"
                />
                <div
                    className="gallery-item-type absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                >
                    {getTypeLabel(item.type)}
                </div>
            </div>

            <div className="gallery-item-content p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="gallery-item-title text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {item.title}
                    </h3>
                    <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <p className="gallery-item-description text-gray-600 mb-4 line-clamp-2">
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

                <button className="gallery-item-button w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                    Подробнее
                </button>
            </div>
        </div>
    );
};

export default GalleryItem;