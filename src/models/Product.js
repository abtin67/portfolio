const { Schema, default: mongoose, models, model } = require("mongoose");

const ProductSchema = new Schema({
   title:{
    type:String,
    required:[true,"نام محصول الزامی می باشد"],
    trim:true,
    maxLength:[50,"اسم خیلی طولانی است"],
    minLength:[5,"اسم خیلی کوتاه است"]
   },
   description:{
    type:String,
    trim:true,
    required:true,
    maxLength:[2000,"خیلی طولانی شد"]
   },
   stock:{
    type:Number,
    default:0,
    min:0
   },
   price:{
    type:Number,
    required:true,
    min:[0,"قیمت نمیتواند خالی باشد"]
   },
   category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
   },
   image:[
    {
        url:{
            type:String,
            required:true
        },
        alt:{
            type:String
        }
    }
   ],
   tags:{
    type:String,
    trim:true,
    lawercase:true
   },
   isFeatured:{
    type:Boolean,
    default:false
   },
   discount:{
    percenttage:{
        type:Number,
        default:0,
        min:0,
        max:100
    },
    validUntil:{
        type:Date
    }
   },
   createBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   isActive:{
    type:Boolean,
    default:true
   },
   color:{
    type:String,
    required:true
   },
   size:{
    type:String
   },
   timestamps:true
})

const Product = models.product || model('Product',ProductSchema)
export default Product;