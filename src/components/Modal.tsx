import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import type { GalleryItem } from '../types/gallery.types';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: GalleryItem | null;
}

// Тип медиа-элемента
interface MediaItem {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    const animationFrameRef = useRef<number | null>(null);
    const isMountedRef = useRef<boolean>(true);

    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [showThumbnails, /*setShowThumbnails*/] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoProgress, setVideoProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Конвертируем изображения и видео в единый формат медиа
    const mediaItems = useMemo<MediaItem[]>(() => {
        if (!item) return [];

        const items: MediaItem[] = [];

        // // Добавляем видео, если есть как главное
        if (item.videos && item.videos.length > 0) {
            item.videos.forEach((video, index) => {
                items.push({
                    type: 'video',
                    url: video.url,
                    thumbnail: video.thumbnail || item.imageUrl,
                    title: video.title || `${item.title} - видео ${index + 1}`
                });
            });
        }

        // // Добавляем дополнительные изображения
        // if (item.images && item.images.length > 0) {
        //     item.images.forEach((img, index) => {
        //         // Проверяем, не добавили ли мы уже это изображение как главное
        //         if (img !== item.imageUrl) {
        //             items.push({
        //                 type: 'image',
        //                 url: img,
        //                 thumbnail: img,
        //                 title: `${item.title} - изображение ${index + 1}`
        //             });
        //         }
        //     });
        // }

        // Добавляем видео, если есть
        // if (item.videos && item.videos.length > 0) {
        //     item.videos.forEach((video, index) => {
        //         items.push({
        //             type: 'video',
        //             url: video.url,
        //             thumbnail: video.thumbnail || item.imageUrl,
        //             title: video.title || `${item.title} - видео ${index + 1}`
        //         });
        //     });
        // }

        // Добавляем ТОЛЬКО дополнительные изображения (исключаем imageUrl)
        if (item.images && item.images.length > 0) {
            // Создаем массив ТОЛЬКО из дополнительных изображений
            const additionalImages = item.images.filter(img => img !== item.imageUrl);

            additionalImages.forEach((img, index) => {
                items.push({
                    type: 'image',
                    url: img,
                    thumbnail: img,
                    title: `${item.title} - изображение ${index + 1}`
                });
            });
        }



        return items;
    }, [item]);

    const hasMultipleMedia = mediaItems.length > 1;

