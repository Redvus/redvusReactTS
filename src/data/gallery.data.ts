import type { FilterType, GalleryItem } from '../types/gallery.types';

export interface FilterOption {
    id: FilterType;
    label: string;
    icon: string;
    count: number;
}

export const galleryItems: GalleryItem[] = [
    // Video
    {
        id: 1,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'video',
        imageUrl: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
        images: [
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_1.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_2.jpg'
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
        id: 3,
        title: 'Гараж',
        description: 'Сборка любимых игр в одном месте в тематике постапокалипсиса',
        type: 'art',
        imageUrl: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_0.jpg',
        images: [
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_1.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_2.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_3.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_4.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_5.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_6.jpg',
        ],
        date: '2025-02',
        tags: ['Blender', 'Substance Paiter', 'Photoshop']
    },
    {
        id: 2,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'art',
        imageUrl: 'https://s3.timeweb.com/c846fb63-voos/wom/fantasy/comparison/fw_comparison_153.jpg',
        images: [
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_4.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_1.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_2.jpg'
        ],
        date: '2025-04',
        tags: ['Javascript', 'CSS']
    },
    {
        id: 4,
        title: 'Фитнекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'video',
        imageUrl: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_0.jpg',
        images: [
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_1.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_2.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/garage/rp_garage_3.jpg',
        ],
        date: '2025-04',
        tags: ['Javascript', 'CSS']
    }
];

export const filterOptions: FilterOption[] = [
    { id: 'web', label: 'Сайты', icon: 'fas fa-globe', count: galleryItems.filter(item => item.type === 'web').length },
    { id: 'mobile', label: 'Мобильные', icon: 'fas fa-mobile-screen-button', count: galleryItems.filter(item => item.type === 'mobile').length },
    { id: 'games', label: 'Игры', icon: 'fas fa-gamepad', count: galleryItems.filter(item => item.type === 'games').length },
    { id: 'branding', label: 'Брэндинг', icon: 'fas fa-splotch', count: galleryItems.filter(item => item.type === 'branding').length },
    { id: 'video', label: 'Видео', icon: 'fas fa-video', count: galleryItems.filter(item => item.type === 'video').length },
    { id: 'art', label: 'Арт', icon: 'fas fa-paint-brush', count: galleryItems.filter(item => item.type === 'art').length },
    { id: 'all', label: 'Всего', icon: 'fas fa-th-large', count: galleryItems.length }
];