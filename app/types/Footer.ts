export type FooterItem = {
    label: string;
    href: string;
    external?: boolean;
}

export type FooterProps = {
    items: FooterItem[];
}