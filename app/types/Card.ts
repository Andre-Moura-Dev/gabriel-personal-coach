import type { ReactNode } from "react";

export type CardItem = {
    number: string;
    icon: ReactNode;
    title: string;
    description: string;
    image?: string;
}

export type CardProps = {
    items: CardItem[];
}