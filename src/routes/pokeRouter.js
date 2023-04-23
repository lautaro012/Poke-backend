import { Router } from "express"
import { getPoke, editPoke, deletePoke, postPoke  } from "../controllers/PokeController.js";


const pokeRouter = Router()
pokeRouter.get('/user',getPoke)
pokeRouter.post('/user',postPoke)
pokeRouter.delete('/user/:id',deletePoke)
pokeRouter.put('/user/:id',editPoke)

export default pokeRouter;