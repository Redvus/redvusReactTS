export interface GalleryItem {
    id: number;
    title: string;
    description: string;
    type: string;
    imageUrl: string;
    date: string;
    tags: string[];
}

export type FilterType = 'all' | 'web' | 'mobile' | 'design' | 'branding' | 'illustration';