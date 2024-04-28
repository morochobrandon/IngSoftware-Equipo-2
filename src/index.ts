import app from './app'
import express from 'express'

import path from 'path';


//server
app.listen(app.get('port'), () => {// corriendo el puerto
  console.log(`Servidor corriendo en puerto: ${app.get('port')}`);
});

//configuracion
app.use(express.static(path.join(__dirname, 'app/public')));
//rutas
//req:consulta
//res:respuesta
app.get("/",(req,res)=>res.sendFile(path.join(__dirname, '/app/pages/login.html')))
app.get("/register",(req,res)=>res.sendFile(path.join(__dirname, '/app/pages/register.html')))
app.get('/admin', (req, res) =>
  res.sendFile(__dirname + '/app/pages/admin/admin.html')
);
