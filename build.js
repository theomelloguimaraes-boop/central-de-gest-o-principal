// Copia src/ para dist/ e gera config.js com as variáveis de ambiente.
const fs = require("fs"), path = require("path");
const out = path.join(__dirname, "dist");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(path.join(__dirname, "src", "index.html"), path.join(out, "index.html"));
const cfg = {
  SUPABASE_URL: process.env.SUPABASE_URL || "",
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || "",
};
fs.writeFileSync(path.join(out, "config.js"), "window.APP_CONFIG=" + JSON.stringify(cfg) + ";\n");
console.log("Build concluído em dist/ (Supabase " + (cfg.SUPABASE_URL ? "configurado" : "NÃO configurado") + ")");
