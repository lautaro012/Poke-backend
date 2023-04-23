import {Schema, model} from 'mongoose'

const reviewSchema = new Schema({
name: {
    type: String,
    required: true,
    unique: true
},
image: {
    type: String,
    required: true,
},
attack: {
    type: Number,
    required: true,
},
defense: {
    type: Number,
    required: true,
},
hp: {
    type: Number,
    required: true,
},
type: {
    type: String,
    required: true,
},
idAuthor: {
    type: Number,
    ref: 'author'
}
},
{
  timestamps: false,
  versionKey: false
})

export default model('review',reviewSchema)