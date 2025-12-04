import runApp from "./app.js";

export async function apiOnlySetup(app, _server) {
  console.log("API-only mode: Backend serving API requests only");
  console.log("Frontend should be deployed separately (Vercel/Netlify)");
}

(async () => {
  await runApp(apiOnlySetup);
})();
