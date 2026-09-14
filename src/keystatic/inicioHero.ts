import { fields, singleton } from "@keystatic/core";

export const inicioHero = singleton({
  label: "Inicio - Hero Principal",
  path: "src/data/inicio/hero",
  format: "json",
  schema: {
    slides: fields.array(
      fields.object({
        title: fields.text({ label: "Título del Slide" }),
        description: fields.text({ label: "Descripción", multiline: true }),
        imageKey: fields.select({
          label: "Imagen del slide(avisar si se necesita agregar más imágenes)",
          options: [
            { label: "Medica y Paciente", value: "med_paciente" },
            { label: "Medico", value: "medico" },
          ],
          defaultValue: "med_paciente",
        }),
        alt: fields.text({ label: "Texto alternativo SEO" }),
        buttonText: fields.text({ label: "Texto del Botón (opcional)" }),
        buttonHref: fields.text({ label: "Enlace del Botón (ej: /cotizar)" }),
        isCertificationsSlide: fields.checkbox({
          label:
            "¿Es el slide de Habilitaciones / Reseñas? (lo de abajo no modificarlo sino)",
          defaultValue: false,
        }),

        counterValue: fields.integer({
          label: "Valor del contador (ej: 100)",
          defaultValue: 100,
        }),
        counterSuffix: fields.text({
          label: "Sufijo del contador",
          defaultValue: "%",
        }),
        counterLabel: fields.text({
          label: "Etiqueta del contador",
          defaultValue: "Habilitaciones Oficiales",
        }),
        reviewButtonText: fields.text({
          label: "Texto Botón Reseñas",
          defaultValue: "Nuestras Reseñas",
        }),
        reviewButtonHref: fields.text({
          label: "Link a Google Maps",
          defaultValue: "https://maps.google.com/?q=SeAMeD+SA",
        }),
      }),
      {
        label: "Slides del Carrusel",
        itemLabel: (props) => props.fields.title.value || "Slide",
      },
    ),
  },
});
