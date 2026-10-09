import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_HREF } from './whatsAppLink';
import './whatsAppButton.scss';

export default function WhatsAppButton() {
    return (
        <a
            className="whatsapp-button"
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp aria-hidden="true" />
            <span className="whatsapp-button__label">Fale no WhatsApp</span>
        </a>
    );
}