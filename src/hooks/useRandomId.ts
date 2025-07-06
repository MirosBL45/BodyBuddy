import { useMemo } from 'react';

export const useRandomId = () => {
    return useMemo(() => {
        const firstPart = Math.floor(10000 + Math.random() * 90000);
        const secondPart = Math.floor(10 + Math.random() * 90);
        return `${firstPart}.${secondPart}`;
    }, []);
};