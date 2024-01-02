import mongoose from 'mongoose'

const categoryScheme = new mongoose.Scheme(
    {
        name:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const Category = mongoose.model('Category',categoryScheme)