import type { FilterType, GalleryItem } from '../types/gallery.types';

export interface FilterOption {
    id: FilterType;
    label: string;
    count: number;
}

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'Корпоративный портал',
        description: 'Современный веб-портал для управления бизнес-процессами компании',
        type: 'web',
        imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-01-15',
        tags: ['React', 'TypeScript', 'Node.js']
    },
    {
        id: 2,
        title: 'Фитнес-трекер',
        description: 'Мобильное приложение для отслеживания активности и питания',
        type: 'mobile',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-02-20',
        tags: ['React Native', 'Firebase', 'HealthKit']
    },
    {
        id: 3,
        title: 'Брендбук StartupX',
        description: 'Полный брендбук для технологического стартапа',
        type: 'branding',
        imageUrl: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-03-10',
        tags: ['Logo', 'Colors', 'Typography']
    },
    {
        id: 4,
        title: 'UI/UX для FinTech',
        description: 'Дизайн интерфейса финансового приложения',
        type: 'design',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-01-30',
        tags: ['Figma', 'Prototype', 'User Research']
    },
    {
        id: 5,
        title: 'Интернет-магазин моды',
        description: 'E-commerce платформа для модного бренда',
        type: 'web',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-02-28',
        tags: ['Next.js', 'Stripe', 'Tailwind CSS']
    },
    {
        id: 6,
        title: 'Каршеринг приложение',
        description: 'Мобильное приложение для аренды автомобилей',
        type: 'mobile',
        imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-03-05',
        tags: ['Flutter', 'Maps', 'Payment']
    },
    {
        id: 7,
        title: 'Цифровые иллюстрации',
        description: 'Серия иллюстраций для детской образовательной платформы',
        type: 'illustration',
        imageUrl: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-03-15',
        tags: ['Procreate', 'Digital Art', 'Characters']
    },
    {
        id: 8,
        title: 'Упаковка косметики',
        description: 'Дизайн эко-упаковки для органической косметики',
        type: 'design',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-01-25',
        tags: ['Packaging', 'Eco-friendly', 'Print']
    },
    {
        id: 9,
        title: 'Лендинг курсов',
        description: 'Высококонверсионный лендинг для онлайн-образования',
        type: 'web',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-02-10',
        tags: ['Vue.js', 'GSAP', 'A/B Testing']
    },
    {
        id: 10,
        title: 'Иллюстрации для блога',
        description: 'Серия уникальных иллюстраций для технического блога',
        type: 'illustration',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-03-01',
        tags: ['Vector', 'Blog', 'Tech']
    },
    {
        id: 11,
        title: 'Брендинг кафе',
        description: 'Фирменный стиль сети кофеен',
        type: 'branding',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-02-15',
        tags: ['Identity', 'Menu', 'Merch']
    },
    {
        id: 12,
        title: 'Приложение для медитации',
        description: 'Мобильное приложение с guided медитациями',
        type: 'mobile',
        imageUrl: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-03-20',
        tags: ['Swift', 'Audio', 'Health']
    }
];

export const filterOptions: FilterOption[] = [
    { id: 'all', label: 'Все работы', count: galleryItems.length },
    { id: 'web', label: 'Веб', count: galleryItems.filter(item => item.type === 'web').length },
    { id: 'mobile', label: 'Мобильные', count: galleryItems.filter(item => item.type === 'mobile').length },
    { id: 'design', label: 'Дизайн', count: galleryItems.filter(item => item.type === 'design').length },
    { id: 'branding', label: 'Брендинг', count: galleryItems.filter(item => item.type === 'branding').length },
    { id: 'illustration', label: 'Иллюстрации', count: galleryItems.filter(item => item.type === 'illustration').length }
];