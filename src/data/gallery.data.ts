import type { FilterType, GalleryItem } from '../types/gallery.types';

export interface FilterOption {
    id: FilterType;
    label: string;
    icon: string;
    count: number;
}

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'video',
        imageUrl: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
        images: [
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        videos: [
            {
                url: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/R_Forpost.mp4',
                thumbnail: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
                title: 'Демонстрация работы портала'
            }
        ],
        date: '2026-02',
        tags: ['Blender', 'Substance Paiter', 'DaVinci Resolve']
    },
    {
        id: 2,
        title: 'Фитнес-трекер трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'web',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2025-02',
        tags: ['React', 'Node.js']
    },
    {
        id: 3,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'games',
        imageUrl: 'https://s3.timeweb.com/c846fb63-voos/wom/fantasy/comparison/fw_comparison_153.jpg',
        images: [
            'https://s3.timeweb.com/c846fb63-voos/wom/fantasy/comparison/fw_comparison_153.jpg',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2025-04',
        tags: ['Javascript', 'CSS']
    },
    {
        id: 4,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'art',
        imageUrl: 'https://s3.timeweb.com/c846fb63-voos/wom/fantasy/emmaWatson/fw_emma_58.jpg',
        images: [
            'https://s3.timeweb.com/c846fb63-voos/wom/fantasy/emmaWatson/fw_emma_58.jpg',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2024-06',
        tags: ['Blender', 'Substance Paiter']
    },
    {
        id: 5,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'branding',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2025-02',
        tags: ['Illustrator']
    },
    {
        id: 6,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'mobile',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2025-03',
        tags: ['Kotlin', 'Android SDK']
    }
];

export const filterOptions: FilterOption[] = [
    { id: 'all', label: 'Всего', icon: 'fas fa-th-large', count: galleryItems.length },
    { id: 'web', label: 'Сайты', icon: 'fas fa-globe', count: galleryItems.filter(item => item.type === 'web').length },
    { id: 'mobile', label: 'Мобильные', icon: 'fas fa-mobile-screen-button', count: galleryItems.filter(item => item.type === 'mobile').length },
    { id: 'games', label: 'Игры', icon: 'fas fa-gamepad', count: galleryItems.filter(item => item.type === 'games').length },
    { id: 'branding', label: 'Брендинг', icon: 'fas fa-splotch', count: galleryItems.filter(item => item.type === 'branding').length },
    { id: 'video', label: 'Видео', icon: 'fas fa-video', count: galleryItems.filter(item => item.type === 'video').length },
    { id: 'art', label: 'Арт', icon: 'fas fa-paint-brush', count: galleryItems.filter(item => item.type === 'art').length }
];