import { useEffect, useState } from "react";
import { LuAArrowUp } from "react-icons/lu";
import './backToTop.scss';

const SHOW_AFTER = 400;

export default function BackToTop() {
    const [ visible, setVisible ] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function scrollToTop() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }

    return (
        <button
            type="button"
            className={`back-to-top ${visible ? 'back-to-top--visible': ''}`}
            onClick={scrollToTop}
            aria-label="Voltar ao início"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
        >
            <LuAArrowUp />
        </button>
    );
}