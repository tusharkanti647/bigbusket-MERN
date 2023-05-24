

import "./Basket.css";


import { Box, Button } from '@mui/material';
import { border } from "@mui/system";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function Basket() {

    //get cart product list
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    //const [totalSubtotal, setTotalSubtotal] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [basketProductArr, setBasketProductArr] = useState([]);
    const navigate = useNavigate();

    const basketProductArrReduxToolKit = useSelector((state) => state.basketProductArr);

    //fetch the basket data
    //--------------------------------------------------------------------------------------
    useEffect(() => {
        //if (basketProductArrReduxToolKit.length < 1) {
            const fetchFun = async () => {
                const response = await fetch("/basket", {
                    method: "GET",
                    headers: { Authorization: localStorage.getItem("token") }
                });
                if (response.statusText === "Unauthorized") {
                    console.log("hello");
                    navigate("./");
                    return;
                } else {
                    const data = await response.json();
                    setBasketProductArr([...data])
                }
            }
            fetchFun();

        // } else {
        //     setBasketProductArr([...basketProductArrReduxToolKit]);
        // }
    }, [])


    //calculate total savings and total prices

    useEffect(() => {
        let totalPriceArr = 0;
        let totalSavingsArr = 0;

        for (let i = 0; i < basketProductArr.length; i++) {
            let product = basketProductArr[i];
            //let price = product.price[1] * product.qty;
            //let subtotal = product.price[0] * product.qty;
            let price = product.discountPrice * product.qty;
            let subtotal = product.originalPrice * product.qty;
            let savings = subtotal - price;

            totalPriceArr += price;
            totalSavingsArr += savings;
        }


        setTotalPrice(totalPriceArr);
        setTotalSavings(totalSavingsArr);
    }, [basketProductArr])

    //remove all the items from basket
    //----------------------------------------------------------------------------------------
    const removeAllItem = async () => {
        const respons =await fetch("/empty-basket", {
            method: "PUT",
            headers: { "Authorization": localStorage.getItem("token") }
        });
        setBasketProductArr([]);
        const data = await respons.json();
    }




    // useEffect(()=>{
    //     const basketUpdate = async () => {
    //         basketProductArr.map((oroduct)=>)
    //         const response = await fetch("http://localhost:8000/basket/:id");

    //     }
    // })

    // useEffect(() => {
    //     const getBasketProduct = async () => {
    //         const response = await fetch("http://localhost:8000/basket", {
    //             headers: {
    //                 authorization: localStorage.getItem("token")
    //             }
    //         });
    //         //console.log();
    //         const data = await response.json();
    //         console.log(data);
    //         // setCartItems(data);
    //         // setTotalPrice(data.reduce((a, b) => a + b.price * b.quantity, 0));
    //         // setTotalQuantity(data.reduce((a, b) => a + b.quantity, 0));
    //         // setTotalSubtotal(data.reduce((a, b) => a + b.subtotal, 0));
    //         // setTotalSavings(data.reduce((a, b) => a + b.savings, 0));
    //     }
    //     getBasketProduct();
    // }, []);



    return (<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Box className="your-item">
            <h2>Your Basket ({basketProductArr.length} items)</h2>
        </Box>
        <Box className="cart-table-heder">
            <Box sx={{ width: "52%" }} className="cart-table-heder-left">
                <div >
                    <h3>ITEM DESCRIPTION</h3>
                </div>
            </Box>
            <Box className="cart-table-heder-right">
                <h3>UNIT PRICE</h3>
                <h3>QUANTITY</h3>
                <h3>SUBTOTAL</h3>
                <h3>SAVINGS</h3>
            </Box>
        </Box>

        {basketProductArr.map((product) => <ItemList setBasketProductArr={setBasketProductArr} product={product} />)}

        <Box className="cart-bottom-part">
            <Box className="cart-buttom-part-botton-wrapper">
                <Button onClick={removeAllItem}> <ShoppingBasketIcon />EMPTY BASKET</Button>
                <Link to="/products">
                    <Button sx={{ border: "solid 1px black" }}>CONTINUE SHOPPING</Button>
                </Link>
            </Box>

            <Box className="cart-bottom-part-right">
                <Box className="save-bill-charges" >
                    <Box sx={{ width: "60%", mr: "15px", ml: "5%" }} className="bill-charges">
                        <div >
                            <p>Subtotal</p>
                            <p>Rs. {totalPrice}</p>
                        </div>
                        <div>
                            <p>Delivery Charges </p>
                            <p>***</p>
                        </div>
                        <div >
                            <p>TOTAL</p>
                            <p>Rs. {totalPrice}</p>
                        </div>
                    </Box>
                    <Box className="bill-charges-save">
                        <p>You saved! <br /> Rs. {totalSavings}</p>
                    </Box>
                </Box>
                <div>
                    <Button>CHECKOUT <ArrowCircleRightIcon /> </Button>
                </div>
            </Box>
        </Box>
    </Box>)
}

export default Basket;