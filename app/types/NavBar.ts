export type NavBarItem = {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    external?: boolean;
    image?: string;
    imageFit?: 'cover' | 'contain';
    featured?: boolean;
}

export type NavBarProps = {
    items: NavBarItem[];
}