export interface AdminUser {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'editor';
    lastLogin: string;
}

export interface AdminStats {
    totalWorks: number;
    worksByType: Record<string, number>;
    worksAddedThisMonth: number;
    totalViews: number;
}

export interface AdminLog {
    id: string;
    action: string;
    userId: string;
    userName: string;
    timestamp: string;
    details?: string;
}

export interface AdminSettings {
    galleryTitle: string;
    galleryDescription: string;
    enableDarkMode: boolean;
    enableAnimations: boolean;
    maxFileSize: number;
    allowedTypes: string[];
}