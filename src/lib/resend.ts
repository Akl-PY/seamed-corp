import { Resend } from "resend";

const apiKey = import.meta.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY no está configurada");
}

export const resend = new Resend(apiKey);
