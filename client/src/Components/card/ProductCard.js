
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




function ProductCard() {

    return (
        <Card sx={{ maxWidth: 220, border: 'solid #888888 1px' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image="https://www.bigbasket.com/media/uploads/p/l/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg"
            />
            <Typography sx={{ fontSize: 11, color: "#888888", }} component="div">
                fresho
            </Typography>
            <CardContent sx={{pb:"0px", pt:"1px"}}>
                <Typography sx={{ fontSize: 12 }} variant="h6" component="div">
                    Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs
                </Typography>
                <Typography sx={{ display: 'flex', color: "green", fontSize: 12, bgcolor: "#E3EBDA" }} variant="h6" className="rating" component="div">
                    <p>4.4</p>
                    <StarIcon sx={{ fontSize: 12 }} />
                </Typography>
                <Typography sx={{ fontSize: 11, border: 'solid #888888 1px', color: "#888888" }} component="div">
                    250g - RS 89
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#888888", bgcolor:"#F4F3F2" }} component="div">
                    <del>MRP 120</del>  RS 89
                </Typography>
                <Typography sx={{ display: 'flex', color: "#888888",bgcolor:"#F4F3F2" }} className="delhiver-detals" component="div">
                    {/* <div>car</div> */}
                    <LocalShippingIcon sx={{ fontSize: 40 }} />
                    <p >Standard Delivery: Tomorrow Morning</p>
                </Typography>
            </CardContent>
            <CardActions sx={{ pt:"0px", bgcolor:"#F4F3F2" }}>
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
    );
}

export default ProductCard;