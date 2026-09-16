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
            { label: "Equipo CPAP / APAP (BMC C2S / C20)", value: "CPAP" },
            {
              label: "Glucómetro y accesorios para diabetes",
              value: "glucometro",
            },
            { label: "Oxímetro de pulso de mesa", value: "oximetro" },
          ],
          defaultValue: "CPAP",
        }),
      }),
      {
        label: "Equipos Destacados",
        itemLabel: (props) => props.fields.name.value || "Equipo",
      },
    ),
  },
});
