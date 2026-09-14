import { fields, singleton } from "@keystatic/core";

export const localTrust = singleton({
  label: "Contacto - Sede y Mapa",
  path: "src/data/contacto/ubicacion",
  format: "json",
  schema: {
    titulo: fields.text({
      label: "Título de ubicación",
      defaultValue: "Estamos en Deán Funes 2870",
    }),
    descripcion: fields.text({
      label: "Descripción de la sede",
      multiline: true,
      defaultValue:
        "Atención personalizada en nuestras oficinas en Córdoba. Coordiná tu visita, revisá nuestras opiniones o solicitá asistencia inmediata.",
    }),
    direccion: fields.text({
      label: "Dirección completa",
      defaultValue: "Deán Funes 2870, Córdoba.",
    }),
    ratingPuntaje: fields.text({
      label: "Puntaje de reseñas (ej: 4.9 / 5.0)",
      defaultValue: "4.9 / 5.0",
    }),
    ratingEtiqueta: fields.text({
      label: "Subtexto del rating",
      defaultValue: "(Basado en opiniones reales de pacientes)",
    }),
    googleMapsUrl: fields.text({
      label: "Link a Google Maps (botón)",
      defaultValue: "https://maps.google.com/?q=SeAMeD+SA",
    }),
    embedMapUrl: fields.text({
      label: "URL del iframe de Google Maps Embed",
      defaultValue:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6810.716027764946!2d-64.2222637!3d-31.4042608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a6e80f294d%3A0x527eaa34ded1a60f!2sSeAMeD%20S.A.!5e0!3m2!1ses-419!2sar!4v1780420464893!5m2!1ses-419!2sar",
    }),
  },
});
