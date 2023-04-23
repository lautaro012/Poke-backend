import app from './app.js'
import  './database.js'
import dotenv from 'dotenv'


dotenv.config()

const port= process.env.PORT || 3000


app.listen(port,() => {
  console.log(`Server on port ${port}`)
})