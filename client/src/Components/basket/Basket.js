

import "./Basket.css";


import { Box, Button } from '@mui/material';
import { border } from "@mui/system";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ItemList from "./ItemList";
import { useEffect, useState } from "react";


function Basket() {

    //get cart product list
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalSubtotal, setTotalSubtotal] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);

    useEffect(() => {
        const getBasketProduct = async () => {
            const response = await fetch("http://localhost:8000/basket", {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await response.json();
            console.log(data);
            // setCartItems(data);
            // setTotalPrice(data.reduce((a, b) => a + b.price * b.quantity, 0));
            // setTotalQuantity(data.reduce((a, b) => a + b.quantity, 0));
            // setTotalSubtotal(data.reduce((a, b) => a + b.subtotal, 0));
            // setTotalSavings(data.reduce((a, b) => a + b.savings, 0));
        }
        getBasketProduct();
    }, []);



    return (<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Box className="your-item">
            <h2>Your Basket (04 items)</h2>
        </Box>
        <Box className="cart-table-heder">
            <Box sx={{ width: "52%" }} className="cart-table-heder-left">
                <div style={{}}>
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

        <ItemList />

        <Box className="cart-bottom-part">
            <Box className="cart-buttom-part-botton-wrapper">
                <Button> <ShoppingBasketIcon />EMPTY BASKET</Button>
                <Button sx={{ border: "solid 1px black" }}>CONTINUE SHOPPING</Button>
            </Box>

            <Box className="cart-bottom-part-right">
                <Box className="save-bill-charges" >
                    <Box sx={{ width: "60%", mr: "15px", ml: "5%" }} className="bill-charges">
                        <div >
                            <p>Subtotal</p>
                            <p>Rs. 89.50</p>
                        </div>
                        <div>
                            <p>Delivery Charges </p>
                            <p>***</p>
                        </div>
                        <div >
                            <p>TOTAL</p>
                            <p>Rs. 89.50</p>
                        </div>
                    </Box>
                    <Box className="bill-charges-save">
                        <p>You saved! <br /> Rs. 93.84</p>
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