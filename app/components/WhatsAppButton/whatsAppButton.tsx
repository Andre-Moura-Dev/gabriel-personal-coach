import { FaWhatsapp } from "react-icons/fa";
import './whatsAppButton.scss';

const WHATSAPP_NUMBER = '(61)998321-6289';
const WHATSAPP_MESSAGE = 'Olá, Gabriel! Vim pelo site e gostaria de saber mais sobre o treinamento.';

export default function WhatsAppButton() {
    if (!WHATSAPP_NUMBER) return null;

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <a
            className="whatsapp-button"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp aria-hidden="true" />
            <span className="whatsapp-button__label">Fale no WhatsApp</span>
        </a>
    );
}