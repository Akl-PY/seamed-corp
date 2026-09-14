import { fields, singleton } from "@keystatic/core";

export const inicioEquipamiento = singleton({
  label: "Inicio - Productos Destacados",
  path: "src/data/inicio/equipamiento",
  format: "json",
  schema: {
    tituloSeccion: fields.text({
      label: "Título de la Sección",
      defaultValue: "Productos destacados",
    }),
    equipos: fields.array(
      fields.object({
        id: fields.text({ label: "ID identificador (opcional)" }),
        name: fields.text({ label: "Nombre del equipo" }),
        category: fields.text({ label: "Categoría o Área clínica" }),
        description: fields.text({
          label: "Descripción breve",
          multiline: true,
        }),
        imageKey: fields.select({
          label:
            "Imagen del equipo(avisar si se necesita agregar más imágenes en equipamiento)",
          options: [
            { label: "Ventilador Mecánico", value: "ventMecanico" },
            { label: "Concentrador de Oxígeno", value: "concentrador" },
            { label: "Bomba de Infusión", value: "bomba" },
          ],
          defaultValue: "ventMecanico",
        }),
      }),
      {
        label: "Equipos Destacados",
        itemLabel: (props) => props.fields.name.value || "Equipo",
      },
    ),
  },
});
