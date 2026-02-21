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
        title: 'Корпоративный портал',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'web',
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
        date: '2024-01-15',
        tags: ['React', 'TypeScript', 'Node.js']
    },
    {
        id: 2,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'games',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2024-02-20',
        tags: ['React Native', 'Firebase', 'HealthKit']
    },
    {
        id: 3,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'games',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2024-02-20',
        tags: ['React Native', 'Firebase', 'HealthKit']
    },
    {
        id: 4,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'games',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        date: '2024-02-20',
        tags: ['React Native', 'Firebase', 'HealthKit']
    }
];

export const filterOptions: FilterOption[] = [
    { id: 'all', label: 'Проектов', icon: 'fas fa-th-large', count: galleryItems.length },
    { id: 'web', label: 'Сайты', icon: 'fas fa-globe', count: galleryItems.filter(item => item.type === 'web').length },
    { id: 'games', label: 'Игры', icon: 'fas fa-gamepad', count: galleryItems.filter(item => item.type === 'games').length },
    { id: 'branding', label: 'Брендинг', icon: 'fas fa-splotch', count: galleryItems.filter(item => item.type === 'branding').length },
    { id: 'publish', label: 'Полиграфия', icon: 'fas fa-book-open', count: galleryItems.filter(item => item.type === 'publish').length },
    { id: 'design', label: 'Дизайн', icon: 'fas fa-object-group', count: galleryItems.filter(item => item.type === 'design').length }
];