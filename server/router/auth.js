


const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

router.use(bodyParser.json());

const { userModel, productModel } = require("../model/schema");
//const = require(".")

// router.get("/", (req, res) => {
//     res.send("welcome my root page from roter");
// });


//signUp root
router.post("/signup", (req, res) => {
    const { name, number, email, password, conPassword } = req.body;

    if (!name || !number || !email || !password || !conPassword) {
        res.status(400).jeson("plices provide data");
        return;
    }
    const user = new userModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        conPassword: bcrypt.hashSync(req.body.conPassword, 10),
    });

    user.save().then(() => {
        res.send({
            status: true,
            user: user,
        })
    }).catch((err) => {
        res.send({
            status: false,
            err
        });
    });
});

//product update path
router.post("/addproduct", (req, res) => {
    const { category, imgLink, titel, price, rating, about } = req.body;
    //console.log(req.body);
    const product = new productModel({
        category: category,
        imgLink: imgLink,
        titel: titel,
        price: price,
        rating: rating,
        about: {
            weight: about.weight,
            pcs: about.pcs,
            describtion: about.describtion,
        }
    })

    product.save().then(() => {
        res.send({ status: true, product });
    }).catch((err) => {
        res.send({ status: false, err });
    })
})
//product get path
router.get("/addproduct", async (req, res) => {
    const data = await productModel.find();
    res.send(data);
});

//product one get path
router.get("/addproduct/:id", async (req, res) => {
    try{
        const data = await productModel.findById(req.params.id);
        res.send(data);
    }catch (err){
        res.status(404).send(err);
    }
    
});

//cart get path

router.get("/cart/:id", async (req, res) => {
    try{
        const data = await userModel.findById(req.params.id);

        res.send(data.cart);
    }catch (err){
        res.status(404).send(err);
    }
    
});


//sign in path
let token;
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).jeson("plices provide data");
            return;
        }

        let user = await userModel.findOne({ email: email });
        token = await user.generateToken();
        console.log(token);


        if (!user) {
            res.status(400).send("not present");
            return;
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.status(400).send("password not match");
            return;
        }


        res.status(200).send(user);
    } catch (err) {
        res.send({ status: false, err })
        console.log(err);
    }


})




// router.get("/signup", (req, res) => {
//     //console.log(req.body);
//     res.send("req.body");
// });

module.exports = router;