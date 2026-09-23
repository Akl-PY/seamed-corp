import type { APIRoute } from "astro";
import { z } from "zod";

import { supabase } from "../../lib/supabase";
import { resend } from "../../lib/resend";
import { uploadToCloudinary } from "../../lib/uploadToCloudinary";

export const prerender = false;

const MAX_FILE_SIZE = 25 * 1024 * 1024;

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "document/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.oasis.opendocument.text",
  "application/vnd.oasis.opendocument.text-template",
  "application/vnd.oasis.opendocument.text-master",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

const emptyToUndefined = (value: FormDataEntryValue | null) => {
  if (value === null) return undefined;

  if (typeof value === "string" && value.trim() === "") {
    return undefined;
  }

  return value;
};

const schema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre es demasiado corto")
    .max(100)
    .optional(),

  obra_social: z.string().trim().optional(),

  num_afiliado: z.string().trim().optional(),

  email: z.email("El email no es válido").optional(),

  telefono: z.string().trim().max(50).optional(),

  mensaje: z
    .string()
    .trim()
    .min(5, "El mensaje es demasiado corto")
    .max(5000)
    .optional(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const rawData = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      obra_social: formData.get("obra_social"),
      num_afiliado: formData.get("num_afiliado"),
      telefono: formData.get("telefono"),
      mensaje: formData.get("mensaje"),
    };

    console.log("RAW FORM DATA:", rawData);

    const parsed = schema.safeParse({
      nombre: emptyToUndefined(rawData.nombre),
      email: emptyToUndefined(rawData.email),
      obra_social: emptyToUndefined(rawData.obra_social),
      num_afiliado: emptyToUndefined(rawData.num_afiliado),
      telefono: emptyToUndefined(rawData.telefono),
      mensaje: emptyToUndefined(rawData.mensaje),
    });

    console.log("NORMALIZED DATA:", {
      nombre: emptyToUndefined(rawData.nombre),
      email: emptyToUndefined(rawData.email),
      obra_social: emptyToUndefined(rawData.obra_social),
      num_afiliado: emptyToUndefined(rawData.num_afiliado),
      telefono: emptyToUndefined(rawData.telefono),
      mensaje: emptyToUndefined(rawData.mensaje),
    });

    if (!parsed.success) {
      console.error(parsed.error);
      return Response.json(
        {
          success: false,
          message: "Los datos enviados no son válidos.",
          errors: parsed.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const { nombre, email, telefono, mensaje, obra_social, num_afiliado } =
      parsed.data;

    const fileValue = formData.get("archivo");

    let file: File | null = null;

    if (fileValue instanceof File && fileValue.size > 0) {
      file = fileValue;
    }

    /*
     * Validar archivo
     */

    if (!file) {
      return Response.json(
        {
          success: false,
          message: "Tenés que adjuntar un archivo.",
        },
        {
          status: 400,
        },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        {
          success: false,
          message: "El archivo no puede superar los 25 MB.",
        },
        {
          status: 400,
        },
      );
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return Response.json(
        {
          success: false,
          message: "El archivo debe ser PDF, DOC, DOCX, ODT, JPG, PNG o WEBP.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * Subir a Cloudinary
     */

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploaded = await uploadToCloudinary(buffer);

    /*
     * Guardar solicitud en Supabase
     */

    const { data: submission, error: submissionError } = await supabase
      .from("leads")
      .insert({
        nombre,
        email,
        telefono: telefono || null,
        obra_social,
        num_afiliado,
        mensaje,
      })
      .select("id")
      .single();

    if (submissionError || !submission) {
      console.error("Supabase submission error:", submissionError);

      return Response.json(
        {
          success: false,
          message: "No se pudo guardar la solicitud.",
        },
        {
          status: 500,
        },
      );
    }

    /*
     * Guardar archivo
     */

    const { error: attachmentError } = await supabase
      .from("lead_attachments")
      .insert({
        lead_id: submission.id,
        original_name: file.name,
        cloudinary_url: uploaded.secure_url,
        cloudinary_public_id: uploaded.public_id,
        mime_type: file.type,
        size_bytes: file.size,
      });

    if (attachmentError) {
      console.error("Supabase attachment error:", attachmentError);

      return Response.json(
        {
          success: false,
          message: "No se pudo guardar el archivo.",
        },
        {
          status: 500,
        },
      );
    }

    /*
     * Enviar email
     */

    const mailTo = import.meta.env.MAIL_TO;
    const mailFrom = import.meta.env.MAIL_FROM;

    if (!mailTo || !mailFrom) {
      throw new Error("MAIL_TO o MAIL_FROM no están configurados");
    }

    const emailHtml = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Nueva solicitud de cotización</title>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f3f6f8;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2937;
    "
  >
    <div
      style="
        width: 100%;
        padding: 40px 16px;
        box-sizing: border-box;
      "
    >
      <div
        style="
          max-width: 680px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
        "
      >

        <!-- HEADER -->
        <div
          style="
            background: #00a9ce;
            padding: 28px 32px;
          "
        >
          <div
            style="
              font-size: 13px;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              color: rgba(255, 255, 255, 0.85);
              margin-bottom: 8px;
            "
          >
            SeAMeD S.A.
          </div>

          <div
            style="
              font-size: 26px;
              line-height: 1.25;
              font-weight: 700;
              color: #ffffff;
            "
          >
            Nueva solicitud de cotización
          </div>

          <div
            style="
              margin-top: 8px;
              font-size: 14px;
              line-height: 1.5;
              color: rgba(255, 255, 255, 0.9);
            "
          >
            Se recibió una nueva consulta desde el sitio web.
          </div>
        </div>

        <!-- CONTENT -->
        <div style="padding: 32px;">

          <!-- DATOS -->
          <div
            style="
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #00a9ce;
              margin-bottom: 14px;
            "
          >
            Datos del solicitante
          </div>

          <div
            style="
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              overflow: hidden;
              margin-bottom: 28px;
            "
          >

            ${
              nombre
                ? `
                  <div
                    style="
                      padding: 14px 18px;
                      border-bottom: 1px solid #edf0f2;
                    "
                  >
                    <div
                      style="
                        font-size: 12px;
                        color: #6b7280;
                        margin-bottom: 3px;
                      "
                    >
                      Nombre
                    </div>

                    <div
                      style="
                        font-size: 15px;
                        font-weight: 600;
                        color: #111827;
                      "
                    >
                      ${nombre}
                    </div>
                  </div>
                `
                : ""
            }

            ${
              email
                ? `
                  <div
                    style="
                      padding: 14px 18px;
                      border-bottom: 1px solid #edf0f2;
                    "
                  >
                    <div
                      style="
                        font-size: 12px;
                        color: #6b7280;
                        margin-bottom: 3px;
                      "
                    >
                      Email
                    </div>

                    <div
                      style="
                        font-size: 15px;
                        font-weight: 600;
                        color: #111827;
                      "
                    >
                      <a
                        href="mailto:${email}"
                        style="
                          color: #00a9ce;
                          text-decoration: none;
                        "
                      >
                        ${email}
                      </a>
                    </div>
                  </div>
                `
                : ""
            }

            ${
              telefono
                ? `
                  <div
                    style="
                      padding: 14px 18px;
                      border-bottom: 1px solid #edf0f2;
                    "
                  >
                    <div
                      style="
                        font-size: 12px;
                        color: #6b7280;
                        margin-bottom: 3px;
                      "
                    >
                      Teléfono
                    </div>

                    <div
                      style="
                        font-size: 15px;
                        font-weight: 600;
                        color: #111827;
                      "
                    >
                      ${telefono}
                    </div>
                  </div>
                `
                : ""
            }

            ${
              obra_social
                ? `
                  <div
                    style="
                      padding: 14px 18px;
                      border-bottom: 1px solid #edf0f2;
                    "
                  >
                    <div
                      style="
                        font-size: 12px;
                        color: #6b7280;
                        margin-bottom: 3px;
                      "
                    >
                      Obra social
                    </div>

                    <div
                      style="
                        font-size: 15px;
                        font-weight: 600;
                        color: #111827;
                      "
                    >
                      ${obra_social}
                    </div>
                  </div>
                `
                : ""
            }

            ${
              num_afiliado
                ? `
                  <div
                    style="
                      padding: 14px 18px;
                    "
                  >
                    <div
                      style="
                        font-size: 12px;
                        color: #6b7280;
                        margin-bottom: 3px;
                      "
                    >
                      Número de afiliado
                    </div>

                    <div
                      style="
                        font-size: 15px;
                        font-weight: 600;
                        color: #111827;
                      "
                    >
                      ${num_afiliado}
                    </div>
                  </div>
                `
                : ""
            }

          </div>

          <!-- MENSAJE -->
          ${
            mensaje
              ? `
                <div
                  style="
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #00a9ce;
                    margin-bottom: 14px;
                  "
                >
                  Mensaje
                </div>

                <div
                  style="
                    background: #f8fafb;
                    border-left: 4px solid #00a9ce;
                    border-radius: 8px;
                    padding: 18px 20px;
                    margin-bottom: 28px;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #374151;
                  "
                >
                  ${mensaje.replace(/\n/g, "<br />")}
                </div>
              `
              : ""
          }

          <!-- ARCHIVO -->
          <div
            style="
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #00a9ce;
              margin-bottom: 14px;
            "
          >
            Archivo adjunto
          </div>

          <a
            href="${uploaded.secure_url}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              display: block;
              text-decoration: none;
              border: 1px solid #dbe3e7;
              border-radius: 12px;
              padding: 16px 18px;
              background: #ffffff;
            "
          >
            <div
              style="
                font-size: 15px;
                font-weight: 600;
                color: #111827;
              "
            >
              ${file.name}
            </div>

            <div
              style="
                margin-top: 5px;
                font-size: 13px;
                color: #00a9ce;
              "
            >
              Ver archivo →
            </div>
          </a>

        </div>

        <!-- FOOTER -->
        <div
          style="
            background: #f8fafb;
            border-top: 1px solid #e5e7eb;
            padding: 20px 32px;
          "
        >
          <div
            style="
              font-size: 12px;
              color: #6b7280;
              line-height: 1.6;
            "
          >
            Solicitud recibida desde
            <strong style="color: #374151;">
              seamed.com.ar
            </strong>
          </div>

          <div
            style="
              margin-top: 5px;
              font-size: 11px;
              color: #9ca3af;
            "
          >
            ID de solicitud: ${submission.id}
          </div>
        </div>

      </div>
    </div>
  </body>
</html>
`;

    const emailPayload: Parameters<typeof resend.emails.send>[0] = {
      from: mailFrom,
      to: mailTo,
      subject: `Nueva cotización${nombre ? ` - ${nombre}` : ""}`,
      html: emailHtml,
    };

    if (email) {
      emailPayload.replyTo = email;
    }

    const { error: emailError } = await resend.emails.send(emailPayload);

    if (emailError) {
      console.error("Resend error:", emailError);

      return Response.json(
        {
          success: false,
          message: "La solicitud se guardó, pero no se pudo enviar el email.",
        },
        {
          status: 500,
        },
      );
    }

    /*
     * Marcar email como enviado
     */

    await supabase
      .from("leads")
      .update({
        email_sent: true,
      })
      .eq("id", submission.id);

    return Response.json({
      success: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    console.error("Cotización error:", error);

    return Response.json(
      {
        success: false,
        message: "Ocurrió un error inesperado.",
      },
      {
        status: 500,
      },
    );
  }
};
