const { default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    number: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    conPassword: {
        type: String,
        require: true,
    }
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