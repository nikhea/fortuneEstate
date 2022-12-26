import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    "process.env": {
      REACT_APP_CLOUDINARY_CLOUD_NAME:
        process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      REACT_APP_CLOUDINARY_UPLOAD_PRESET:
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    },
  },
});
