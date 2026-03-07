import type { FilterType, GalleryItem } from '../types/gallery.types';

export interface FilterOption {
    id: FilterType;
    label: string;
    icon: string;
    count: number;
}

export const galleryItems: GalleryItem[] = [
    // Сайты

    {
        id: 1,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'web',
        imageUrl: 'projects/forpost/ForpostCover',
        images: [
            'projects/garage/rp_garage_1',
            'projects/garage/rp_garage_2'
        ],
        videos: [
            {
                url: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/R_Forpost.mp4',
                thumbnail: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
                title: 'Демонстрация работы портала'
            }
        ],
        date: '2022-02',
        tags: ['Blender', 'Substance Paiter', 'DaVinci Resolve']
    },
    {
        id: 2,
        title: 'Гараж',
        description: 'Сборка любимых игр в одном месте в тематике постапокалипсиса',
        type: 'web',
        imageUrl: 'assets/images/projects/garage/rp_garage_00.webp',
        images: [
            'assets/images/projects/garage/rp_garage_01.webp',
            'assets/images/projects/garage/rp_garage_02.webp',
            'assets/images/projects/garage/rp_garage_03.webp',
            'assets/images/projects/garage/rp_garage_04.webp',
            'assets/images/projects/garage/rp_garage_05.webp',
            'assets/images/projects/garage/rp_garage_06.webp'
        ],
        date: '2023-02',
        tags: ['Blender', 'Substance Paiter', 'Photoshop']
    },
    {
        id: 3,
        title: 'Поледняя сигарета',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'web',
        imageUrl: 'projects/girlNuclear/rp_girlnuclear_00',
        images: [
            'projects/girlNuclear/rp_girlnuclear_01',
            'projects/girlNuclear/rp_girlnuclear_02',
            'projects/girlNuclear/rp_girlnuclear_03',
            'projects/girlNuclear/rp_girlnuclear_04',
            'projects/girlNuclear/rp_girlnuclear_05'
        ],
        date: '2023-04',
        tags: ['Javascript', 'CSS']
    },
    {
        id: 4,
        title: 'Фитнекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'web',
        imageUrl: 'projects/garage/rp_garage_00',
        images: [
            'projects/garage/rp_garage_1',
            'projects/garage/rp_garage_2',
            'projects/garage/rp_garage_3'
        ],
        date: '2021-04',
        tags: ['Javascript', 'CSS'],
        linked: 'https://smibs.ru'
    },
    {
        id: 5,
        title: 'Проект о разностороннем человеке Гарине-Михайловском',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'web',
        imageUrl: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/games/garin/rp_garin_00.jpg',
        images: [
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/games/garin/rp_garin_01.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/games/garin/rp_garin_02.jpg',
            'https://c846fb63-voos.s3.twcstorage.ru/redvus/games/garin/rp_garin_03.jpg',
        ],
        videos: [
            {
                url: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/games/garin/rp_garin_intro.mp4',
                thumbnail: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
                title: 'Демонстрация работы портала'
            }
        ],
        date: '2021-04',
        tags: ['Blender', 'Substance Paiter', 'Photoshop', 'Javascript', 'CSS'],
        linked: 'https://redvus.ru/garin'
    },
    // Игры
    {
        id: 6,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'games',
        imageUrl: 'projects/forpost/ForpostCover',
        images: [
            'projects/garage/rp_garage_1',
            'projects/garage/rp_garage_2'
        ],
        date: '2023-02',
        tags: ['Blender', 'Substance Paiter', 'DaVinci Resolve']
    },

    // Мобильные
    {
        id: 7,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'mobile',
        imageUrl: 'projects/forpost/ForpostCover',
        images: [
            'projects/garage/rp_garage_1',
            'projects/garage/rp_garage_2'
        ],
        // videos: [
        //     {
        //         url: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/R_Forpost.mp4',
        //         thumbnail: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
        //         title: 'Демонстрация работы портала'
        //     }
        // ],
        date: '2023-02',
        tags: ['Blender', 'Substance Paiter', 'DaVinci Resolve']
    },

    // Брэндинг
    {
        id: 8,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'branding',
        imageUrl: 'projects/forpost/ForpostCover',
        images: [
            'projects/garage/rp_garage_1',
            'projects/garage/rp_garage_2'
        ],
        videos: [
            {
                url: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/R_Forpost.mp4',
                thumbnail: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
                title: 'Демонстрация работы портала'
            }
        ],
        date: '2020-02',
        tags: ['Blender', 'Substance Paiter', 'DaVinci Resolve']
    },

    // Видео
    {
        id: 9,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'video',
        imageUrl: 'projects/forpost/ForpostCover',
        images: [
            'projects/garage/rp_garage_1',
            'projects/garage/rp_garage_2'
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

    // Арт
    {
        id: 10,
        title: 'Форпост',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'art',
        imageUrl: 'projects/forpost/ForpostCover',
        images: [
            'projects/garage/rp_garage_1',
            'projects/garage/rp_garage_2'
        ],
        videos: [
            {
                url: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/R_Forpost.mp4',
                thumbnail: 'https://c846fb63-voos.s3.twcstorage.ru/redvus/projects/forpost/ForpostCover.jpg',
                title: 'Демонстрация работы портала'
            }
        ],
        date: '2025-02',
        tags: ['Blender', 'Substance Paiter', 'DaVinci Resolve']
    }
];

export const filterOptions: FilterOption[] = [
    { id: 'web', label: 'Сайты', icon: 'fas fa-globe', count: galleryItems.filter(item => item.type === 'web').length },
    { id: 'games', label: 'Игры', icon: 'fas fa-gamepad', count: galleryItems.filter(item => item.type === 'games').length },
    { id: 'mobile', label: 'Мобильные', icon: 'fas fa-mobile-screen-button', count: galleryItems.filter(item => item.type === 'mobile').length },
    { id: 'branding', label: 'Брэндинг', icon: 'fas fa-splotch', count: galleryItems.filter(item => item.type === 'branding').length },
    { id: 'video', label: 'Видео', icon: 'fas fa-video', count: galleryItems.filter(item => item.type === 'video').length },
    { id: 'art', label: 'Арт', icon: 'fas fa-paint-brush', count: galleryItems.filter(item => item.type === 'art').length },
    { id: 'all', label: 'Всего', icon: 'fas fa-th-large', count: galleryItems.length }
];