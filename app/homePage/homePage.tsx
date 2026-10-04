import type { CSSProperties } from "react";
import Navbar from "../components/NavBar/navBar";
import Card from "../components/Card/card";
import BackToTop from "../components/BackToTop/backToTop";
import WhatsAppButton from "../components/WhatsAppButton/whatsAppButton";
import Footer from "../components/Footer/footer";
import './homePage.scss';

const HERO_IMAGE = '';
const CREF_NUMBER = '';

const CREDENTIALS = [
    `${CREF_NUMBER ? `CREF ${CREF_NUMBER}` : ''}/DF`,
    'Atendimento online',
    'Coach de Performance',
].join(' • ');

export default function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <section
                    className={`hero ${HERO_IMAGE ? 'hero--width-image' : ''}`}
                    style={
                        HERO_IMAGE
                            ? ({ '--hero-image': `url(${HERO_IMAGE})` } as CSSProperties)
                            : undefined
                    }
                >
                    <div className="hero__content container">
                        <span className="eyebrow">Treinamento • Força</span>
                        <h1 className="hero__name text-gradient">Gabriel Negreiros</h1>
                        <p className="hero__description">
                            Treinamento personalizado para quem quer desenvolver força,
                            capacidades físicas e uma performance que se sustenta dentro
                            e fora da academia.
                        </p>
                        <p className="hero__credentials">{CREDENTIALS}</p>
                    </div>
                </section>

                <section className="intro container">
                    <span className="eyebrow">Performance com direção</span>
                    <h2 className="intro__title text-gradient">
                        Não é só sobre transformar o corpo. É sobre descobrir do que você
                        é capaz.
                    </h2>
                    <p className="intro__text">
                        Cada treino aproxima você da força, da confiança e da versão que
                        deseja construir. Um processo pensado para a sua realidade,
                        respeitando o seu ritmo e valorizando cada conquista.
                    </p>
                </section>

                <Card />
            </main>

            <Footer />

            <BackToTop />
            <WhatsAppButton />
        </>
    );
}