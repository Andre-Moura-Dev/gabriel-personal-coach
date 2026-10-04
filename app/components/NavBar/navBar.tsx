import { useEffect, useState, useRef, type CSSProperties } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import ThemeToggle from '../ThemeToggle/themeToggle';
import './navbar.scss';

type NavBarItem = {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    external?: boolean;
    image?: string;
    imageFit?: 'cover' | 'contain';
    featured?: boolean;
};

const NAV_ITEMS: NavBarItem[] = [
    {
        eyebrow: 'Quero conhecer mais',
        title: 'Consultoria online',
        description: 'Treino, dieta, aplicativo, suporte e retorno.',
        href: '#consultoria',
    },
    {
        eyebrow: 'Entenda seu ponto de partida',
        title: 'Avaliação física',
        description: 'Avaliação presencial com retorno para acompanhar sua evolução.',
        href: '#avaliacao',
    },
    {
        eyebrow: 'Compre online',
        title: 'Loja de Suplementos',
        description: 'Apex Suplementos',
        href: 'https://LINK_DA_LOJA',
        external: true,
        featured: true,
    },
    {
        eyebrow: 'Nos acompanhe',
        title: 'Instagram',
        description: 'Siga o perfil nas redes sociais.',
        href: 'https://instagram.com/SEU_PERFIL',
        external: true,
    },
];

function cardClassName(item: NavBarItem) {
    return [
        'nav-card',
        item.image && 'nav-card--with-image',
        item.imageFit === 'contain' && 'nav-card--contain',
        item.featured && 'nav-card--featured',
    ]
        .filter(Boolean)
        .join(' ');
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        closeButtonRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open]);

    // trava a rolagem da página enquanto o menu está aberto
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // libera a rolagem na hora, antes de o navegador rolar até a âncora clicada
    function closeMenu() {
        document.body.style.overflow = '';
        setOpen(false);
    }

    function closeMenuAndFocusButton() {
        closeMenu();
        menuButtonRef.current?.focus();
    }

    return (
        <>
            <header className='site-header'>
                <div className='site-header__bar container'>
                    <a
                        className='site-header__brand'
                        href='/'
                        onClick={(event) => {
                            if (
                                event.button !== 0 ||
                                event.metaKey ||
                                event.ctrlKey ||
                                event.shiftKey ||
                                event.altKey
                            ) {
                                return;
                            }

                            event.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        GN <span>Performance</span>
                    </a>

                    <div className='site-header__actions'>
                        <ThemeToggle />
                        <button
                            ref={menuButtonRef}
                            type='button'
                            className='icon-button site-header__menu-button'
                            onClick={() => setOpen(true)}
                            aria-expanded={open}
                            aria-controls='menu-principal'
                        >
                            <LuMenu aria-hidden='true' />
                            <span className='site-header__menu-label'>Menu</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Fundo escurecido: clicar fora fecha o menu */}
            <div
                className={`menu-backdrop ${open ? 'menu-backdrop--open' : ''}`}
                onClick={closeMenu}
                aria-hidden='true'
            />

            {/* A sidebar fica fora do <header> de propósito: o blur do header
                prenderia um elemento fixed dentro dele */}
            <nav
                id='menu-principal'
                className={`menu-drawer ${open ? 'menu-drawer--open' : ''}`}
                aria-label='Navegação principal'
            >
                <div className='menu-drawer__top'>
                    <span className='eyebrow'>Menu</span>
                    <button
                        ref={closeButtonRef}
                        type='button'
                        className='icon-button'
                        onClick={closeMenuAndFocusButton}
                        aria-label='Fechar menu'
                    >
                        <LuX aria-hidden='true' />
                    </button>
                </div>

                <ul className='menu-drawer__list'>
                    {NAV_ITEMS.map((item, index) => (
                        <li key={item.title} style={{ '--i': index } as CSSProperties}>
                            <a
                                className={cardClassName(item)}
                                href={item.href}
                                onClick={closeMenu}
                                style={
                                    item.image
                                        ? ({ '--card-image': `url(${item.image})` } as CSSProperties)
                                        : undefined
                                }
                                {...(item.external && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                })}
                            >
                                <span className='nav-card__eyebrow'>{item.eyebrow}</span>
                                <strong className='nav-card__title'>{item.title}</strong>
                                <span className='nav-card__description'>{item.description}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}