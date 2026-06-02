export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalURL?: URL;
  nofollow?: boolean;
  noindex?: boolean;
  json_ld?: object;
  colorTheme?: string;
  icon?: {
    url:string;
    type:string;
  }
}

export type pageType = "website" | "article" | "service"

export interface articleData {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author:{
    "@type": "Person";
    name: string;
    jobTitle?: string;
    url: string;
    sameAs?: string[]
    knowsAbout?: string[]
    worksFor?: string
  },
  publisher:{
    "@type": "Organization";
    name: string;
    url: string;
    logo: string;
    sameAs?: string[]
    contactPoint?: {
      "@type": "ContactPoint";
      telephone: string;
      email: string;
    }
    founder?: string
  },
  articleBody?: string;
  wordCount?: number;
}

export interface serviceData {
  serviceType: string;
  provider:{
    name: string;
    url: string;
  }
  areaServed?: string;
  offers?: {
    priceCurrency?: string;
    price?: string;
    availability?: "https://schema.org/InStock";
  }
  aggregateRating?: {
    ratingValue?: string;
    ratingCount?: string;
  }
  hasOfferCatalog?: {
    name?: string;
    url?: string;
  }[]
} 
export interface WebsiteData {
  siteName?: string; 
  searchUrl?: string; 
}
type SEOConfiguration = 
  | { type: "website"; schemaData?: WebsiteData }
  | { type: "article"; schemaData: articleData } 
  | { type: "service"; schemaData: serviceData } 
  | { type?: never; schemaData?: never };

  export type PropsOP = SEOProps & SEOConfiguration