    // Сброс индекса и остановка видео при открытии нового проекта
    useEffect(() => {
        if (!isOpen || !item?.id) return;

        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            if (isMountedRef.current) {
                setCurrentMediaIndex(0);
                setIsPlaying(false);
                setVideoProgress(0);
            }
            animationFrameRef.current = null;
        });
    }, [isOpen, item?.id]);

    // Остановка видео при смене медиа
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [currentMediaIndex]);

    // Обновление прогресса видео
    useEffect(() => {
        let interval: ReturnType<typeof setTimeout>;

        if (isPlaying && videoRef.current) {
            interval = setInterval(() => {
                if (videoRef.current) {
                    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                    setVideoProgress(progress);
                    setCurrentTime(videoRef.current.currentTime);
                    setDuration(videoRef.current.duration);
                }
            }, 100);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isPlaying]);

    // Анимация смены медиа
    const animateMediaChange = useCallback((newIndex: number) => {
        if (isAnimating || !mediaRef.current || !mediaItems[newIndex]) return;

        setIsAnimating(true);

        // Определяем направление анимации
        const direction = newIndex > currentMediaIndex ? 'next' : 'prev';

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentMediaIndex(newIndex);
                setIsAnimating(false);
            }
        });

        // Анимация текущего медиа
        tl.to(mediaRef.current, {
            x: direction === 'next' ? -30 : 30,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                // Обновляем src после того, как медиа исчезло
                if (mediaRef.current) {
                    if (mediaItems[newIndex].type === 'image') {
                        (mediaRef.current as HTMLImageElement).src = mediaItems[newIndex].url;
                    }
                }
            }
        })
            .set(mediaRef.current, {
                x: direction === 'next' ? 30 : -30,
            })
            .to(mediaRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
    }, [isAnimating, currentMediaIndex, mediaItems]);

    // Навигационные функции
    const handleNextMedia = useCallback(() => {
        if (!hasMultipleMedia || isAnimating) return;

        const nextIndex = (currentMediaIndex + 1) % mediaItems.length;
        animateMediaChange(nextIndex);
    }, [currentMediaIndex, mediaItems.length, hasMultipleMedia, isAnimating, animateMediaChange]);

    const handlePreviousMedia = useCallback(() => {
        if (!hasMultipleMedia || isAnimating) return;

        const prevIndex = (currentMediaIndex - 1 + mediaItems.length) % mediaItems.length;
        animateMediaChange(prevIndex);
    }, [currentMediaIndex, mediaItems.length, hasMultipleMedia, isAnimating, animateMediaChange]);

    const handleThumbnailClick = useCallback((index: number) => {
        if (index === currentMediaIndex || isAnimating) return;

        animateMediaChange(index);
    }, [currentMediaIndex, isAnimating, animateMediaChange]);

    // Управление видео
    const handlePlayPause = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    const handleVideoEnded = useCallback(() => {
        setIsPlaying(false);
        setVideoProgress(0);
    }, []);

    const handleVideoTimeUpdate = useCallback(() => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setVideoProgress(progress);
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration);
        }
    }, []);

    const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            const time = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
            videoRef.current.currentTime = time;
            setVideoProgress(parseFloat(e.target.value));
        }
    }, []);

    // Обработчик клавиш
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'Escape':
                // handleClose();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (hasMultipleMedia) {
                    handlePreviousMedia();
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (hasMultipleMedia) {
                    handleNextMedia();
                }
                break;
            case ' ':
                e.preventDefault();
                if (mediaItems[currentMediaIndex]?.type === 'video') {
                    handlePlayPause();
                }
                break;
        }
    }, [isOpen, hasMultipleMedia, handlePreviousMedia, handleNextMedia, handlePlayPause, mediaItems, currentMediaIndex]);

    // Закрытие модального окна
    const handleClose = useCallback(() => {
        if (!modalRef.current || !overlayRef.current || !contentRef.current) return;

        // Останавливаем видео при закрытии
        if (videoRef.current) {
            videoRef.current.pause();
        }

        const tl = gsap.timeline({
            onComplete: () => {
                if (isMountedRef.current) {
                    onClose();
                }
            }
        });

        tl.to(contentRef.current, {
            y: 50,
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: 'power2.in'
        })
            .to(overlayRef.current, {
                opacity: 0,
                duration: 0.2,
                ease: 'power2.out'
            }, '-=0.2')
            .set(modalRef.current, { display: 'none' });
    }, [onClose]);

    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }, [handleClose]);

    // Touch события
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }, []);

    const handleTouchEnd = useCallback(() => {
        if (!touchStart || !touchEnd || !hasMultipleMedia || isAnimating) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNextMedia();
        } else if (isRightSwipe) {
            handlePreviousMedia();
        }

        setTouchStart(null);
        setTouchEnd(null);
    }, [touchStart, touchEnd, hasMultipleMedia, isAnimating, handleNextMedia, handlePreviousMedia]);

    // Анимация открытия/закрытия
    useEffect(() => {
        if (!modalRef.current || !overlayRef.current || !contentRef.current) return;

        if (isOpen) {
            // document.body.style.overflow = 'hidden';
            gsap.set(modalRef.current, { display: 'flex' });

            const tl = gsap.timeline();

            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
                .fromTo(contentRef.current,
                    { y: 50, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: 'back.out(1.2)'
                    },
                    '-=0.2'
                );

            if (thumbnailsRef.current && hasMultipleMedia) {
                gsap.fromTo(thumbnailsRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, delay: 0.3 }
                );
            }
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, hasMultipleMedia]);

    // Устанавливаем флаг монтирования
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    if (!item || mediaItems.length === 0) return null;

    const currentMedia = mediaItems[currentMediaIndex];
    const isVideo = currentMedia?.type === 'video';

    const getTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            'web': 'сайты',
            'mobile': 'мобильные',
            'games': 'игры',
            'branding': 'брэндинг',
            'video': 'видео',
            'art': 'арт'
        };
        return labels[type] || type;
    };

    const getTypeColor = (type: string) => {
        const colors: Record<string, string> = {
            'web': '#3b82f6',
            'mobile': '#cd6904',
            'games': '#8059dc',
            'branding': '#da408d',
            'video': '#10b981',
            'art': '#c83535'
        };
        return colors[type] || '#6b7280';
    };

    return (
        <div
            ref={modalRef}
            className="modal"
            style={{ display: 'none' }}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
        >
            <div
                ref={overlayRef}
                className="modal__overlay"
                onClick={handleOverlayClick}
                aria-hidden="true"
            />
            {/* Кнопка закрытия */}
            <button
                className="modal__close"
                onClick={handleClose}
                aria-label="Закрыть модальное окно"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div
                ref={contentRef}
                className="modal__content"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Секция медиа */}
                <div className="modal__media">
                    {/* Основное медиа */}
                    <div className="modal__media_container">
                        {isVideo ? (
                            <>
                                <video
                                    ref={(el) => {
                                        videoRef.current = el;
                                        mediaRef.current = el as HTMLVideoElement;
                                    }}
                                    src={currentMedia.url}
                                    className="modal__media_video"
                                    poster={currentMedia.thumbnail}
                                    onClick={handlePlayPause}
                                    onEnded={handleVideoEnded}
                                    onTimeUpdate={handleVideoTimeUpdate}
                                />

                                {/* <div className="modal__video_play">
                                    <i className="fas fa-play"></i>
                                </div> */}

                                {/* Элементы управления видео */}
                                <div className="video-controls">
                                    <button
                                        className="video-play-button"
                                        onClick={handlePlayPause}
                                    >
                                        {isPlaying ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M10 9v6m4-6v6" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                    </button>

                                    <div className="video-progress">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={videoProgress}
                                            onChange={handleSeek}
                                            className="video-progress-bar"
                                        />
                                    </div>

                                    <div className="video-time">
                                        <>
                                            <span>{formatTime(currentTime)}</span>
                                            <span> / </span>
                                            <span>{formatTime(duration)}</span>
                                        </>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <picture>
                                <img
                                    ref={mediaRef as React.RefObject<HTMLImageElement>}
                                    src={currentMedia.url}
                                    alt={currentMedia.title || item.title}
                                    className="modal__media_image"
                                />
                            </picture>
                        )}

                        {/* Навигация по медиа */}
                        {hasMultipleMedia && (
                            <>
                                {currentMediaIndex > 0 && (
                                    <button
                                        className="modal__media_nav modal__media_nav--prev"
                                        onClick={handlePreviousMedia}
                                        aria-label="Предыдущее"
                                        disabled={isAnimating}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                    </button>
                                )}

                                {currentMediaIndex < mediaItems.length - 1 && (
                                    <button
                                        className="modal__media_nav modal__media_nav--next"
                                        onClick={handleNextMedia}
                                        aria-label="Следующее"
                                        disabled={isAnimating}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </button>
                                )}

                                {/* Индикатор типа медиа и позиции */}
                                {/* <div className="modal__media_indicator">
                                    <span className="media-type-badge">
                                        {isVideo ? (
                                            <div className="thumbnail-video-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        ) : '🖼️'}
                                    </span>
                                    <span className="modal__media_counter">
                                        {currentMediaIndex + 1} / {mediaItems.length}
                                    </span>
                                </div> */}
                            </>
                        )}

                        <ul className="modal__media_tags">
                            {item.tags.map((tag, index) => (
                                <li key={index} className="modal__media_tag">
                                    {tag}
                                </li>
                            ))}
                        </ul>

                        <span
                            className="modal__media_type"
                            style={{ backgroundColor: getTypeColor(item.type) }}
                        >
                            {getTypeLabel(item.type)}</span>
                    </div>

                    {/* Миниатюры */}
                    {hasMultipleMedia && (
                        // <div ref={thumbnailsRef} className="modal__media_thumbnails">
                        <div className="modal__media_thumbnails">
                            {/* <div className="thumbnails-header">
                                <h4>Все медиафайлы проекта</h4>
                                <button
                                    className="toggle-thumbnails"
                                    onClick={() => setShowThumbnails(prev => !prev)}
                                >
                                    {showThumbnails ? 'Скрыть' : 'Показать'}
                                </button>
                            </div> */}

                            {showThumbnails && (
                                <div className="modal__media_thumbnails_grid">
                                    {mediaItems.map((media, index) => (
                                        <button
                                            key={index}
                                            className={`modal__media_thumbnails_item ${index === currentMediaIndex ? 'active' : ''} ${media.type === 'video' ? 'video-thumbnail' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                            disabled={isAnimating}
                                        >
                                            <img
                                                src={media.thumbnail || media.url}
                                                alt={media.title || `Медиа ${index + 1}`}
                                            />
                                            {media.type === 'video' && (
                                                <div className="thumbnail-video-icon">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            )}
                                            <div className="modal__media_thumbnails_overlay">
                                                <span>{index + 1}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* <span
                    className="modal__content_type"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                >
                    {getTypeLabel(item.type)}</span> */}
                {/* <span className="modal__content_date">{item.date}</span> */}

                {/* Информация о проекте */}
                <div className="modal__bottom">
                    <div className="modal__bottom_header">
                        {/* <div className="modal__bottom_meta">

                        </div> */}
                        <h3 className="modal__bottom_title">{item.title}</h3>
                        <p className="modal__bottom_description">{item.description}</p>
                    </div>

                    {/* <ul className="modal__bottom_tags">
                        {item.tags.map((tag, index) => (
                            <li key={index} className="modal__bottom_tag">
                                {tag}
                            </li>
                        ))}
                    </ul> */}

                    {/* <div className="modal-details">
                        <h3 className="modal-subtitle">Детали проекта:</h3>
                        <div className="modal-details__content">
                            <div className="modal-details__item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Срок: 2-3 месяца</span>
                            </div>
                            <div className="modal-details__item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span>Тип: {getTypeLabel(item.type)}</span>
                            </div>
                            {mediaItems.length > 1 && (
                                <div className="modal-details__item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Медиафайлов: {mediaItems.length}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button className="modal-action__button modal-action__button--primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Посмотреть проект</span>
                        </button>
                        <button className="modal-action__button">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span>Скачать кейс</span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

// Вспомогательная функция для форматирования времени видео
const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default Modal;