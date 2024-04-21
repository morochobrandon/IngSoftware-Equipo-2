import {Router} from 'express'
import {getProducts} from '../controllers/products.controllers'

const router = Router()

router.get('/products',getProducts)

router.get('/products/count',(req,res)=>res.send('hello word'))

router.post('/products',(req,res)=>res.send('hello word'))

router.get('/products/:id',(req,res)=>res.send('hello word'))

router.delete('/products/:id',(req,res)=>res.send('hello word'))

router.put('/products/:id',(req,res)=>res.send('hello word'))

export default router