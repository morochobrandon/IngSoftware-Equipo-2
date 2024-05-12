const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const path = require('path');
const fileURLToPath = require("url");
//const __dirname = path.dirname(fileURLToPath(import.meta.url));
//import { methods as authentication } from "./controllers/authorization.controllers";
const authorizationControllers = require("./controllers/authorization.controllers");
const { usuarios } = require("./controllers/authorization.controllers");
const authentication = authorizationControllers.methods;

dotenv.config();
const app = express();



const port = process.env.PORT || 3000;

const routerApi = require('./routes');




//Server
app.listen(port,()=>{
    console.log("Port ==>", port)
});

//Configuración
app.use(express.static(__dirname + "/app/public"));
app.use(cors());
app.use(express.json());
//Rutas

app.get("/a", (req, res) => {
  res.send("Backend con NodeJs - bla bla bla");
});

app.get("/manager", (req, res) => res.sendFile(__dirname + "/app/pages/manager/prestamoCliente.html"));
app.get("/manager/carrito", (req, res) =>res.sendFile(__dirname + "/app/pages/manager/carritoDeCompra.html"));
app.get("/manager/reporte", (req, res) =>res.sendFile(__dirname + "/app/pages/manager/reporte.html"));
app.get("/", (req, res) => res.sendFile(__dirname + "/app/pages/login.html"));
app.get("/register", (req, res) => res.sendFile(__dirname + "/app/pages/register.html"));
app.get("/admin", (req, res) => res.sendFile(__dirname + "/app/pages/admin/admin.html"));
app.post("/api/login", authentication.login);
app.post("/api/register", authentication.register);


routerApi(app);