export const translations = {
  pt: {
    header: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      badge: 'Engenheiro de Software',
      greeting: 'Olá, eu sou',
      tagline: 'Construindo soluções digitais inovadoras',
      description:
        'Sou um Engenheiro de Software em formação com experiência em desenvolvimento web, integrações e desenvolvimento de software. Crio aplicações dinâmicas, responsivas e escaláveis.',
      contactBtn: 'Entre em Contato',
      projectsBtn: 'Ver Projetos',
    },
    about: {
      title: 'Sobre Mim',
      card1: {
        title: 'Olá, sou Alexandre',
        description:
          'Atualmente estudando Engenharia de Software e Cibersegurança. Aprimorei minhas habilidades em desenvolvimento front-end e back-end com integrações, criando sites e software dinâmicos e responsivos.',
      },
      card2: {
        title: 'Stack Tecnológica',
        description:
          'Sou especializado em uma variedade de linguagens, frameworks e ferramentas que me permitem construir aplicações robustas e escaláveis.',
      },
      card3: {
        title: 'Trabalho Remoto',
        description:
          'Baseado no Brasil e aberto a trabalhar remotamente de qualquer lugar do mundo. Flexível com fusos horários e adaptável a diferentes culturas de trabalho.',
      },
    },
    projects: {
      title: 'Projeto em Destaque',
      viewProject: 'Ver Projeto',
    },
    skills: {
      title: 'Habilidades & Expertise',
      frontend: 'Desenvolvimento Frontend',
      backend: 'Desenvolvimento Backend',
      tools: 'Ferramentas & Tecnologias',
    },
    contact: {
      title: 'Vamos Trabalhar Juntos',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      connectMe: 'Conecte-se comigo',
      checkRepos: 'Veja meus repositórios',
    },
    footer: {
      rights: 'Todos os direitos reservados. Feito com',
      and: 'e dedicação.',
    },
  },
  en: {
    header: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Software Engineer',
      greeting: "Hi, I'm",
      tagline: 'Building innovative digital solutions',
      description:
        "I'm a Software Engineer in training with experience in web development, integrations, and software development. I create dynamic, responsive, and scalable applications.",
      contactBtn: 'Contact Me',
      projectsBtn: 'View Projects',
    },
    about: {
      title: 'About Me',
      card1: {
        title: "Hi there, I'm Alexandre",
        description:
          'Currently studying Software Engineering and Cybersecurity. I have honed my skills in front-end and back-end development with integrations, creating dynamic and responsive websites and software.',
      },
      card2: {
        title: 'Tech Stack',
        description:
          'I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.',
      },
      card3: {
        title: 'Remote Work',
        description:
          'Based in Brazil and open to working remotely from anywhere in the world. Flexible with time zones and adaptable to different working cultures.',
      },
    },
    projects: {
      title: 'Featured Project',
      viewProject: 'View Project',
    },
    skills: {
      title: 'Skills & Expertise',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      tools: 'Tools & Technologies',
    },
    contact: {
      title: "Let's Work Together",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      connectMe: 'Connect with me',
      checkRepos: 'Check my repositories',
    },
    footer: {
      rights: 'All rights reserved. Built with',
      and: 'and dedication.',
    },
  },
  es: {
    header: {
      about: 'Acerca',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Ingeniero de Software',
      greeting: 'Hola, soy',
      tagline: 'Construyendo soluciones digitales innovadoras',
      description:
        'Soy un Ingeniero de Software en formación con experiencia en desarrollo web, integraciones y desarrollo de software. Creo aplicaciones dinámicas, responsivas y escalables.',
      contactBtn: 'Contáctame',
      projectsBtn: 'Ver Proyectos',
    },
    about: {
      title: 'Sobre Mí',
      card1: {
        title: 'Hola, soy Alexandre',
        description:
          'Actualmente estudiando Ingeniería de Software y Ciberseguridad. He perfeccionado mis habilidades en desarrollo front-end y back-end con integraciones, creando sitios web y software dinámicos y responsivos.',
      },
      card2: {
        title: 'Stack Tecnológico',
        description:
          'Me especializo en una variedad de lenguajes, frameworks y herramientas que me permiten construir aplicaciones robustas y escalables.',
      },
      card3: {
        title: 'Trabajo Remoto',
        description:
          'Basado en Brasil y abierto a trabajar remotamente desde cualquier parte del mundo. Flexible con zonas horarias y adaptable a diferentes culturas de trabajo.',
      },
    },
    projects: {
      title: 'Proyecto Destacado',
      viewProject: 'Ver Proyecto',
    },
    skills: {
      title: 'Habilidades y Experiencia',
      frontend: 'Desarrollo Frontend',
      backend: 'Desarrollo Backend',
      tools: 'Herramientas y Tecnologías',
    },
    contact: {
      title: 'Trabajemos Juntos',
      email: 'Correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      connectMe: 'Conéctate conmigo',
      checkRepos: 'Revisa mis repositorios',
    },
    footer: {
      rights: 'Todos los derechos reservados. Hecho con',
      and: 'y dedicación.',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
