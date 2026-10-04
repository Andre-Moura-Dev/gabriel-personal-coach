import type { CSSProperties, ReactNode } from "react";
import { LuActivity, LuDumbbell, LuTarget } from "react-icons/lu";
import './card.scss';

type CardItem = {
    id: string;
    number: string;
    icon: ReactNode;
    title: string;
    description: string;
    image?: string;
}

const CARDS: CardItem[] = [
    {
        id: 'consultoria',
        number: '01',
        icon: <LuTarget />,
        title: 'Treinar com direção',
        description: 'Tenha um plano alinhado ao seu objetivo, nível de experiência e rotina real.',
    },
    {
        id: 'avaliacao',
        number: '02',
        icon: <LuDumbbell />,
        title: 'Construa força',
        description: 'Construa uma base forte com estrutura, progressão e propósito em cada sessão.'
    },
    {
        id: 'performance',
        number: '03',
        icon: <LuActivity />,
        title: 'Ampliar capacidade física',
        description: 'Aumento gradual de força e carga para garantir resultados e evolução contínua.'
    }
];

export default function Card() {
    return (
        <section className="container py-4">
            <div className="row g-3">
                {CARDS.map(({ id, number, icon, title, description, image }) => (
                    <div key={number} className="col-12 col-lg-4">
                        <article
                            id={id}
                            className={`feature-card ${image ? 'feature-card--with-image' : ''}`}
                            style={image ? ({ '--card-image': `url(${image})` } as CSSProperties) : undefined}
                        >
                            <header className="feature-card__top">
                                <span className="feature-card__number">{number}</span>
                                <span className="feature-card__icon" aria-hidden="true">
                                    {icon}
                                </span>
                            </header>

                            <div className="feature-card__body">
                                <h3 className="feature-card__title">{title}</h3>
                                <p className="feature-card__description">{description}</p>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}