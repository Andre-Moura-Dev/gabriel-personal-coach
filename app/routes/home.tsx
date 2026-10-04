import type { Route } from "./+types/home";
import HomePage from '../homePage/homePage'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GN | Performance" },
    { name: "description", content: "Treinamento personalizado para desenvolver força, capacidades físicas e uma performance que se sustenta dentro e fora da academia.", },
  ];
}

export default function Home() {
  return <HomePage />;
}
