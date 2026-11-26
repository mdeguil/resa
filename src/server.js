require("dotenv").config();

const variablesRequises = ["PGHOST", "PGUSER", "PGPASSWORD", "PGDATABASE"];
const manquantes = variablesRequises.filter((nom) => !process.env[nom]);

if (manquantes.length > 0) {
  console.error(`Impossible de démarrer : variable(s) manquante(s) dans .env : ${manquantes.join(", ")}`);
  process.exit(1);
}

const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Résa démarré sur http://localhost:${port}`);
});