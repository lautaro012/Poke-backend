import { Router } from 'express'
import pokeRouter from "./pokeRouter.js";



const router = Router()
router.use('/',pokeRouter)

export default router;