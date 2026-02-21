export interface GalleryItem {
    id: number;
    title: string;
    description: string;
    type: string;
    // imageUrl: string;
    imageUrl: string; // Главное изображение (превью)
    images?: string[]; // Массив всех изображений проекта
    videos?: VideoItem[]; // Массив видео проекта
    date: string;
    tags: string[];
    published?: string;
    views?: number;
    likes?: number;
    createdAt?: string;
    updatedAt?: string;
    order?: number;
    featured?: boolean;
}

export interface VideoItem {
    url: string;
    thumbnail?: string;
    title?: string;
    duration?: number;
}

export type FilterType = 'all' | 'web' | 'games' | 'branding' | 'publish' | 'design';

export interface GalleryStats {
    total: number;
    published: number;
    draft: number;
    byType: Record<string, number>;
    totalViews: number;
    totalLikes: number;
}

export interface AdminActivity {
    id: string;
    action: 'create' | 'update' | 'delete' | 'publish' | 'unpublish';
    workId: number;
    workTitle: string;
    userId: string;
    userName: string;
    timestamp: string;
    details?: string;
}