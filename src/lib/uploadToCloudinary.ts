import cloudinary from "./cloudinary";

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  resource_type: string;
}

export function uploadToCloudinary(
  buffer: Buffer,
): Promise<CloudinaryUploadResult> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "seamed-corp/cotizaciones",
        resource_type: "auto",
        use_filename: true,
        unique_filename: true,
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        if (!result) {
          reject(new Error("Cloudinary no devolvió ningún resultado"));

          return;
        }

        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
          resource_type: result.resource_type,
        });
      },
    );

    stream.end(buffer);
  });
}
