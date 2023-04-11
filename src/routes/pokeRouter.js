import { Router } from "express"
import { getPoke, editPoke, getPoke, postPoke  } from "../controllers/pokeController";


const pokeRouter = Router()
pokeRouter.get('/user',getPoke)
pokeRouter.post('/user',postPoke)
pokeRouter.delete('/user/:id',deletePoke)
pokeRouter.put('/user/:id',editPoke)

export default userRouter;