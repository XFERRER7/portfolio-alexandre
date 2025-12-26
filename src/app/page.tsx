'use client';

import { useEffect, useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import BlackHole from '@/components/BlackHole';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {
  useScrollEffects,
  useSmoothScroll,
  useIntersectionAnimations,
  useCardTilt,
  useButtonEffects,
  useRippleEffect,
} from '@/hooks/useAnimations';
import type { SocialLink, Project, SkillCategory, ContactMethod } from '@/types';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const socialLinks: SocialLink[] = [
  {
    icon: 'bx bxl-github',
    link: 'https://github.com/XFERRER7',
    label: 'GitHub',
  },
  {
    icon: 'bx bxl-linkedin-square',
    link: 'https://www.linkedin.com/in/alexandre-talles-b662a020b/',
    label: 'LinkedIn',
  },
];

const projects: Project[] = [
  {
    title: 'Universal Bank (Folha de Pagamento)',
    description:
      'Sistema de pagamento de funcionários em lote, com fluxo completo de criação e envio de pagamentos, controle de status e validações. Fui responsável por todo o front-end e colaborei ativamente na construção do back-end e integrações.',
    tags: ['Next.js', 'Tailwind CSS', 'Golang', 'PostgreSQL'],
    link: ['https://painel.universalpagamentos.com.br/'],
    logo: 'FP',
  },
  {
    title: 'Central de Vagas - GO',
    description:
      'Liderei a implantação do sistema central de vagas para o estado de Goiás. Projeto em andamento com piloto em Valparaíso de Goiás, incluindo manutenção evolutiva/corretiva, treinamento de usuários, suporte e acompanhamento da operação.',
    tags: ['Docker', 'Nginx', 'Implantação', 'Suporte', 'Treinamento', 'Manutenção'],
    link: ['https://centraldevagas.defensoria.go.def.br/'],
    logo: 'C',
  },
  {
    title: 'GT Soluções',
    description:
      'SaaS para o setor automotivo focado em consulta e gestão de informações relacionadas a câmbios automáticos. Inclui um dashboard completo para administração de dados e usuários. Participei de todas as etapas do desenvolvimento; projeto com ~8 meses e cerca de 90% concluído.',
    tags: ['Next.js', 'Drizzle', 'Docker', 'PostgreSQL'],
    link: ['https://www.gtsolucoes.group/'],
    logo: 'GT',
  },
  {
    title: 'Minos (Gestão)',
    description:
      'Atuação como líder/gestor de desenvolvimento: faço a ponte entre cliente e equipe, organizo demandas, acompanho entregas e apoio tecnicamente desenvolvedores menos experientes na implementação de funcionalidades e boas práticas.',
    tags: ['Liderança', 'Gestão', 'Agile', 'Entrega'],
    link: [],
    logo: 'MN',
  },
  {
    title: 'Universal Bank Admin',
    description:
      'Desenvolvimento de painel administrativo com requisitos rígidos de segurança para a Universal Bank. Plataforma voltada ao gerenciamento de operações como antecipações, convênios e rotinas financeiras, com controle de acesso e auditoria.',
    tags: ['Admin Panel', 'Segurança', 'Financeiro', 'Dashboard'],
    link: ['https://painel-gerencial.universalpagamentos.com.br/'],
    logo: 'UB',
  },
  {
    title: 'Landing Pages',
    description:
      'Criação de landing pages modernas e responsivas para empresas e profissionais, com foco em conversão, performance e boa apresentação do produto/serviço.',
    tags: ['Landing Page', 'UI/UX', 'Performance', 'SEO'],
    link: ['https://pedromobile.com', 'https://www.italomobile.com', 'https://www.wealt.app', 'https://fuhalls.com.br/',],
    logo: 'LP',
  },
]


const skillCategories: SkillCategory[] = [
  {
    title: 'Desenvolvimento Frontend',
    icon: 'bx bx-layout',
    skills: [
      { icon: 'bxl bx-next-js', name: 'Next.js' },
      { icon: 'bx bxl-javascript', name: 'JavaScript' },
      { icon: 'bxl  bx-expo', name: 'React Native' },
      { icon: 'bx bxl-react', name: 'React' },
      { icon: 'bx bxl-typescript', name: 'TypeScript' },
      { icon: 'bx bxl-tailwind-css', name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Desenvolvimento Backend',
    icon: 'bx bxs-server',
    skills: [
      { icon: 'bxl  bx-nest-js', name: 'NestJS' },
      { icon: 'bxl bx-go-lang', name: 'Go' },
      { icon: 'bxl bx-express-js', name: 'Express.js' },
      { icon: 'bxl bx-java', name: 'Java' },
      { icon: 'bxl bx-postgresql', name: 'PostgreSQL' },
      { icon: 'bxl bx-my-sql', name: 'MySQL' },
    ],
  },
  {
    title: 'Ferramentas e Outros',
    icon: 'bx bx-laptop',
    skills: [
      { icon: 'bx bxl-github', name: 'GitHub' },
      { icon: 'bx bxl-gitlab', name: 'GitLab' },
      { icon: 'bx bxl-git', name: 'Git' },
      { icon: 'bx bxl-docker', name: 'Docker' },
      { icon: 'bxl bx-atlassian', name: 'Atlassian' },
      { icon: 'bxl bx-supabase', name: 'Supabase' },
    ],
  },
];

const contactMethods: ContactMethod[] = [
  {
    icon: 'bx bxs-envelope',
    title: 'Email',
    description: 'aledev.js@gmail.com',
    link: 'mailto:aledev.js@gmail.com',
  },
  {
    icon: 'bx bxl-linkedin-square',
    title: 'LinkedIn',
    description: 'Connect with me',
    link: 'https://www.linkedin.com/in/alexandre-talles-b662a020b/',
    target: '_blank',
  },
  {
    icon: 'bx bxl-github',
    title: 'GitHub',
    description: 'Check my repositories',
    link: 'https://github.com/XFERRER7',
    target: '_blank',
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useScrollEffects();
  useSmoothScroll();
  useIntersectionAnimations();
  useCardTilt();
  useButtonEffects();
  useRippleEffect();

  const handleBlackHoleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 500);
  };

  useEffect(() => {
    // Fallback: se o vídeo não carregar em 5 segundos, mostra a página mesmo assim
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        document.body.classList.add('loaded');
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <LanguageProvider>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <h2 className="loading-text">Carregando...</h2>
          </div>
        </div>
      )}
      <div className={`container ${isLoading ? 'hidden' : 'visible'}`}>
        <Header socialLinks={socialLinks} isPageReady={!isLoading} />
        <BlackHole onLoad={handleBlackHoleLoad} />
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills categories={skillCategories} />
        <Contact methods={contactMethods} />
        <Footer />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}
