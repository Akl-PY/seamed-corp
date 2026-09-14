import { fields, singleton } from "@keystatic/core";

export const insumos = singleton({
  label: "Insumos Médicos - Página Completa",
  path: "src/data/insumos",
  format: "json",
  schema: {
    // --- SECCIÓN HERO ---
    heroTitulo: fields.text({
      label: "Hero: Título (Texto normal)",
      defaultValue: "Insumos de alta calidad",
    }),
    heroTituloAcento: fields.text({
      label: "Hero: Título resaltado (Acento)",
      defaultValue: "para cada necesidad",
    }),
    heroBajada: fields.text({
      label: "Hero: Bajada descriptiva",
      multiline: true,
      defaultValue:
        "Garantizamos el abastecimiento continuo de descartables y material médico de primer nivel para instituciones de salud como para pacientes domiciliarios. Brindando siempre seguridad, trazabilidad y marcas certificadas.",
    }),
    heroBadge: fields.text({
      label: "Hero: Etiqueta sobre la foto",
      defaultValue: "Atención Domiciliaria e Institucional",
    }),
    heroSubtextoFoto: fields.text({
      label: "Hero: Texto al pie de la foto",
      defaultValue:
        "Soluciones integrales para pacientes, clínicas y obras sociales.",
    }),

    // --- SECCIÓN CATÁLOGO / RUBROS ---
    catalogoTitulo: fields.text({
      label: "Catálogo: Título principal",
      defaultValue: "Nuestros principales productos",
    }),
    rubros: fields.array(
      fields.object({
        id: fields.text({
          label: "ID del rubro (ej: diabetes, enteral, vascular)",
        }),
        title: fields.text({ label: "Nombre del rubro" }),
        badge: fields.text({ label: "Badge / Etiqueta" }),
        description: fields.text({
          label: "Descripción del rubro",
          multiline: true,
        }),
        items: fields.array(
          fields.object({
            name: fields.text({ label: "Nombre del insumo" }),
            detail: fields.text({ label: "Detalle técnico (opcional)" }),
          }),
          {
            label: "Insumos del rubro",
            itemLabel: (props) => props.fields.name.value || "Insumo",
          },
        ),
      }),
      {
        label: "Listado de Rubros",
        itemLabel: (props) => props.fields.title.value || "Rubro",
      },
    ),
  },
});
