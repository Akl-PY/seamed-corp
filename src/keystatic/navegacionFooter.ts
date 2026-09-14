import { fields, singleton } from "@keystatic/core";

export const navegacionFooter = singleton({
  label: "Global - Header y Footer",
  path: "src/data/global/navegacion",
  format: "json",
  schema: {
    // --- NAVEGACIÓN PRINCIPAL (HEADER) ---
    enlacesNav: fields.array(
      fields.object({
        name: fields.text({ label: "Texto del enlace" }),
        href: fields.text({ label: "Ruta / URL (ej: /servicios, /contacto)" }),
        esBoton: fields.checkbox({
          label: "¿Es botón destacado? (ej: Cotizar)",
          defaultValue: false,
        }),
      }),
      {
        label: "Menú de navegación principal",
        itemLabel: (props) => props.fields.name.value || "Enlace",
      },
    ),

    // --- DATOS INSTITUCIONALES DEL FOOTER ---
    footerDireccion: fields.text({
      label: "Dirección física",
      defaultValue: "Deán Funes 2870, Córdoba, Argentina",
    }),
    footerTelefono: fields.text({
      label: "Teléfono de contacto",
      defaultValue: "+54 9 351 898-0811",
    }),
    footerCtaTexto: fields.text({
      label: "Texto informativo sobre presupuesto",
      defaultValue:
        "Solicitá un presupuesto formal para obra social o reintegro.",
    }),
    footerCtaBoton: fields.text({
      label: "Texto del botón de cotización en Footer",
      defaultValue: "Solicitar Cotización",
    }),

    // --- COLUMNAS DINÁMICAS DEL FOOTER ---
    footerColumnas: fields.array(
      fields.object({
        tituloColumna: fields.text({ label: "Título de la columna" }),
        enlaces: fields.array(
          fields.object({
            label: fields.text({ label: "Texto del enlace" }),
            href: fields.text({ label: "Ruta o URL" }),
          }),
          {
            label: "Enlaces de la columna",
            itemLabel: (props) => props.fields.label.value || "Link",
          },
        ),
      }),
      {
        label: "Columnas de navegación del Footer",
        itemLabel: (props) => props.fields.tituloColumna.value || "Columna",
      },
    ),
  },
});
