import { HomeIcon, DumbbellIcon, UserIcon, BookOpenText } from 'lucide-react';

export type NavLink = {
    href: string;
    label: string;
    icon: React.ElementType;
};

export const NAV_LINKS: NavLink[] = [
    {
        href: '/',
        label: 'Home',
        icon: HomeIcon,
    },
    {
        href: '/generate-program',
        label: 'Generate',
        icon: DumbbellIcon,
    },
    {
        href: '/profile',
        label: 'Profile',
        icon: UserIcon,
    },
    {
        href: '/blog',
        label: 'Blog',
        icon: BookOpenText,
    },
];