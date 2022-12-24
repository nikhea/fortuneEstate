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
      REACT_APP_CLOUDINARY_CLOUD_NAME: "dwtx0sgd6",
      REACT_APP_CLOUDINARY_UPLOAD_PRESET: "i4szcw1n",
    },
  },
});
