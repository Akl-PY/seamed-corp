// keystatic.config.ts
import { config, singleton } from "@keystatic/core";

// Importá tus singletons desde la carpeta src/keystatic/
import { inicioHero } from "./src/keystatic/inicioHero";
import { servicios } from "./src/keystatic/servicios";
import { inicioEquipamiento } from "./src/keystatic/inicioEquipamiento";
import { marcas } from "./src/keystatic/marcas";
import { contactoInfo } from "./src/keystatic/contactoInfo";
import { localTrust } from "./src/keystatic/localTrust";
import { cotizacion } from "./src/keystatic/cotizacion";
import { insumos } from "./src/keystatic/insumos";
import { nosotrosHero } from "./src/keystatic/nosotrosHero";
import { reviews } from "./src/keystatic/reviews";
import { navegacionFooter } from "./src/keystatic/navegacionFooter";
import { whatsappModal } from "./src/keystatic/whatsappModal";

// ... tus imports de singletons ...

export default config({
  storage: import.meta.env.PROD
    ? {
        kind: "cloud",
      }
    : {
        kind: "local",
      },

  // La propiedad 'cloud' se define al mismo nivel que 'storage' y 'ui'
  cloud: {
    project: "seamed/seamed-corp",
  },

  ui: {
    brand: {
      name: "SeAMeD S.A. - Panel",
    },
  },

  singletons: {
    inicioHero,
    inicioEquipamiento,
    marcas,
    servicios,
    insumos,
    nosotrosHero,
    reviews,
    contactoInfo,
    localTrust,
    cotizacion,
    navegacionFooter,
    whatsappModal,
  },
});
