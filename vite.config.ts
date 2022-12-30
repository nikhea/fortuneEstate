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
      VITE_REACT_APP_BACKEND_DEVELOPMENT:
        process.env.VITE_REACT_APP_BACKEND_DEVELOPMENT,
      VITE_REACT_APP_BACKEND_PRODUCTION:
        process.env.VITE_REACT_APP_BACKEND_PRODUCTION,
      REACT_APP_CLOUDINARY_CLOUD_NAME:
        process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      REACT_APP_CLOUDINARY_UPLOAD_PRESET:
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    },
  },
});
