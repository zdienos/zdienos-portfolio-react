import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  build: {
    // pdf.js lives in the lazily loaded Resume chunk; it is large by nature
    chunkSizeWarningLimit: 700,
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "images/icon/favicon.ico",
        "images/icon/apple-icon-180x180.png",
        "cv-en.pdf",
      ],
      manifest: {
        name: "Mardino Santosa",
        short_name: "Mardino",
        description:
          "Mardino Santosa (zdienos) is a Network and System Administrator, Full Stack Developer, Hardware Maintainer",
        start_url: "/",
        display: "standalone",
        orientation: "any",
        background_color: "#ecebe3",
        theme_color: "#e5007d",
        icons: [
          {
            src: "images/icon/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "images/icon/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "images/icon/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "images/icon/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,mjs,css,html,png,jpg,jpeg,svg,woff2}"],
        // Kill-switch for the old CRA worker; never part of the new app shell
        globIgnores: ["service-worker.js", "serviceWorker.js"],
      },
    }),
  ],
});
