import express from 'express'
const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping',(_req,res)=>{
  console.log('puerto escuchando!!')
  res.send('pong')
})

app.listen(PORT,()=>{
  console.log(`Servidor corriendo en puerto: ${PORT}`);
})
