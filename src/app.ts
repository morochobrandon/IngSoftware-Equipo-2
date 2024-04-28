import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import productRoutes from './routes/products.routes'

const app = express() // cargamos unas instancia de express

app.set('port',process.env.PORT||3000) // puerto que vamos a usar
/*
app.get('/ping',(_req,res)=>{
  console.log('puerto escuchando!!' + new Date().toLocaleDateString())
  res.send('pong')
})
*/



app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(productRoutes)
export default app
/*
app.listen(PORT,()=>{
  console.log(`Servidor corriendo en puerto: ${PORT}`);
})
*/
