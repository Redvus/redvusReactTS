export interface GalleryItem {
    id: string;
    [key: string]: any;
}

export interface ModalState {
    isOpen: boolean;
    item: GalleryItem | null;
}

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: GalleryItem | null;
    size?: ModalSize;
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
}