export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  image: string;
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack" | "other";
  date: string;
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Platformă completă de comerț electronic cu React, Node.js și Stripe.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>O platformă de e-commerce completă dezvoltată de la zero, cu funcționalități avansate pentru gestionarea produselor, coș de cumpărături și procesare plăți.</p>
      
      <h2>Funcționalități Cheie</h2>
      <ul>
        <li>Catalog produse cu filtrare și căutare avansată</li>
        <li>Coș de cumpărături persistent</li>
        <li>Checkout securizat cu Stripe</li>
        <li>Dashboard admin pentru gestionarea comenzilor</li>
        <li>Sistem de review-uri și rating</li>
        <li>Notificări email automate</li>
      </ul>
      
      <h2>Provocări Tehnice</h2>
      <p>Cea mai mare provocare a fost implementarea unui sistem de inventar în timp real care să sincronizeze corect stocurile între utilizatori multipli.</p>
    `,
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    category: "fullstack",
    date: "2024-01-01"
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    shortDescription: "Aplicație de management al sarcinilor cu funcționalități în timp real și colaborare.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>O aplicație modernă de task management inspirată de Trello și Notion, construită pentru echipe care au nevoie de colaborare în timp real.</p>
      
      <h2>Funcționalități Cheie</h2>
      <ul>
        <li>Board-uri Kanban cu drag & drop</li>
        <li>Sincronizare în timp real cu WebSockets</li>
        <li>Sistem de permisiuni pentru echipe</li>
        <li>Notificări push în browser</li>
        <li>Integrare cu Slack și Discord</li>
        <li>Export rapoarte în PDF</li>
      </ul>
      
      <h2>Arhitectură</h2>
      <p>Aplicația folosește o arhitectură microservicii cu Event Sourcing pentru a asigura consistența datelor în timp real.</p>
    `,
    tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS", "Redis", "AWS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    category: "web",
    date: "2023-11-15"
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    shortDescription: "Dashboard interactiv pentru analiza datelor cu grafice complexe și rapoarte.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>Un dashboard de analytics enterprise-grade care permite vizualizarea și analiza datelor în timp real din multiple surse.</p>
      
      <h2>Funcționalități Cheie</h2>
      <ul>
        <li>Grafice interactive cu D3.js</li>
        <li>Widget-uri customizabile</li>
        <li>Export în CSV, PDF și Excel</li>
        <li>Alerte automate pe threshold-uri</li>
        <li>API REST pentru integrări</li>
      </ul>
    `,
    tech: ["React", "D3.js", "Express", "PostgreSQL", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    githubUrl: "https://github.com",
    featured: true,
    category: "fullstack",
    date: "2023-10-01"
  },
  {
    slug: "social-media-platform",
    title: "Social Media Platform",
    shortDescription: "Platformă socială cu feed în timp real, chat, stories și notificări.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>O platformă socială modernă cu toate funcționalitățile standard plus features inovatoare.</p>
      
      <h2>Funcționalități Cheie</h2>
      <ul>
        <li>Feed în timp real</li>
        <li>Stories cu expirare</li>
        <li>Chat privat și de grup</li>
        <li>Sistem de follow/unfollow</li>
        <li>Notificări push</li>
      </ul>
    `,
    tech: ["Vue.js", "Firebase", "Node.js", "WebSockets", "Redis"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    category: "fullstack",
    date: "2023-08-15"
  },
  {
    slug: "weather-mobile-app",
    title: "Weather Mobile App",
    shortDescription: "Aplicație meteo cross-platform cu predicții detaliate și alerte.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>O aplicație mobilă elegantă pentru prognoza meteo, cu animații fluide și date precise.</p>
      
      <h2>Funcționalități Cheie</h2>
      <ul>
        <li>Prognoza pe 7 zile</li>
        <li>Alerte meteo severe</li>
        <li>Widget-uri pentru home screen</li>
        <li>Hărți interactive cu radar</li>
      </ul>
    `,
    tech: ["React Native", "TypeScript", "OpenWeather API", "Redux"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80"
    ],
    githubUrl: "https://github.com",
    featured: false,
    category: "mobile",
    date: "2023-06-01"
  },
  {
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    shortDescription: "Tool pentru generarea automată de portofolii profesionale.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>Un generator de portofolii care permite dezvoltatorilor să-și creeze rapid site-uri profesionale.</p>
      
      <h2>Funcționalități Cheie</h2>
      <ul>
        <li>Template-uri multiple</li>
        <li>Import automat din GitHub</li>
        <li>Customizare completă</li>
        <li>Deploy automat</li>
      </ul>
    `,
    tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel", "GitHub API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    category: "web",
    date: "2023-04-01"
  }
];
