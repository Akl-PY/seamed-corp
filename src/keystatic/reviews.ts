import { fields, singleton } from "@keystatic/core";

export const reviews = singleton({
  label: "Reseñas - Google Reviews",
  path: "src/data/reviews",
  format: "json",
  schema: {
    botonTexto: fields.text({
      label: "Texto del botón principal",
      defaultValue: "Ver opiniones de SeAMeD S.A.",
    }),
    googleReviewsUrl: fields.text({
      label: "URL de Google Maps / Reseñas",
      defaultValue:
        "https://www.google.com/maps/search/?api=1&query=SeAMeD+S.A.&query_place_id=0x9432a2a6e80f294d:0x527eaa34ded1a60f",
    }),
    titulo: fields.text({
      label: "Título principal (Texto normal)",
      defaultValue: "Conocé la experiencia real de nuestros",
    }),
    tituloAcento: fields.text({
      label: "Título resaltado (Acento)",
      defaultValue: "pacientes en Google Maps",
    }),
    descripcion: fields.text({
      label: "Bajada descriptiva",
      multiline: true,
      defaultValue:
        "La confianza de las familias y profesionales de la salud es nuestro mayor respaldo. Podés consultar todas las opiniones reales o compartir tu experiencia.",
    }),
  },
});
