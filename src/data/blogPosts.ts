export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-practices-react-2024",
    title: "Best Practices în React pentru 2024",
    excerpt: "Descoperă cele mai importante tehnici și pattern-uri pentru dezvoltarea aplicațiilor React moderne și performante.",
    content: `
      <h2>Introducere</h2>
      <p>React continuă să evolueze, iar în 2024 avem la dispoziție o mulțime de instrumente și best practices care ne ajută să construim aplicații mai performante și mai ușor de întreținut.</p>
      
      <h2>1. Folosește Server Components</h2>
      <p>Server Components reprezintă viitorul React. Permit renderizarea pe server și reduc dimensiunea bundle-ului JavaScript.</p>
      
      <h2>2. Optimizează Performance-ul</h2>
      <p>Folosește React.memo, useMemo și useCallback doar când este necesar. Măsoară performance-ul înainte de a optimiza.</p>
      
      <h2>3. TypeScript pentru Type Safety</h2>
      <p>TypeScript devine standard în dezvoltarea React. Ajută la prevenirea bug-urilor și îmbunătățește developer experience.</p>
      
      <h2>Concluzie</h2>
      <p>Aceste best practices te vor ajuta să construiești aplicații React mai bune în 2024.</p>
    `,
    date: "2024-01-15",
    readTime: "5 min citire",
    tags: ["React", "JavaScript", "TypeScript", "Best Practices"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "ghid-complet-typescript",
    title: "Ghid Complet TypeScript pentru Începători",
    excerpt: "Tot ce trebuie să știi despre TypeScript: de la tipuri de bază până la generics și utility types.",
    content: `
      <h2>Ce este TypeScript?</h2>
      <p>TypeScript este un superset de JavaScript care adaugă tipare statice opționale limbajului.</p>
      
      <h2>Tipuri de Bază</h2>
      <p>TypeScript oferă tipuri precum string, number, boolean, array, tuple și multe altele.</p>
      
      <h2>Interfaces și Types</h2>
      <p>Interfaces și type aliases permit definirea structurilor de date complexe.</p>
      
      <h2>Generics</h2>
      <p>Generics oferă flexibilitate și type safety pentru cod reutilizabil.</p>
    `,
    date: "2024-01-10",
    readTime: "8 min citire",
    tags: ["TypeScript", "Tutorial", "Programming"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "tailwind-css-tips-tricks",
    title: "10 Tips & Tricks pentru Tailwind CSS",
    excerpt: "Trucuri și tehnici avansate pentru a maximiza productivitatea cu Tailwind CSS în proiectele tale.",
    content: `
      <h2>De ce Tailwind CSS?</h2>
      <p>Tailwind CSS revolutionează modul în care scriem CSS, oferind un sistem utility-first.</p>
      
      <h2>1. Custom Design System</h2>
      <p>Configurează tailwind.config.js pentru a crea un design system consistent.</p>
      
      <h2>2. Componente Reutilizabile</h2>
      <p>Folosește @apply pentru a crea clase custom pentru componente reutilizabile.</p>
      
      <h2>3. Dark Mode</h2>
      <p>Implementează dark mode ușor cu clasa 'dark:' din Tailwind.</p>
    `,
    date: "2024-01-05",
    readTime: "6 min citire",
    tags: ["CSS", "Tailwind", "Design", "Frontend"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  }
];
