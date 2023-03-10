


const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

const userModel = require("../model/schema");

router.get("/", (req, res) => {
    res.send("welcome my root page from roter");
});

router.post("/signup", (req, res) => {
    const user=new userModel({
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        password:req.body.password,
        conPassword:req.body.conPassword,
    })
    user.save().then(()=>{
        res.send({
            status:true,
            user:user,
        })
    }).catch((err)=>{
        res.send({
            status:false,
            err});
    });
});
// router.get("/signup", (req, res) => {
//     //console.log(req.body);
//     res.send("req.body");
// });

module.exports = router;