const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

const posts = [
  {
    title: "Ciambellone",
    content: "Ciambellone classico",
    image: `http://localhost:${PORT}/desserts/ciambellone.jpeg`,
    tags: ["dolce", "semplice", "ciambellone"],
  },
  {
    title: "Cracker",
    content: "Cracker alla barbabietola",
    image: `http://localhost:${PORT}/desserts/cracker_barbabietola.jpeg`,
    tags: ["dolce", "semplice", "barbabietola"],
  },
  {
    title: "Pane Fritto",
    content: "Pane fritto dolce",
    image: `http://localhost:${PORT}/desserts/pane_fritto_dolce.jpeg`,
    tags: ["dolce", "fritto", "nowaste"],
  },
  {
    title: "Pasta",
    content: "Pasta alla barbabietola",
    image: `http://localhost:${PORT}/desserts/pasta_barbabietola.jpeg`,
    tags: ["dolce", "pasta", "barbabietola"],
  },
  {
    title: "Torta",
    content: "Torta Paesana",
    image: `http://localhost:${PORT}/desserts/torta_paesana.jpeg`,
    tags: ["dolce", "torta", "tradizione"],
  },
];
