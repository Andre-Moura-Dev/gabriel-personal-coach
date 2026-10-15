import type { CardProps } from '../../types/Card';
import type { FooterItem, FooterProps } from '../../types/Footer';
import './footer.scss';


export const FOOTER_ITEMS: FooterItem[] = [
    { label: 'Consultoria online', href: '/#consultoria' },
    { label: 'Avaliação presencial', href: '/#avaliacao' },
    { label: 'Instagram', href: 'https://www.instagram.com/coach_gaabriieel_/', external: true },
];

export default function Footer({ items }: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="site-footer__inner container">
                <div className="site-footer__brand">
                    <a className="site-footer__logo" href="/" aria-label="Coach Gabriel - página inicial">
                        <img src="/images/logo-coach-gabriel.jpg" alt="" />
                        <span className="site-footer__logo-name">COACH GABRIEL</span>
                    </a>
                    <p className="site-footer__tagline">
                        Treinos com propósito, acompanhamento de perto e evolução
                        construída passo a passo.
                    </p>
                </div>

                <nav aria-label="Links do rodapé">
                    <ul className="site-footer__links">
                        {FOOTER_ITEMS.map(({ label, href, external }) => (
                            <li key={label}>
                                <a
                                    className="site-footer__link"
                                    href={href}
                                    {...(external && {
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                    })}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="site-footer__bottom">
                <div className="container">
                    <p>© {year} Coach Gabriel. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}