import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.SUPABASE_URL;
const secretKey = import.meta.env.SUPABASE_SECRET_KEY;

if (!url) {
  throw new Error("SUPABASE_URL no está configurada");
}

if (!secretKey) {
  throw new Error("SUPABASE_SECRET_KEY no está configurada");
}

export const supabase = createClient(url, secretKey);
