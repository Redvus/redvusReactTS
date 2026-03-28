export interface RouteItem {
    path: string;
    name: string;
    component: React.ComponentType;
}

export interface NavigationProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    onAboutClick?: () => void;
}

export interface PageTransitionProps {
    children: React.ReactNode;
}