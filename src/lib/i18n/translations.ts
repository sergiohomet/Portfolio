export type Locale = 'en' | 'es';

export type Translations = {
  nav: {
    home: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    description: string;
    roleFreelance: string;
    roleStudy: string;
    btnProjects: string;
    btnExperience: string;
    btnCV: string;
  };
  experience: {
    sectionTitle: string;
    freelanceTitle: string;
    freelancePeriod: string;
    freelanceBullets: string[];
    uployTitle: string;
    uployPeriod: string;
    uployBullets: string[];
  };
  projects: {
    sectionTitle: string;
    repository: string;
    tryIt: string;
    projectPreview: string;
  };
  skills: {
    sectionTitle: string;
    technicalTitle: string;
    softTitle: string;
    categories: {
      foundations: string;
      framework: string;
      state: string;
      backend: string;
      tools: string;
      ai: string;
    };
    softSkills: string[];
  };
  education: {
    sectionTitle: string;
    degree1: string;
    period1: string;
    degree2: string;
  };
  contact: {
    sectionTitle: string;
    subtitle: string;
    findMe: string;
    linkedinText: string;
    copyEmail: string;
    copied: string;
  };
  contactForm: {
    title: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    nameValidation: string;
    emailValidation: string;
    messageValidation: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact me',
    },
    hero: {
      subtitle: 'Front End Developer · Freelance',
      description:
        'I build modern, scalable, results-oriented web applications. I integrate AI tools into my workflow to deliver higher-quality solutions with full end-to-end autonomy — from architecture to client delivery.',
      roleFreelance: 'Freelance Software Developer',
      roleStudy: 'UTN Student',
      btnProjects: 'My Projects',
      btnExperience: 'Experience',
      btnCV: 'Download CV',
    },
    experience: {
      sectionTitle: 'Work Experience',
      freelanceTitle: 'Freelance Software Developer',
      freelancePeriod: 'February 2025 – Present',
      freelanceBullets: [
        'Custom web application development for clients, with full ownership of the cycle: architecture, development, deployment and delivery.',
        'Integration of AI tools (Claude Code, Cursor, Gemini CLI) into the workflow to accelerate deliveries and improve code quality.',
        'Main stack: React, TypeScript, TailwindCSS, Next.js and Supabase.',
        'Direct management of client requirements, independent technical decisions and delivery of functional solutions.',
      ],
      uployTitle: 'Front End Developer – Uploy',
      uployPeriod: 'August 2024 – January 2025',
      uployBullets: [
        'Web application development with React, TypeScript and TailwindCSS.',
        '20% reduction in load times and reduction of production bugs.',
        'Implementation of reusable modular architecture for scalability.',
        'Addition of new features based on feedback, increasing user retention by 15%.',
      ],
    },
    projects: {
      sectionTitle: 'Featured Projects',
      repository: 'Repository',
      tryIt: 'Try it',
      projectPreview: 'Project preview',
    },
    skills: {
      sectionTitle: 'Skills',
      technicalTitle: 'Technical Skills',
      softTitle: 'Soft Skills',
      categories: {
        foundations: 'Web Foundations',
        framework: 'Frameworks & Stack',
        state: 'State & Routing',
        backend: 'Backend & Databases',
        tools: 'Tools & Workflow',
        ai: 'AI & Automation',
      },
      softSkills: [
        'Problem solving',
        'Autonomy and full ownership',
        'Client communication',
        'Independent project management',
        'Proactivity and adaptability',
        'Attention to detail',
        'Continuous learning',
        'Critical thinking',
        'Agile teamwork',
        'Time management',
      ],
    },
    education: {
      sectionTitle: 'Education',
      degree1: 'Programming Technician',
      period1: '2024 – Present',
      degree2: 'Technical Professional',
    },
    contact: {
      sectionTitle: 'Contact',
      subtitle: 'Want to know more about my profile or projects?',
      findMe: 'Or find me at:',
      linkedinText: 'Professional Profile',
      copyEmail: 'Copy email',
      copied: 'Copied!',
    },
    contactForm: {
      title: 'Send me a message',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      messagePlaceholder: 'Write your message here...',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successMessage: 'I will get back to you as soon as possible.',
      errorTitle: 'Failed to send',
      nameValidation: 'Name must be at least 2 characters.',
      emailValidation: 'Please enter a valid email address.',
      messageValidation: 'Message must be at least 10 characters.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contáctame',
    },
    hero: {
      subtitle: 'Front End Developer · Freelance',
      description:
        'Desarrollo aplicaciones web modernas, escalables y orientadas a resultados. Integro herramientas de IA en mi flujo de trabajo para entregar soluciones de mayor calidad con autonomía end-to-end: desde la arquitectura hasta la entrega al cliente.',
      roleFreelance: 'Freelance Software Developer',
      roleStudy: 'Estudiante en UTN',
      btnProjects: 'Mis Proyectos',
      btnExperience: 'Experiencia',
      btnCV: 'Descargar CV',
    },
    experience: {
      sectionTitle: 'Experiencia Laboral',
      freelanceTitle: 'Freelance Software Developer',
      freelancePeriod: 'Febrero 2025 – Presente',
      freelanceBullets: [
        'Desarrollo de aplicaciones web a medida para clientes, con ownership completo del ciclo: arquitectura, desarrollo, despliegue y entrega.',
        'Integración de herramientas de IA (Claude Code, Cursor, Gemini CLI) en el flujo de trabajo para acelerar entregas y mejorar calidad del código.',
        'Stack principal: React, TypeScript, TailwindCSS, Next.js y Supabase.',
        'Gestión directa de requisitos con clientes, toma de decisiones técnicas independientes y entrega de soluciones funcionales.',
      ],
      uployTitle: 'Front End Developer – Uploy',
      uployPeriod: 'Agosto 2024 – Enero 2025',
      uployBullets: [
        'Desarrollo de aplicaciones web con React, TypeScript y TailwindCSS.',
        'Reducción de tiempos de carga en un 20% y disminución de bugs en producción.',
        'Implementación de arquitectura modular reutilizable para escalabilidad.',
        'Incorporación de nuevas funcionalidades basadas en feedback, aumentando la retención de usuarios en un 15%.',
      ],
    },
    projects: {
      sectionTitle: 'Proyectos Destacados',
      repository: 'Repositorio',
      tryIt: 'Probar',
      projectPreview: 'Visualización del proyecto',
    },
    skills: {
      sectionTitle: 'Habilidades',
      technicalTitle: 'Habilidades Técnicas',
      softTitle: 'Habilidades Blandas',
      categories: {
        foundations: 'Fundamentos Web',
        framework: 'Frameworks & Stack',
        state: 'Estado & Routing',
        backend: 'Backend & Bases de datos',
        tools: 'Herramientas & Workflow',
        ai: 'IA & Automatización',
      },
      softSkills: [
        'Resolución de problemas',
        'Autonomía y ownership completo',
        'Comunicación con clientes',
        'Gestión de proyectos independiente',
        'Proactividad y adaptabilidad',
        'Atención al detalle',
        'Aprendizaje continuo',
        'Pensamiento crítico',
        'Trabajo en equipo ágil',
        'Gestión del tiempo',
      ],
    },
    education: {
      sectionTitle: 'Educación',
      degree1: 'Técnico en Programación',
      period1: '2024 – Actualidad',
      degree2: 'Técnico Profesional',
    },
    contact: {
      sectionTitle: 'Contacto',
      subtitle: '¿Quieres conocer más sobre mi perfil o proyectos?',
      findMe: 'O encuéntrame en:',
      linkedinText: 'Perfil Profesional',
      copyEmail: 'Copiar email',
      copied: '¡Copiado!',
    },
    contactForm: {
      title: 'Envíame un mensaje',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje Enviado!',
      successMessage: 'Me pondré en contacto a la brevedad.',
      errorTitle: 'Error al enviar',
      nameValidation: 'El nombre debe tener al menos 2 caracteres.',
      emailValidation: 'Por favor, introduce un email válido.',
      messageValidation: 'El mensaje debe tener al menos 10 caracteres.',
    },
  },
};
