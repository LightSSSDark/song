import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.REACT_APP_EMAILJS_SERVICEID": JSON.stringify(
        process.env.REACT_APP_EMAILJS_SERVICEID
      ),
      "process.env.REACT_APP_EMAILJS_TEMPLATEID": JSON.stringify(
        process.env.REACT_APP_EMAILJS_TEMPLATEID
      ),
      "process.env.REACT_APP_EMAILJS_ACCESSKEY": JSON.stringify(
        process.env.REACT_APP_EMAILJS_ACCESSKEY
      ),
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      plugins: [
        replace({
          preventAssignment: true,
        }),
      ],
    },
  },
});
