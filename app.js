const express = require("express");
const app = express();

//settings
const puerto = 3000;
//app.set('sport',3000);

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); //carpeta views

//static files
app.use(express.static(__dirname + "/public")); // carpeta public

//routes
app.get("/", (req, res) => {
  res.render("index", { title: "Info CSS" });
});

app.get("/position", (req, res) => {
  res.render("position", { title: "CSS Position" });
});

app.get("/pseudoclases", (req, res) => {
  res.render("pseudoclases", { title: "CSS pseudoclases" });
});

app.get("/pseudoelmentos", (req, res) => {
  res.render("pseudoelmentos", { title: "CSS pseudoelmentos" });
});

app.get("/styles", (req, res) => {
  res.render("styles", { title: "CSS styles" });
});

app.get("/tipografia", (req, res) => {
  res.render("tipografia", { title: "CSS tipografia" });
});

app.get("/variables_background", (req, res) => {
  res.render("variables_background", { title: "CSS variables_background" });
});

// middleware
app.listen(puerto, () => {
  console.log("ok", puerto);
});
console.log("envio terminl");
