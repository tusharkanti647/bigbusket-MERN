
import "./ProductCard.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, createTheme, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from "react-redux";





function ProductCard({newProductData}) {
    // const productData = useSelector((state) => state.getproduct.entities);
    // let newProductData = [];

    // if (productData.length > 5) {
    //     newProductData = [...productData]
    //     newProductData.splice(5);
    // }
    console.log(newProductData);
    return (
        <>

            {newProductData.map((product,ind) => {
                return (
                    <Card key={ind} sx={{  }} className="card">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            // height="100%"
                            width="100%"
                            height="auto"
                            image={product.imgLink}
                        />
                        <Typography sx={{ fontSize: 11, color: "#888888", }} component="div">
                            {product.category}
                        </Typography>
                        <CardContent sx={{ pb: "0px", pt: "1px" }}>
                            <Typography sx={{ fontSize: 12 }} variant="h6" component="div">
                                {product.titel}
                            </Typography>
                            <Typography sx={{ display: 'flex', color: "green", fontSize: 12, bgcolor: "#E3EBDA" }} variant="h6" className="rating" component="div">
                                <p>{product.rating}</p>
                                <StarIcon sx={{ fontSize: 12 }} />
                            </Typography>
                            <Typography sx={{ fontSize: 11, border: 'solid #888888 1px', color: "#888888" }} component="div">
                                {product.about.weight} - RS {product.price[1]}
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
                                <input type="text" value="1" />

                            </div>
                            {/* <Button size="small">Share</Button>  name=""
                                onChange={(e) => getText(e.target.value)}*/}
                            <button className="add-to-card-button">
                                <p>ADD</p>
                                <ShoppingBasketIcon />
                            </button>
                        </CardActions>
                    </Card>
                )
            })}

        </>
    );
}

export default ProductCard;