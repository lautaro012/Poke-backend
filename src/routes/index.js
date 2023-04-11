import { Router } from 'express'
import pokeRouter from "./pokeRouter";



const router = Router()
router.use('/',pokeRouter)
