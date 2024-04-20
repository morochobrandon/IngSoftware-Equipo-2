import express from 'express'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

export const PORT = 3000;

app.get('/ping',(_req,res)=>{
  console.log('puerto escuchando!!' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use(express.json())

export default app
/*
app.listen(PORT,()=>{
  console.log(`Servidor corriendo en puerto: ${PORT}`);
})
*/
