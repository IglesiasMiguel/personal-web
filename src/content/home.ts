import { SOCIAL_LINKS } from '@/lib/constants';

export type HomeLang = 'en' | 'es';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectVersion {
  key: string;
  label: string;
  href: string;
  ctaLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  placeholderEyebrow?: string;
  placeholderTitle?: string;
}

export interface ProjectItem {
  priority: number;
  label: string;
  category: string;
  title: string;
  description: string;
  techStack: string;
  mediaMode: 'web' | 'mobile' | 'private-placeholder' | 'mixed';
  imageSrc?: string;
  imageAlt?: string;
  imageSrcSecondary?: string;
  imageAltSecondary?: string;
  workflowSteps?: string[];
  mediaEyebrow?: string;
  mediaTitle?: string;
  mediaPoints?: string[];
  primaryLink?: ProjectLink;
  secondaryLink?: ProjectLink;
  disclaimer?: string;
  statusTag?: string;
  versions?: ProjectVersion[];
}

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
    items: ProjectItem[];
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
      subtitle: string;
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
        'I currently work on private product frontends, AI agents, WhatsApp automation flows, and mobile-ready experiences for businesses that need clarity, execution, and reliable systems.',
      secondaryCopy:
        'This portfolio now centers the projects that best represent my current work across product, frontend, mobile, and automation.',
      primaryCta: 'See the work',
      secondaryCta: 'Contact me',
    },
    about: {
      label: 'identity | about',
      body: 'I am an Informatics Engineering graduate from UCLA, bilingual, and shaped as much by frontend craft as by teaching and systems thinking. I move between web interfaces, mobile products, and AI agent infrastructure with the same goal: make complex work feel clear, human, and reliable.',
    },
    projects: {
      label: 'active nodes',
      items: [
        {
          priority: 1,
          label: '01 | Node | Private Product',
          category: 'Frontend',
          statusTag: 'Current',
          title: 'Cítate',
          description:
            'Private medical appointment marketplace for Venezuela. I lead the frontend experience, shaping scheduling flows, maps, OpenAPI-connected interfaces, Android builds, and push-ready product behavior while the platform remains under wraps.',
          techStack: 'React | TypeScript | shadcn/ui | Capacitor.js | OneSignal | OpenAPI',
          mediaMode: 'web',
          imageSrc: '/assets/common/images/citate.png',
          imageAlt: 'Cítate public landing page preview',
          mediaEyebrow: 'Private case study',
          mediaTitle: 'Frontend product systems',
          mediaPoints: [
            'Appointment booking flows',
            'Maps and provider discovery',
            'Android-ready builds',
            'Push notification journeys',
          ],
          primaryLink: {
            label: 'Open live preview',
            href: 'https://medical-appointments-frontend-dev.onrender.com/',
          },
          disclaimer:
            'Private project. Live preview available, but it may take a moment to wake up because it runs on Render free-tier infrastructure.',
        },
        {
          priority: 2,
          label: '02 | Node | AI Agents',
          category: 'AI Agents',
          statusTag: 'Current',
          title: 'Freelance AI agent systems for WhatsApp sales and quotation flows',
          description:
            'Project-based freelance work building quotation and sales agents on top of WhatsApp Business Cloud API, with Redis-backed buffering so rapid message bursts resolve as one clean execution for client-facing businesses.',
          techStack: 'n8n | WhatsApp Business Cloud API | Upstash Redis | Google ADK | Cloud Run',
          mediaMode: 'mixed',
          workflowSteps: ['MESSAGE', 'QUEUE', 'AGENT', 'REPLY'],
          mediaEyebrow: 'Automation infrastructure',
          mediaPoints: [
            'Redis-backed buffering',
            'Client-facing quotation flows',
            'Cloud-deployed agent demos',
          ],
        },
        {
          priority: 3,
          label: '03 | Node | Mobile Data',
          category: 'Mobile',
          statusTag: 'Public Repo',
          title: 'Venezuela Gap Monitor',
          description:
            'React Native and Cloudflare Worker app that monitors the Venezuela exchange rate gap through a fast mobile dashboard, bilingual UI, and native Android widgets for glanceable market tracking.',
          techStack:
            'React Native | Expo | TypeScript | Cloudflare Workers | React Query | Native widgets',
          mediaMode: 'mobile',
          imageSrc: '/assets/common/images/vzla-gap-monitor.png',
          imageAlt: 'Venezuela Gap Monitor mobile interface preview',
          mediaEyebrow: 'Android widgets',
          mediaTitle: 'Market monitor',
          mediaPoints: [
            'BCV vs Binance tracking',
            'Native home-screen widgets',
            'Bilingual mobile experience',
          ],
          primaryLink: {
            label: 'Open repository',
            href: 'https://github.com/IglesiasMiguel/vzla-fx-gap-monitor',
          },
        },
        {
          priority: 4,
          label: '04 | Node | Web Platform',
          category: 'Web',
          statusTag: 'Public Repo',
          title: 'Café Lectura',
          description:
            'Web application for a private reading club in Venezuela, covering public discovery, member flows, and internal administration with a product structure built for real operations.',
          techStack: 'Next.js | TypeScript | Tailwind CSS | shadcn/ui | Supabase | Vercel',
          mediaMode: 'web',
          imageSrc: '/assets/common/images/cafe-lectura.png',
          imageAlt: 'Café Lectura homepage preview',
          mediaEyebrow: 'Reading club platform',
          mediaTitle: 'Public site + member area + admin area',
          mediaPoints: [
            'Editorial browsing experience',
            'Member and admin separation',
            'Secure product architecture',
          ],
          primaryLink: {
            label: 'Open live demo',
            href: 'https://cafe-lectura.vercel.app/',
          },
          secondaryLink: {
            label: 'Open repository',
            href: 'https://github.com/cafelectura760-sys/cafe-lectura',
          },
        },
        {
          priority: 5,
          label: '05 | Node | Mobile Commerce',
          category: 'Mobile',
          statusTag: 'Public Repo',
          title: 'PharmaTech',
          description:
            'Mobile e-commerce app for pharmacies. I led development end to end, including live order tracking over WebSockets and Google Maps integration for delivery operations.',
          techStack: 'React Native | Expo | TypeScript | WebSockets | Google Maps API',
          mediaMode: 'mobile',
          imageSrc: '/assets/common/images/pharmatech.png',
          imageAlt: 'PharmaTech mobile interface preview',
          mediaEyebrow: 'Delivery product',
          mediaPoints: ['Catalog browsing', 'Real-time tracking', 'Delivery-focused UX'],
          primaryLink: {
            label: 'Open repository',
            href: 'https://github.com/PharmaTechVe/app',
          },
        },
        {
          priority: 6,
          label: '06 | Node | Mobile Social',
          category: 'Mobile',
          statusTag: 'Public Repo',
          title: 'MovieVerse',
          description:
            'Social movie app focused on discovery and posting, built as a mobile-first interface where browsing, content, and interaction all live inside a cinematic product language.',
          techStack: 'Expo | React Native | TypeScript | File-based routing',
          mediaMode: 'mobile',
          imageSrc: '/assets/common/images/movieverse.png',
          imageAlt: 'MovieVerse mobile interface preview',
          mediaEyebrow: 'Social discovery',
          mediaPoints: ['Movie browsing', 'Post-based interaction', 'Mobile-first UI'],
          primaryLink: {
            label: 'Open repository',
            href: 'https://github.com/IglesiasMiguel/MovieVerse',
          },
        },
        {
          priority: 7,
          label: '07 | Node | Portfolio System',
          category: 'Portfolio',
          statusTag: 'Public Repo',
          title: 'Personal Web',
          description:
            'This project now acts as a versioned portfolio case study: version 1 captures the calmer portfolio currently preserved from main, while version 2 is the node-based system you are reading now, built around stronger project curation and clearer product positioning.',
          techStack: 'Astro | TypeScript | Tailwind CSS | shadcn/ui',
          mediaMode: 'web',
          mediaEyebrow: 'Versioned portfolio',
          mediaTitle: 'Version 1 and Version 2',
          mediaPoints: [
            'V1: calmer presentation preserved from main',
            'V2: current node-based portfolio system',
            'Same product, stronger content hierarchy',
          ],
          secondaryLink: {
            label: 'Open repository',
            href: 'https://github.com/IglesiasMiguel/personal-web',
          },
          versions: [
            {
              key: 'v1',
              label: 'Version 1',
              ctaLabel: 'View version 1',
              href: 'https://migueliglesias.netlify.app/',
              imageSrc: '/assets/common/images/personal-web.png',
              imageAlt: 'Previous personal website preview',
            },
            {
              key: 'v2',
              label: 'Version 2',
              ctaLabel: 'View version 2',
              href: '/',
              placeholderEyebrow: 'Current node system',
              placeholderTitle: 'Version 2 preview coming soon',
            },
          ],
        },
      ],
    },
    experience: {
      label: 'system timeline',
      items: [
        {
          period: 'Ongoing',
          role: 'Frontend Developer',
          company: 'Cítate (private product)',
          tag: 'Current',
          emphasis: true,
          description:
            'Main frontend developer for a private medical appointment marketplace, shaping booking flows, maps, OpenAPI contracts, Android-ready builds, and notification-driven product behavior.',
          techs: 'React | TypeScript | shadcn/ui | Capacitor.js | OneSignal | OpenAPI',
        },
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
          techs: 'React Native | Expo | TypeScript | WebSockets | Google Maps API',
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
        {
          label: 'LinkedIn',
          href: SOCIAL_LINKS.linkedin,
          subtitle: 'Open profile',
        },
        { label: 'GitHub', href: SOCIAL_LINKS.github, subtitle: 'Open profile' },
        { label: 'Instagram', href: SOCIAL_LINKS.instagram, subtitle: 'Open profile' },
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
        'Actualmente trabajo en frontends de producto privados, agentes de IA, flujos de automatización por WhatsApp y experiencias listas para móvil para negocios que necesitan claridad, ejecución y sistemas confiables.',
      secondaryCopy:
        'Este portafolio ahora prioriza los proyectos que mejor representan mi trabajo actual en producto, frontend, móvil y automatización.',
      primaryCta: 'Ver el trabajo',
      secondaryCta: 'Contactarme',
    },
    about: {
      label: 'identidad | sobre mí',
      body: 'Soy ingeniero informático egresado de la UCLA, bilingüe, y me he formado tanto desde el oficio frontend como desde la enseñanza y el pensamiento de sistemas. Me muevo entre interfaces web, productos móviles e infraestructura de agentes de IA con la misma meta: hacer que el trabajo complejo se sienta claro, humano y confiable.',
    },
    projects: {
      label: 'nodos activos',
      items: [
        {
          priority: 1,
          label: '01 | Nodo | Producto Privado',
          category: 'Frontend',
          statusTag: 'Actual',
          title: 'Cítate',
          description:
            'Marketplace privado de citas médicas para Venezuela. Lidero la experiencia frontend, definiendo flujos de agendamiento, mapas, interfaces conectadas por OpenAPI, builds para Android y comportamiento de producto orientado a notificaciones mientras la plataforma sigue bajo reserva.',
          techStack: 'React | TypeScript | shadcn/ui | Capacitor.js | OneSignal | OpenAPI',
          mediaMode: 'web',
          imageSrc: '/assets/common/images/citate.png',
          imageAlt: 'Vista previa del landing público de Cítate',
          mediaEyebrow: 'Caso privado',
          mediaTitle: 'Sistemas frontend de producto',
          mediaPoints: [
            'Flujos de reserva de citas',
            'Mapas y descubrimiento de especialistas',
            'Builds listos para Android',
            'Recorridos con notificaciones push',
          ],
          primaryLink: {
            label: 'Abrir demo pública',
            href: 'https://medical-appointments-frontend-dev.onrender.com/',
          },
          disclaimer:
            'Proyecto privado. La demo pública puede tardar un poco en levantar porque corre sobre infraestructura gratuita de Render.',
        },
        {
          priority: 2,
          label: '02 | Nodo | Agentes de IA',
          category: 'Agentes',
          statusTag: 'Actual',
          title: 'Sistemas freelance de agentes de IA para ventas y cotizaciones por WhatsApp',
          description:
            'Trabajo freelance por proyecto construyendo agentes de cotización y ventas sobre WhatsApp Business Cloud API, con buffering respaldado por Redis para que ráfagas de mensajes se resuelvan como una sola ejecución limpia para negocios orientados al cliente.',
          techStack: 'n8n | WhatsApp Business Cloud API | Upstash Redis | Google ADK | Cloud Run',
          mediaMode: 'mixed',
          workflowSteps: ['MENSAJE', 'COLA', 'AGENTE', 'RESPUESTA'],
          mediaEyebrow: 'Infraestructura de automatización',
          mediaPoints: [
            'Buffering respaldado por Redis',
            'Flujos de cotización orientados al cliente',
            'Demos de agentes desplegadas en la nube',
          ],
        },
        {
          priority: 3,
          label: '03 | Nodo | Datos Móviles',
          category: 'Móvil',
          statusTag: 'Repo Público',
          title: 'Venezuela Gap Monitor',
          description:
            'Aplicación en React Native y Cloudflare Worker para monitorear la brecha cambiaria en Venezuela mediante un dashboard móvil veloz, interfaz bilingüe y widgets nativos de Android para seguimiento de mercado de un vistazo.',
          techStack:
            'React Native | Expo | TypeScript | Cloudflare Workers | React Query | Widgets nativos',
          mediaMode: 'mobile',
          imageSrc: '/assets/common/images/vzla-gap-monitor.png',
          imageAlt: 'Vista previa de la interfaz móvil de Venezuela Gap Monitor',
          mediaEyebrow: 'Widgets para Android',
          mediaTitle: 'Monitor de mercado',
          mediaPoints: [
            'Seguimiento BCV vs Binance',
            'Widgets nativos en pantalla de inicio',
            'Experiencia móvil bilingüe',
          ],
          primaryLink: {
            label: 'Abrir repositorio',
            href: 'https://github.com/IglesiasMiguel/vzla-fx-gap-monitor',
          },
        },
        {
          priority: 4,
          label: '04 | Nodo | Plataforma Web',
          category: 'Web',
          statusTag: 'Repo Público',
          title: 'Café Lectura',
          description:
            'Aplicación web para un club de lectura privado en Venezuela, con área pública, flujos para miembros y administración interna dentro de una estructura de producto pensada para operación real.',
          techStack: 'Next.js | TypeScript | Tailwind CSS | shadcn/ui | Supabase | Vercel',
          mediaMode: 'web',
          imageSrc: '/assets/common/images/cafe-lectura.png',
          imageAlt: 'Vista previa de la portada de Café Lectura',
          mediaEyebrow: 'Plataforma de club de lectura',
          mediaTitle: 'Sitio público + membresía + administración',
          mediaPoints: [
            'Experiencia editorial de exploración',
            'Separación entre miembros y administración',
            'Arquitectura segura de producto',
          ],
          primaryLink: {
            label: 'Abrir demo pública',
            href: 'https://cafe-lectura.vercel.app/',
          },
          secondaryLink: {
            label: 'Abrir repositorio',
            href: 'https://github.com/cafelectura760-sys/cafe-lectura',
          },
        },
        {
          priority: 5,
          label: '05 | Nodo | Comercio Móvil',
          category: 'Móvil',
          statusTag: 'Repo Público',
          title: 'PharmaTech',
          description:
            'Aplicación móvil de e-commerce para farmacias. Lideré el desarrollo de punta a punta, incluyendo seguimiento de pedidos en tiempo real por WebSockets e integración de Google Maps para operaciones de entrega.',
          techStack: 'React Native | Expo | TypeScript | WebSockets | Google Maps API',
          mediaMode: 'mobile',
          imageSrc: '/assets/common/images/pharmatech.png',
          imageAlt: 'Vista previa de la interfaz móvil de PharmaTech',
          mediaEyebrow: 'Producto de entregas',
          mediaPoints: [
            'Exploración de catálogo',
            'Seguimiento en tiempo real',
            'UX enfocada en delivery',
          ],
          primaryLink: {
            label: 'Abrir repositorio',
            href: 'https://github.com/PharmaTechVe/app',
          },
        },
        {
          priority: 6,
          label: '06 | Nodo | Social Móvil',
          category: 'Móvil',
          statusTag: 'Repo Público',
          title: 'MovieVerse',
          description:
            'App social de cine enfocada en descubrimiento y publicación, construida como una interfaz mobile-first donde la exploración, el contenido y la interacción viven dentro de un lenguaje de producto cinematográfico.',
          techStack: 'Expo | React Native | TypeScript | File-based routing',
          mediaMode: 'mobile',
          imageSrc: '/assets/common/images/movieverse.png',
          imageAlt: 'Vista previa de la interfaz móvil de MovieVerse',
          mediaEyebrow: 'Descubrimiento social',
          mediaPoints: [
            'Exploración de películas',
            'Interacción basada en publicaciones',
            'UI mobile-first',
          ],
          primaryLink: {
            label: 'Abrir repositorio',
            href: 'https://github.com/IglesiasMiguel/MovieVerse',
          },
        },
        {
          priority: 7,
          label: '07 | Nodo | Sistema de Portafolio',
          category: 'Portafolio',
          statusTag: 'Repo Público',
          title: 'Personal Web',
          description:
            'Este proyecto ahora funciona como un caso de portafolio versionado: la versión 1 conserva la edición más calmada que sigue preservada desde main, mientras que la versión 2 es el sistema actual basado en nodos, con una curaduría más fuerte de proyectos y mejor posicionamiento de producto.',
          techStack: 'Astro | TypeScript | Tailwind CSS | shadcn/ui',
          mediaMode: 'web',
          mediaEyebrow: 'Portafolio versionado',
          mediaTitle: 'Versión 1 y Versión 2',
          mediaPoints: [
            'V1: presentación más calmada preservada desde main',
            'V2: sistema actual de portafolio por nodos',
            'Mismo producto, jerarquía de contenido más fuerte',
          ],
          secondaryLink: {
            label: 'Abrir repositorio',
            href: 'https://github.com/IglesiasMiguel/personal-web',
          },
          versions: [
            {
              key: 'v1',
              label: 'Versión 1',
              ctaLabel: 'Ver versión 1',
              href: 'https://migueliglesias.netlify.app/',
              imageSrc: '/assets/common/images/personal-web.png',
              imageAlt: 'Vista previa del sitio personal anterior',
            },
            {
              key: 'v2',
              label: 'Versión 2',
              ctaLabel: 'Ver versión 2',
              href: '/es/',
              placeholderEyebrow: 'Sistema actual por nodos',
              placeholderTitle: 'Preview de la versión 2 próximamente',
            },
          ],
        },
      ],
    },
    experience: {
      label: 'línea del sistema',
      items: [
        {
          period: 'En curso',
          role: 'Desarrollador frontend',
          company: 'Cítate (producto privado)',
          tag: 'Actual',
          emphasis: true,
          description:
            'Desarrollador frontend principal de un marketplace privado de citas médicas, definiendo flujos de reserva, mapas, contratos OpenAPI, builds listos para Android y comportamiento de producto impulsado por notificaciones.',
          techs: 'React | TypeScript | shadcn/ui | Capacitor.js | OneSignal | OpenAPI',
        },
        {
          period: 'En curso',
          role: 'Desarrollador freelance de agentes de IA',
          company: 'Independiente',
          tag: 'Actual',
          emphasis: true,
          description:
            'Trabajo por proyecto creando agentes de WhatsApp, asistentes de cotización, flujos de venta, buffering con Redis y demos desplegadas en la nube para negocios orientados al cliente.',
          techs: 'n8n | WhatsApp Cloud API | Upstash Redis | Google ADK | Cloud Run',
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
          techs: 'React Native | Expo | TypeScript | WebSockets | Google Maps API',
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
        {
          label: 'LinkedIn',
          href: SOCIAL_LINKS.linkedin,
          subtitle: 'Abrir perfil',
        },
        { label: 'GitHub', href: SOCIAL_LINKS.github, subtitle: 'Abrir perfil' },
        { label: 'Instagram', href: SOCIAL_LINKS.instagram, subtitle: 'Abrir perfil' },
      ],
    },
  },
};

export function getHomeContent(lang: HomeLang) {
  return homeContent[lang] ?? homeContent.en;
}
