import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "./cloudinaryConfig.js";

// ✅ Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const allowedFormats = ["jpeg", "png"];
    const fileFormat = file.mimetype.split("/")[1]; // Get file extension from mimetype

    // Validate format
    if (!allowedFormats.includes(fileFormat)) {
      throw new Error("Invalid file format. Only JPEG and PNG are allowed.");
    }

    return {
      folder: "uploads",
      format: fileFormat, // Keep original format (jpeg or png)
      public_id: file.originalname.split(".")[0], // Use filename as public_id
    };
  },
});

// ✅ Create Multer instance
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// ✅ Export correctly
export { upload };
