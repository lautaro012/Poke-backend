import { isValidObjectId } from 'mongoose'
import dotenv from 'dotenv'
import Poke from '../models/poke.js'
import mongoose from 'mongoose'


const ObjectId = mongoose.Types.ObjectId
dotenv.config()



export const getPoke = async (req,res) => {
    try {
      // const users= await User.find().populate('orders',{
      //   user_id: 0,
      //   createdAt: 0,
      //   updatedAt: 0
      // })
      // const users= await User.find()
      const pokes = await Poke.find(
        
        // {
        //   $lookup:
        //   {
        //     from: "orders",
        //     let:
        //     {
        //       aliasOrder: "$orders"
        //     },
        //     pipeline: [
        //       {
        //         $match: {
        //           $expr: {
        //             $in: ["$_id","$$aliasOrder"]
        //           }
        //         }
        //       }
        //     ],
        //     as: "orderList"
        //   }
        // }
      )

      res.status(200).json(pokes)

    } catch (error) {

      console.log('Error getting pokes',error)

    }
  }


export const postPoke = async (req,res) =>  {
    try {
      const {name, image, attack, defense, hp , type , idAuthor} = req.body
      // if( !name || !lastName || !userName || !mail) {res.send('Missing data required')}
      const pokeFind = await Poke.findOne({name: name})
      if(pokeFind === null){
        const poke = new Poke(req.body)
        const savePoke = await poke.save()
        res.json(savePoke)
        
      } else{
        // const order = await Order.findById(order_id);
        res.status(404).send('Poke already exist')
      }  
    }
     catch (error) {
      console.log('Error creating Poke',error)
    } 
  }

export const deletePoke = async (req,res) =>  {
    try{
      const {id} = req.params
      if(isValidObjectId(id)){
        const poke = await Poke.findByIdAndDelete(id)
        poke
        ? res.status(200).json({ msg: `Deleted Poke ${id}`})
        : res.status(404).send('Poke not found')
      }else{
        res.status(404).send('Poke not found')
      }
    }
    catch(error){
      console.log('Error deleting Poke',error)
    }
  }

export const editPoke = async (req,res) =>  {
    try {
      const {id}= req.params
      if(isValidObjectId(id)){
        const poke = await Poke.findByIdAndUpdate(id,req.body)
        poke
        ? res.status(200).json(poke)
        : res.status(404).send('Poke not found')
      }else{
        res.send('Poke not found')
      }
    } catch (error) {
      console.log('Error Editing Poke',error)
    }
  }