export interface GalleryItem {
    id: number;
    title: string;
    description: string;
    type: string;
    imageUrl: string;
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

export type FilterType = 'all' | 'web' | 'mobile' | 'design' | 'branding' | 'illustration';

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