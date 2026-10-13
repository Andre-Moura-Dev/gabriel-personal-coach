import type { CSSProperties } from "react";
import Navbar from "../components/NavBar/navBar";
import Card from "../components/Card/card";
import BackToTop from "../components/BackToTop/backToTop";
import WhatsAppButton from "../components/WhatsAppButton/whatsAppButton";
import { WHATSAPP_HREF } from "../components/WhatsAppButton/whatsAppLink";
import Footer from "../components/Footer/footer";
import { LuChevronDown } from "react-icons/lu";

import './homePage.scss';

const HERO_IMAGE = '/images/coach-gabriel.png';

const ASSESSMENTS = [
    {
        title: 'Anamnese',
        description: 'A anamnese é uma entrevista inicial feita com o aluno antes de começar os treinos.',
        details: [
            'Saúde e histórico médico: lesões, doenças, cirurgias e remédios.',
            'Experiência com exercícios: o que já praticou, tempo parado e preferências.',
            'Rotina e estilo de vida: sono, trabalho, estresse e hábitos diários.',
            'Objetivos: emagrecer, ganhar massa muscular ou ter mais saúde, considerando o tempo disponível.',
        ],
        note: 'Objetivo: garantir segurança, evitar lesões e criar um treino 100% personalizado.',
    },
    {
        title: 'Avaliação de bioimpedância',
        description: 'Exame rápido e indolor que mede a composição corporal e mostra o que compõe o peso da balança. Uma corrente elétrica fraca diferencia os tecidos pela resistência: água e músculos conduzem com facilidade; gordura oferece resistência.',
        details: [
            'Percentual de gordura e massa muscular.',
            'Gordura visceral (gordura nos órgãos abdominais).',
            'Nível de hidratação e taxa metabólica basal (calorias gastas em repouso).',
        ],
        note: 'Preparo: jejum leve de 2 a 4 horas, sem álcool ou cafeína no dia anterior e sem exercícios intensos antes do teste.',
    },
    {
        title: 'Avaliação de 7 dobras',
        description: 'O protocolo de 7 dobras de Pollock (1984) usa um adipômetro (plicômetro) para estimar o percentual de gordura corporal.',
        details: [
            'Dobras medidas: peitoral, subescapular, tricipital, axilar média, suprailíaca, abdominal e coxa.',
            'Mais precisa: avalia o corpo todo (tronco e membros), superando protocolos mais curtos.',
            'Não sofre alterações pelo consumo de água ou retenção de líquidos, ao contrário da bioimpedância.',
            'Ajuda a identificar em quais regiões o aluno está perdendo ou acumulando gordura.',
        ],
    },
    {
        title: 'Avaliação postural',
        description: 'Análise do alinhamento corporal para identificar desvios na coluna, assimetrias e desequilíbrios musculares.',
        details: [
            'Identifica músculos que precisam ser alongados por estarem tensos.',
            'Aponta músculos que precisam ser fortalecidos por estarem fracos.',
        ],
        note: 'O objetivo é orientar treinos mais seguros e sem dor.',
    },
    {
        title: 'Avaliação de força',
        description: 'Supino, agachamento e puxada medem a capacidade de carga em três padrões básicos: empurrar, agachar e puxar.',
        details: [
            'Teste de 1RM: encontra a carga máxima para uma repetição perfeita; indicado para alunos avançados.',
            'Teste submáximo: usa uma carga para 2 a 10 repetições até a falha técnica e estima a força máxima por fórmulas; mais seguro e ideal para a maioria.',
            'Agachamento: força dos membros inferiores e estabilidade do core.',
            'Supino reto: força de empurrar (peito, ombros e tríceps).',
            'Puxada alta: força de puxar (costas e bíceps).',
        ],
        note: 'Os resultados ajudam a calcular a porcentagem de carga adequada para treinos de hipertrofia ou força, acompanhar a evolução e identificar desequilíbrios musculares que podem favorecer lesões.',
    },
    {
        title: 'Avaliação fotográfica e análise fotogramétrica',
        description: 'Registro fotográfico padronizado do corpo (frente, costas e perfis) para analisar postura, simetria e evolução estética.',
        details: [
            'Fotos em posição relaxada, traje adequado, fundo neutro e câmera na altura do umbigo.',
            'Identifica desvios posturais e assimetrias.',
            'Mostra mudanças na definição e no desenho corporal que a balança não registra.',
            'Ajuda a visualizar e comprovar a evolução ao longo do processo.',
        ],
    },
    {
        title: 'Avaliação de resistência',
        description: 'Com tabulação da frequência cardíaca (FC), acompanha minuto a minuto os batimentos durante a corrida e no descanso.',
        details: [
            'Durante a corrida, o frequencímetro registra a FC ao final de cada minuto.',
            'Após o esforço, mede-se a recuperação do coração nos 3 minutos seguintes.',
            'Mostra a resposta do coração ao esforço e a velocidade de recuperação.',
            'Permite criar zonas de frequência cardíaca para treinos aeróbicos individualizados.',
        ],
    },
];

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
                        <span className="eyebrow">Treinamento personalizado</span>
                        <h1 className="hero__name text-gradient">COACH GABRIEL</h1>
                        <p className="hero__description">
                            Treinamento personalizado para quem quer resultados concretos -
                            seja emagrecimento, ganho de massa muscular ou melhora na qualidade
                            de vida. Faço uma avaliação completa para entender seu momento e
                            monto uma rotina de treinos que se adapte ao seu dia a dia,
                            garantindo resultados com segurança.
                        </p>
                        <a
                            className="hero__cta"
                            href={WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Quer agendar sua aula? Clique aqui
                        </a>
                    </div>
                </section>

                <section className="intro container">
                    <span className="eyebrow">Acompanhamento individualizado</span>
                    <h2 className="intro__title text-gradient">
                        Seu treino começa entendendo quem você é e onde quer chegar.
                    </h2>
                    <p className="intro__text">
                        Com uma avaliação completa, cada etapa do treinamento respeita sua
                        saúde, seus objetivos e a sua rotina.
                    </p>
                </section>

                <Card />

                <section id="avaliacao" className="assessment container">
                    <header className="assessment__header">
                        <span className="eyebrow">Entenda seu ponto de partida</span>
                        <h2 className="assessment__title text-gradient">Avaliação presencial</h2>
                        <p className="assessment__intro">
                            Uma avaliação completa, com retorno para acompanhar sua evolução.
                        </p>
                    </header>

                    <div className="assessment__grid">
                        {ASSESSMENTS.map(({ title, description, details, note }) => (
                            <details 
                                className="assessment-card"
                                key={title}
                                name="assessment"
                            >

                                <summary className="assessment-card__summary">
                                    <h3 className="assessment-card__title">{title}</h3>
                                    <LuChevronDown className="assessment-card__chevron" aria-hidden="true" />
                                </summary>

                                <div className="assessment-card__content">
                                    <p className="assessment-card__description">{description}</p>
                                    <ul className="assessment-card__details">
                                        {details.map((detail) => <li key={detail}>{detail}</li> )}
                                    </ul>
                                    {note && <p className="assessment-card__note">{note}</p>}
                                </div>

                            </details>
                        ))}
                    </div>

                </section>
            </main>

            <Footer />

            <BackToTop />
            <WhatsAppButton />
        </>
    );
}