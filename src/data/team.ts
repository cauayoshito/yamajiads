import type { LucideIcon } from "lucide-react";
import { UserCog, ChartBar, Megaphone } from "lucide-react";

type Member = {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon; // fallback quando não tiver avatar
  avatar?: string; // opcional: /images/team/nome.jpg
  linkedin?: string;
  instagram?: string;
  email?: string;
};

export const team: Member[] = [
  {
    name: "Cauã Yamaji",
    role: "Head de Tráfego",
    description:
      "Especialista em funis e mídia paga. Foco em ROAS e escala com previsibilidade.",
    icon: ChartBar,
    avatar: "/images/team/caua.jpg",
    linkedin: "https://www.linkedin.com/in/seu-perfil",
    instagram: "https://www.instagram.com/seu-perfil",
    email: "oi@seuemail.com",
  },
  {
    name: "Ana Martins",
    role: "Copywriter",
    description:
      "Copy que transforma cliques em vendas com propostas de valor claras e provas sociais.",
    icon: Megaphone,
  },
  {
    name: "Rafael Nogueira",
    role: "Tech Lead",
    description:
      "Implementação e performance web. SEO técnico, Core Web Vitals e automações.",
    icon: UserCog,
  },
];
