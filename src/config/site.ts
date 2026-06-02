import type { SEOProps } from "../core/types/seo";


interface SiteConfig extends SEOProps {
    name: string;
    tagline: string;
    description: string;
    url: string;
    domain: string;
    author: string;
    themeColor: string;
    ogImage: string;
    icon: {
        url: string;
        type: string;
    }
    social: {
        whatsapp: string;
        instagram: string;
        linkedin: string;
        facebook: string;
        tiktok: string;
        googleMaps?: string; // Agregado para el enlace de Google Maps en LocalTrust
    };
    organization:{
        "@type":("Organization" | "LocalBusiness" | "Corporation" | string),
        name: string;
        url: string;
        logo: string;
        address?:{
            "@type": "PostalAddress";
            streetAddress: string;
            addressLocality: string;
            addressRegion: string;
            postalCode: string;
            addressCountry: string;
        }
        contactPoint?:{
            "@type": "ContactPoint";
            telephone: string;
            contactType: string;
        }
    }
}

export const SITE_CONFIG: SiteConfig = {    
    name: "Seamed S.A.",
    tagline: "Innovación y Excelencia Médica",
    description: "Especialistas en soluciones integrales de salud y equipamiento médico de alta complejidad. Garantizamos máxima seguridad, tecnología avanzada y estándares internacionales.",
    url: "https://seamed.com.ar",
    domain: "seamed.com.ar",
    author: "Seamed S.A.",
    themeColor: "#0055A5", // Azul clínico/corporativo premium de alta confianza
    ogImage: "seamed-og.jpeg",
    icon: {
        url: "/favicon.svg",
        type: "image/svg+xml"
    },
    social: {
        whatsapp: "https://wa.me/5491100000000", // Reemplazar con el número real del cliente
        instagram: "https://instagram.com/seamed.sa",
        linkedin: "https://linkedin.com/company/seamed-sa",
        facebook: "https://facebook.com/seamed.sa",
        tiktok: "https://tiktok.com/@seamed.sa",
        googleMaps: "https://www.google.com.ar/maps/place/SeAMeD+S.A./@-31.4042608,-64.2222637,16.75z/data=!4m6!3m5!1s0x9432a2a6e80f294d:0x527eaa34ded1a60f!8m2!3d-31.4047486!4d-64.2199862!16s%2Fg%2F11b8t7zd2z?entry=ttu" 
    },
    organization: {
        // NOTA DE SEO TÉCNICO: Si el cliente tiene local físico de atención, podés cambiar "Organization" por "MedicalBusiness" para potenciar el SEO Local.
        "@type": "Organization", 
        name: "Seamed S.A.",
        url: "https://seamed.com.ar",
        logo: "/logo.svg",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Dean Funes 2870", 
            addressLocality: "Córdoba",
            addressRegion: "Córdoba",
            postalCode: "X5817",
            addressCountry: "AR"
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "5493518980811",
            contactType: "customer service"
        }
    },
    // Propiedades extra declaradas al final de tu objeto original
    colorTheme: "#0055A5",
    title: "Seamed S.A. | Innovación y Excelencia Médica",
    image: "seamed-og.jpeg"
}