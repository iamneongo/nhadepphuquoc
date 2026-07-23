export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceItem {
  index: string;
  titleItalic: string;
  titleRest: string;
  description: string;
  href: string;
}

export interface ProductCategory {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface NewsCard {
  category: string;
  title: string;
  image: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  image: string;
}

export interface ServiceField {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
