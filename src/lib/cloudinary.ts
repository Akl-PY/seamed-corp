import { v2 as cloudinary } from "cloudinary";

const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME;
const apiKey = import.meta.env.CLOUDINARY_API_KEY;
const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;

if (!cloudName) {
  throw new Error("CLOUDINARY_CLOUD_NAME no está configurada");
}

if (!apiKey) {
  throw new Error("CLOUDINARY_API_KEY no está configurada");
}

if (!apiSecret) {
  throw new Error("CLOUDINARY_API_SECRET no está configurada");
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export default cloudinary;
