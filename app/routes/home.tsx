import type { Route } from "./+types/home";
import HomePage from '../homePage/homePage'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coach Gabriel | Treinamento Personalizado" },
    { name: "description", content: "Treinamento personalizado para emagrecimento, ganho de massa muscular e qualidade de vida, com avaliação completa e resultados seguros.", },
  ];
}

export default function Home() {
  return <HomePage />;
}
