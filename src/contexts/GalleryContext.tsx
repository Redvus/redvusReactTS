import React, { createContext, /*useContext,*/ useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import type { GalleryItem, FilterType } from '../types/gallery.types';

interface GalleryContextType {
    works: GalleryItem[];
    filteredWorks: GalleryItem[];
    loading: boolean;
    addWork: (work: Omit<GalleryItem, 'id'>) => Promise<void>;
    updateWork: (id: number, updates: Partial<GalleryItem>) => Promise<void>;
    deleteWork: (id: number) => Promise<void>;
    filterWorks: (type: FilterType) => void;
    searchWorks: (query: string) => void;
    publishWork: (id: number) => Promise<void>;
    unpublishWork: (id: number) => Promise<void>;
    getWorkStats: () => WorkStats;
}

interface WorkStats {
    total: number;
    published: number;
    draft: number;
    byType: Record<string, number>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

// export const useGallery = () => {
//     const context = useContext(GalleryContext);
//     if (!context) {
//         throw new Error('useGallery must be used within GalleryProvider');
//     }
//     return context;
// };

interface GalleryProviderProps {
    children: ReactNode;
}

export const GalleryProvider: React.FC<GalleryProviderProps> = ({ children }) => {
    const [works, setWorks] = useState<GalleryItem[]>([]);
    const [filteredWorks, setFilteredWorks] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Загрузка данных из localStorage при инициализации
    useEffect(() => {
        const loadWorks = async () => {
            setLoading(true);

            try {
                // Проверяем localStorage
                const savedWorks = localStorage.getItem('gallery_works');

                if (savedWorks) {
                    const parsedWorks = JSON.parse(savedWorks);
                    setWorks(parsedWorks);
                    setFilteredWorks(parsedWorks);
                } else {
                    // Если нет данных, загружаем демо-данные
                    const demoData = await import('../data/gallery.data').then(m => m.galleryItems);
                    setWorks(demoData);
                    setFilteredWorks(demoData);
                    localStorage.setItem('gallery_works', JSON.stringify(demoData));
                }
            } catch (error) {
                console.error('Ошибка загрузки работ:', error);
            } finally {
                setLoading(false);
            }
        };

        loadWorks();
    }, []);

    // Автосохранение при изменении works
    useEffect(() => {
        if (works.length > 0 && !loading) {
            localStorage.setItem('gallery_works', JSON.stringify(works));

            // Синхронизация с другими вкладками
            window.dispatchEvent(new CustomEvent('galleryUpdated', { detail: works }));
        }
    }, [works, loading]);

    // Прослушивание обновлений из других вкладок
    useEffect(() => {
        const handleStorageUpdate = (event: CustomEvent) => {
            if (event.type === 'galleryUpdated') {
                setWorks(event.detail);
                applyFiltersAndSearch(event.detail, activeFilter, searchQuery);
            }
        };

        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'gallery_works' && event.newValue) {
                try {
                    const updatedWorks = JSON.parse(event.newValue);
                    setWorks(updatedWorks);
                    applyFiltersAndSearch(updatedWorks, activeFilter, searchQuery);
                } catch (error) {
                    console.error('Ошибка синхронизации данных:', error);
                }
            }
        };

        window.addEventListener('galleryUpdated', handleStorageUpdate as EventListener);
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('galleryUpdated', handleStorageUpdate as EventListener);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [activeFilter, searchQuery]);

    // Применение фильтров и поиска
    const applyFiltersAndSearch = (worksToFilter: GalleryItem[], filter: FilterType, query: string) => {
        let filtered = [...worksToFilter];

        // Фильтрация по типу
        if (filter !== 'all') {
            filtered = filtered.filter(work => work.type === filter);
        }

        // Поиск по названию и описанию
        if (query.trim()) {
            const lowercaseQuery = query.toLowerCase();
            filtered = filtered.filter(work =>
                work.title.toLowerCase().includes(lowercaseQuery) ||
                work.description.toLowerCase().includes(lowercaseQuery) ||
                work.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
            );
        }

        setFilteredWorks(filtered);
    };

    // Добавление работы
    const addWork = async (workData: Omit<GalleryItem, 'id'>) => {
        setLoading(true);

        try {
            const newWork: GalleryItem = {
                ...workData,
                id: Date.now(),
                published: true,
                views: 0,
                likes: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            const updatedWorks = [...works, newWork];
            setWorks(updatedWorks);
            applyFiltersAndSearch(updatedWorks, activeFilter, searchQuery);

            // Анимация добавления
            gsap.fromTo(`.work-${newWork.id}`,
                { opacity: 0, scale: 0.8, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' }
            );

            return Promise.resolve();
        } catch (error) {
            console.error('Ошибка добавления работы:', error);
            return Promise.reject(error);
        } finally {
            setLoading(false);
        }
    };

    // Обновление работы
    const updateWork = async (id: number, updates: Partial<GalleryItem>) => {
        setLoading(true);

        try {
            const updatedWorks = works.map(work =>
                work.id === id
                    ? {
                        ...work,
                        ...updates,
                        updatedAt: new Date().toISOString()
                    }
                    : work
            );

            setWorks(updatedWorks);
            applyFiltersAndSearch(updatedWorks, activeFilter, searchQuery);

            // Анимация обновления
            const workElement = document.querySelector(`.work-${id}`);
            if (workElement) {
                gsap.to(workElement, {
                    scale: 1.05,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            }

            return Promise.resolve();
        } catch (error) {
            console.error('Ошибка обновления работы:', error);
            return Promise.reject(error);
        } finally {
            setLoading(false);
        }
    };

    // Удаление работы
    const deleteWork = async (id: number) => {
        setLoading(true);

        try {
            // Анимация удаления
            const workElement = document.querySelector(`.work-${id}`);
            if (workElement) {
                await gsap.to(workElement, {
                    opacity: 0,
                    scale: 0.8,
                    y: -20,
                    duration: 0.4,
                    ease: 'power2.in'
                }).then();
            }

            const updatedWorks = works.filter(work => work.id !== id);
            setWorks(updatedWorks);
            applyFiltersAndSearch(updatedWorks, activeFilter, searchQuery);

            return Promise.resolve();
        } catch (error) {
            console.error('Ошибка удаления работы:', error);
            return Promise.reject(error);
        } finally {
            setLoading(false);
        }
    };

    // Фильтрация работ
    const filterWorks = (type: FilterType) => {
        setActiveFilter(type);
        applyFiltersAndSearch(works, type, searchQuery);
    };

    // Поиск работ
    const searchWorks = (query: string) => {
        setSearchQuery(query);
        applyFiltersAndSearch(works, activeFilter, query);
    };

    // Публикация работы
    const publishWork = async (id: number) => {
        return updateWork(id, { published: true });
    };

    // Снятие с публикации
    const unpublishWork = async (id: number) => {
        return updateWork(id, { published: false });
    };

    // Статистика
    const getWorkStats = (): WorkStats => {
        const publishedWorks = works.filter(work => work.published !== false);
        const draftWorks = works.filter(work => work.published === false);

        const byType = works.reduce((acc, work) => {
            acc[work.type] = (acc[work.type] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        return {
            total: works.length,
            published: publishedWorks.length,
            draft: draftWorks.length,
            byType
        };
    };

    const value: GalleryContextType = {
        works,
        filteredWorks,
        loading,
        addWork,
        updateWork,
        deleteWork,
        filterWorks,
        searchWorks,
        publishWork,
        unpublishWork,
        getWorkStats
    };

    return (
        <GalleryContext.Provider value={value}>
            {children}
        </GalleryContext.Provider>
    );
};