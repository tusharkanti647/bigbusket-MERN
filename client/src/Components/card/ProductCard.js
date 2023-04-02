
import "./ProductCard.css"
import { addToBasket } from "../../redux_toolkit/slices/basketProductArrSlices";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, createTheme, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";






function ProductCard({ product }) {
    const [productQty, setProductQty] = useState(1);
    const dispatch = useDispatch();



    // const productData = useSelector((state) => state.getproduct.entities);
    // let newProductData = [];

    // if (productData.length > 5) {
    //     newProductData = [...productData]
    //     newProductData.splice(5);
    // }

    const handelAdd = () => {
        dispatch(addToBasket({...product, qty:productQty}))
    }
    
    //creat link and product id
    //---------------------------------------------------------------------------------
    const id = product._id;
    const link = `aboutproduct/${id}`;

    //---------------------------------------------------------------------------------
    return (
        <>
            <Card className="card">

                <Link to={link} >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        // height="100%"
                        width="100%"
                        height="auto"
                        image={product.imgLink}
                    />
                </Link>
                <Typography sx={{ fontSize: 11, color: "#888888", }} component="div">
                    {product.category}
                </Typography>
                <CardContent sx={{ pb: "0px", pt: "1px" }}>

                    <Link to={link} >
                        <Typography sx={{ fontSize: 12 }} variant="h6" component="div">
                            {product.titel}
                        </Typography>
                    </Link>
                    <Typography sx={{ display: 'flex', color: "green", fontSize: 12, bgcolor: "#E3EBDA" }} variant="h6" className="rating" component="div">
                        <p>{product.rating}</p>
                        <StarIcon sx={{ fontSize: 12 }} />
                    </Typography>
                    <Typography sx={{ fontSize: 11, border: 'solid #888888 1px', color: "#888888" }} component="div">
                        {product.about.weight.length === 3 ? (product.about.pcs + "pcs") : (product.about.weight[1] + product.about.weight[0])} - RS {product.price[1]}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "#888888", bgcolor: "#F4F3F2" }} component="div">
                        <del>MRP {product.price[0]}</del> RS {product.price[1]}
                    </Typography>
                    <Typography sx={{ display: 'flex', color: "#888888", bgcolor: "#F4F3F2" }} className="delhiver-detals" component="div">
                        {/* <div>car</div> */}
                        <LocalShippingIcon sx={{ fontSize: 40 }} />
                        <p >Standard Delivery: Tomorrow Morning</p>
                    </Typography>
                </CardContent>
                <CardActions sx={{ pt: "0px", bgcolor: "#F4F3F2" }}>
                    <div className="nav_searchbaar">
                        <div className="search_icon">
                            <p>Qty</p>
                        </div>
                        <input type="text" value={productQty} onChange={(event) => setProductQty(event.target.value)} />

                    </div>
                    {/* <Button size="small">Share</Button>  name=""
                                onChange={(e) => getText(e.target.value)}*/}
                    <button className="add-to-card-button" onClick={handelAdd}>
                        <p>ADD</p>
                        <ShoppingBasketIcon />
                    </button>
                </CardActions>
            </Card>
        </>
    );
}

export default ProductCard;