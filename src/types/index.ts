// ========== NAVIGATION ==========
export interface NavLink {
  name: string;
  href: string;
}

// ========== SERVICES ==========
export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
}

// ========== PROJECTS ==========
export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;       
  featured?: boolean;
}

// ========== CONTACT ==========
export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

// ========== ABOUT ==========
export interface FeatureItem {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
}