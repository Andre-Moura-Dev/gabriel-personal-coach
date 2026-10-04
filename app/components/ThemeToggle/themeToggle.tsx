import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import './themeToggle.scss';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

export default function ThemeToggle() {
    const [ theme, setTheme ] = useState<Theme>('dark');

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    }, []);

    function toggleTheme() {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.dataset.theme = next;
        localStorage.setItem(STORAGE_KEY, next);
    }

    return (
        <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Mudar para o tema claro': 'Mudar para o tema escuro'}
        >
            {theme === 'dark' ? <LuSun /> : <LuMoon />}
        </button>
    );
}