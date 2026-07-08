import { SOCIAL_LINKS } from '@/lib/constants';

export type HomeLang = 'en' | 'es';

export interface HomeContent {
  brand: string;
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    identityTag: string;
    primaryCopy: string;
    secondaryCopy: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    label: string;
    body: string;
  };
  projects: {
    label: string;
    featured: {
      label: string;
      title: string;
      description: string;
      workflowSteps: string[];
      techStack: string;
    };
    healthtech: {
      label: string;
      title: string;
      description: string;
      techStack: string;
      placeholder: string;
    };
    pharmatech: {
      label: string;
      title: string;
      description: string;
      techStack: string;
      imageSrc: string;
      imageAlt: string;
      link: string;
      linkLabel: string;
    };
    archive: {
      label: string;
      items: Array<{
        name: string;
        tag: string;
        link: string;
      }>;
    };
  };
  experience: {
    label: string;
    items: Array<{
      period: string;
      role: string;
      company: string;
      description: string;
      techs: string;
      tag?: string;
      emphasis?: boolean;
    }>;
  };
  contact: {
    label: string;
    heading: string;
    footer: string;
    links: Array<{
      label: string;
      href: string;
      accent?: boolean;
    }>;
  };
}

export const homeContent: Record<HomeLang, HomeContent> = {
  en: {
    brand: 'M. IGLESIAS',
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      eyebrow: '> field status: online',
      titleLead: 'I build the interfaces',
      titleAccent: 'and the agent systems behind them.',
      identityTag: 'Miguel Iglesias | Frontend Developer and AI Agent Builder',
      primaryCopy:
        'I currently work on AI agents, WhatsApp automation flows, Redis-backed message handling, and polished product interfaces for businesses that need both clarity and execution.',
      secondaryCopy:
        'This redesign reframes my portfolio as a live field of product, frontend, and automation work instead of a static list of projects.',
      primaryCta: 'See the work',
      secondaryCta: 'Contact me',
    },
    about: {
      label: 'identity | about',
      body: 'I am an Informatics Engineering graduate from UCLA, bilingual, and shaped as much by frontend craft as by teaching and systems thinking. I move between web interfaces, mobile products, and AI agent infrastructure with the same goal: make complex work feel clear, human, and reliable.',
    },
    projects: {
      label: 'active nodes',
      featured: {
        label: '01 | Node | Freelance AI Agent Systems',
        title: 'WhatsApp quotation and sales agents for client-facing businesses',
        description:
          'Project-based freelance work building conversational quotation and sales agents on top of WhatsApp Business Cloud API, with Redis-backed buffering so rapid message bursts resolve as one clean execution. Client names are intentionally withheld, so this is presented as agent infrastructure work for client-facing businesses.',
        workflowSteps: ['MESSAGE', 'QUEUE', 'AGENT', 'REPLY'],
        techStack: 'n8n | WhatsApp Business Cloud API | Upstash Redis | Google ADK | Cloud Run',
      },
      healthtech: {
        label: '02 | Node | Frontend',
        title: 'Healthtech platform (private)',
        description:
          'Medical appointment marketplace for Venezuela, still unreleased. I have been the main frontend developer, shaping maps, OpenAPI contracts, native Android builds, and push notification flows while the product is still under wraps.',
        techStack: 'React | TypeScript | shadcn/ui | Capacitor.js | OneSignal',
        placeholder: 'Screenshot unavailable. Product still private.',
      },
      pharmatech: {
        label: '03 | Node | Mobile',
        title: 'PharmaTech',
        description:
          'Mobile e-commerce app for pharmacies. I led development end-to-end, including live order tracking over WebSockets and Google Maps integration for delivery operations.',
        techStack: 'React Native | Expo | TypeScript | WebSockets | Google Maps API',
        imageSrc: '/assets/common/images/pharmatech.jpg',
        imageAlt: 'PharmaTech mobile interface preview',
        link: 'https://github.com/PharmaTechVe/app',
        linkLabel: 'Open repository',
      },
      archive: {
        label: 'archived signals',
        items: [
          {
            name: 'MovieVerse',
            tag: 'Social movie app for discovery and posting',
            link: 'https://github.com/IglesiasMiguel/MovieVerse',
          },
          {
            name: 'University Online Banking',
            tag: 'Banking UI prototype built with React and Vite',
            link: 'https://github.com/IglesiasMiguel/banco-universitario-banca-online',
          },
          {
            name: 'Previous Portfolio',
            tag: 'Earlier iteration of this personal site',
            link: 'https://github.com/IglesiasMiguel/personal-web',
          },
        ],
      },
    },
    experience: {
      label: 'system timeline',
      items: [
        {
          period: 'Ongoing',
          role: 'Freelance AI Agent Developer',
          company: 'Independent',
          tag: 'Current',
          emphasis: true,
          description:
            'Project-based work building WhatsApp agents, quotation assistants, sales flows, Redis-backed buffering, and cloud-deployed demos for client-facing businesses.',
          techs: 'n8n | WhatsApp Cloud API | Upstash Redis | Google ADK | Cloud Run',
        },
        {
          period: 'Ongoing',
          role: 'Frontend Developer',
          company: 'Healthtech platform (private)',
          emphasis: true,
          description:
            'Main frontend developer for an unreleased medical appointment marketplace, handling maps, OpenAPI contracts, and mobile-ready product flows.',
          techs: 'React | TypeScript | Leaflet | Google Maps | Capacitor.js',
        },
        {
          period: 'Aug 2025 - Jun 2026',
          role: 'AI and Project Methodology Consultant',
          company: 'Universitas',
          tag: 'Recent',
          description:
            'Advised on software solutions, project methodology, and AI agent development across GCP, Vertex AI, Dialogflow CX, AppSheet, Zapier, and Scrumban workflows.',
          techs: 'GCP | Vertex AI | Dialogflow CX | AppSheet | Zapier | Scrumban',
        },
        {
          period: 'Prior role',
          role: 'Mobile Lead Developer',
          company: 'PharmaTech',
          description:
            'Led the mobile team building a React Native pharmacy e-commerce app with real-time order tracking and a delivery-focused product flow.',
          techs: 'React Native | Expo | TypeScript',
        },
        {
          period: 'Ongoing',
          role: 'English Instructor',
          company: 'Freelance',
          description:
            'Teaching and tutoring continue to shape how I document, explain, and ship technical systems with clarity.',
          techs: 'Communication | Technical writing',
        },
      ],
    },
    contact: {
      label: 'activate',
      heading: 'Open to frontend, AI agent, and product engineering work.',
      footer: '> field.status: awaiting signal',
      links: [
        { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, accent: true },
        { label: 'GitHub', href: SOCIAL_LINKS.github },
        { label: 'Instagram', href: SOCIAL_LINKS.instagram },
      ],
    },
  },
  es: {
    brand: 'M. IGLESIAS',
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: '> estado del sistema: online',
      titleLead: 'Construyo las interfaces',
      titleAccent: 'y los sistemas de agentes que operan detrás de ellas.',
      identityTag: 'Miguel Iglesias | Desarrollador frontend y creador de agentes de IA',
      primaryCopy:
        'Actualmente trabajo en agentes de IA, flujos de automatización por WhatsApp, manejo de mensajes con Redis e interfaces de producto pulidas para negocios que necesitan claridad y ejecución.',
      secondaryCopy:
        'Este rediseño replantea mi portafolio como un campo vivo de trabajo en producto, frontend y automatización, en lugar de una lista estática de proyectos.',
      primaryCta: 'Ver el trabajo',
      secondaryCta: 'Contactarme',
    },
    about: {
      label: 'identidad | sobre mí',
      body: 'Soy ingeniero informático egresado de la UCLA, bilingüe, y me he formado tanto desde el oficio frontend como desde la enseñanza y el pensamiento de sistemas. Me muevo entre interfaces web, productos móviles e infraestructura de agentes de IA con la misma meta: hacer que el trabajo complejo se sienta claro, humano y confiable.',
    },
    projects: {
      label: 'nodos activos',
      featured: {
        label: '01 | Nodo | Sistemas freelance de agentes de IA',
        title: 'Agentes de cotización y ventas por WhatsApp para negocios orientados al cliente',
        description:
          'Trabajo freelance por proyecto creando agentes conversacionales de cotización y ventas sobre WhatsApp Business Cloud API, con buffering respaldado por Redis para que ráfagas de mensajes se resuelvan como una sola ejecución limpia. Los nombres de clientes se omiten de forma intencional, así que esto se presenta como trabajo de infraestructura de agentes para negocios orientados al cliente.',
        workflowSteps: ['MENSAJE', 'COLA', 'AGENTE', 'RESPUESTA'],
        techStack: 'n8n | WhatsApp Business Cloud API | Upstash Redis | Google ADK | Cloud Run',
      },
      healthtech: {
        label: '02 | Nodo | Frontend',
        title: 'Plataforma healthtech (privada)',
        description:
          'Marketplace de citas médicas para Venezuela, aún sin lanzamiento. He sido el desarrollador frontend principal, definiendo mapas, contratos OpenAPI, compilaciones nativas de Android y flujos de notificaciones push mientras el producto sigue bajo reserva.',
        techStack: 'React | TypeScript | shadcn/ui | Capacitor.js | OneSignal',
        placeholder: 'Captura no disponible. El producto sigue siendo privado.',
      },
      pharmatech: {
        label: '03 | Nodo | Móvil',
        title: 'PharmaTech',
        description:
          'Aplicación móvil de e-commerce para farmacias. Lideré el desarrollo de punta a punta, incluyendo seguimiento de pedidos en tiempo real por WebSockets e integración de Google Maps para operaciones de entrega.',
        techStack: 'React Native | Expo | TypeScript | WebSockets | Google Maps API',
        imageSrc: '/assets/common/images/pharmatech.jpg',
        imageAlt: 'Vista previa de la interfaz móvil de PharmaTech',
        link: 'https://github.com/PharmaTechVe/app',
        linkLabel: 'Abrir repositorio',
      },
      archive: {
        label: 'señales archivadas',
        items: [
          {
            name: 'MovieVerse',
            tag: 'App social de cine para descubrir y publicar',
            link: 'https://github.com/IglesiasMiguel/MovieVerse',
          },
          {
            name: 'Banca en Línea Universitaria',
            tag: 'Prototipo de interfaz bancaria con React y Vite',
            link: 'https://github.com/IglesiasMiguel/banco-universitario-banca-online',
          },
          {
            name: 'Portafolio anterior',
            tag: 'Iteración previa de este sitio personal',
            link: 'https://github.com/IglesiasMiguel/personal-web',
          },
        ],
      },
    },
    experience: {
      label: 'línea del sistema',
      items: [
        {
          period: 'En curso',
          role: 'Desarrollador freelance de agentes de IA',
          company: 'Independiente',
          tag: 'Actual',
          emphasis: true,
          description:
            'Trabajo por proyecto creando agentes de WhatsApp, asistentes de cotización, flujos de venta, buffering con Redis y demos en la nube para negocios orientados al cliente.',
          techs: 'n8n | WhatsApp Cloud API | Upstash Redis | Google ADK | Cloud Run',
        },
        {
          period: 'En curso',
          role: 'Desarrollador frontend',
          company: 'Plataforma healthtech (privada)',
          emphasis: true,
          description:
            'Desarrollador frontend principal de un marketplace médico aún sin lanzamiento, encargándome de mapas, contratos OpenAPI y flujos de producto listos para móvil.',
          techs: 'React | TypeScript | Leaflet | Google Maps | Capacitor.js',
        },
        {
          period: 'Ago 2025 - Jun 2026',
          role: 'Consultor de IA y metodología de proyectos',
          company: 'Universitas',
          tag: 'Reciente',
          description:
            'Asesoré en soluciones de software, metodología de proyectos y desarrollo de agentes de IA con GCP, Vertex AI, Dialogflow CX, AppSheet, Zapier y flujos Scrumban.',
          techs: 'GCP | Vertex AI | Dialogflow CX | AppSheet | Zapier | Scrumban',
        },
        {
          period: 'Rol anterior',
          role: 'Líder de desarrollo móvil',
          company: 'PharmaTech',
          description:
            'Lideré el equipo móvil construyendo una app de e-commerce para farmacias en React Native con seguimiento de pedidos en tiempo real y un flujo centrado en entregas.',
          techs: 'React Native | Expo | TypeScript',
        },
        {
          period: 'En curso',
          role: 'Instructor de inglés',
          company: 'Freelance',
          description:
            'La enseñanza y las tutorías siguen moldeando cómo documento, explico y entrego sistemas técnicos con claridad.',
          techs: 'Comunicación | Redacción técnica',
        },
      ],
    },
    contact: {
      label: 'activar',
      heading: 'Disponible para trabajo en frontend, agentes de IA e ingeniería de producto.',
      footer: '> field.status: esperando señal',
      links: [
        { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, accent: true },
        { label: 'GitHub', href: SOCIAL_LINKS.github },
        { label: 'Instagram', href: SOCIAL_LINKS.instagram },
      ],
    },
  },
};

export function getHomeContent(lang: HomeLang) {
  return homeContent[lang] ?? homeContent.en;
}
