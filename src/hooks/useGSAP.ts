import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGSAP = (callback: (context: { scope: HTMLElement }) => void, dependencies: any[] = []) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const context = gsap.context(() => {
            callback({ scope: containerRef.current! });
        }, containerRef);

        return () => context.revert();
    }, dependencies);

    return containerRef;
};