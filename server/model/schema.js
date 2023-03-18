const { default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, //left and right side of the name if have any spce it trimes
    },
    number: {
        type: String,
        require: true,
        uniqued:true, // it creat the number is unique
        maxlength:10, //it creat the length of the number only 10
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true,
        minlength:6,
    },
    conPassword: {
        type: String,
        required: true,
        minlength:6,
    },
    tokens:[
        {
            token:{
            type:String,
            required: true,
            }
        }
    ],
    cart:Array,
});

const userModel = mongoose.model("users", usersSchema);


//product cchema
//----------------------------------------------------------------

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        require: true,
    },
    imgLink: {
        type: String,
        require: true,
    },
    titel: {
        type: String,
        require: true,
    },
    price: {
        type: Array,
        require: true,
    },
    rating: {
        type: String,
    },
    about: {
        weight: {
            type: String,
        },
        pcs: {
            type: String,
        },
        describtion: {
            type: String,
        },
    }

});

const productModel = mongoose.model("products", productSchema);


module.exports = { userModel, productModel };