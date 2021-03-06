// importar dependencias npm (express)
import express from "express"

//importando rutas
import routes from "./routes/index.js";

// Variables 
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// configuracion de dependencias
let app = express();

app.set("puerto", PORT);
app.set("host", HOST);

// json (req.body)   agarra la info en formato jason
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



//// config ruta base
app.use("/api", routes);

// rutas
app.get("/test", (req, res) => {
    res.send("Hola Bienvenido a mi Página con Node.js");
});
app.get("/", (req, res) => {
    res.send("Saludos Humanos-!!");
});

//levantar el servidor
app.listen(app.get("puerto"), app.get("host"), () => {
    console.log(`Servidor levantado en http://${app.get("host")}:${app.get("puerto")}`);
})