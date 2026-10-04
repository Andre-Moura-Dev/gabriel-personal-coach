import './footer.scss';

type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
};

// Mantenha estes links iguais aos do NavBar
const FOOTER_LINKS: FooterLink[] = [
    { label: 'Consultoria online', href: '#consultoria' },
    { label: 'Avaliação física', href: '#avaliacao' },
    { label: 'Loja de Suplementos', href: 'https://LINK_DA_LOJA', external: true },
    { label: 'Instagram', href: 'https://instagram.com/SEU_PERFIL', external: true },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="site-footer__inner container">
                <div className="site-footer__brand">
                    <a className="site-footer__logo" href="/" aria-label="GN Performance - página inicial">
                        GN <span>Performance</span>
                    </a>
                    <p className="site-footer__tagline">
                        Treinos com propósito, acompanhamento de perto e evolução
                        construída passo a passo.
                    </p>
                </div>

                <nav aria-label="Links do rodapé">
                    <ul className="site-footer__links">
                        {FOOTER_LINKS.map(({ label, href, external }) => (
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
                    <p>© {year} Gabriel Negreiros. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}