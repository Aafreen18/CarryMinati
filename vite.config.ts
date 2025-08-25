import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const port = Number(process.env.PORT) || 8080; // ✅ force to number

  return {
    server: {
      host: "0.0.0.0",
      port,
      allowedHosts: ["carryminati-dw47.onrender.com"],
    },
    preview: {
      host: "0.0.0.0",
      port,
      allowedHosts: ["carryminati-dw47.onrender.com"],
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
