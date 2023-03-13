
import "./AboutProduct.css"

import { border, Box, display } from "@mui/system";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { colors } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import { useState } from "react";




function AboutProduct() {
    const [checked, setChecked] = useState(false);


    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center" }} className="About-product-main">
            <Box sx={{ width: "95%", display: "flex" }} className="upperPart">

                <Box sx={{ width: "25%", borderRight: "solid 0.5px #888888", color: "#888888" }} className="upperPart-left">
                    <Box>
                        <h4> Category</h4>
                        <p>
                            Fruits & Vegetables <br />
                            Fresh Vegetables<br />
                            Beans, Brinjals & Okra<br />
                            Cabbage & Cauliflower<br />
                            Cucumber & Capsicum<br />
                            Gourd, Pumpkin, Drumstick<br />
                            Leafy Vegetables<br />
                            Potato, Onion & Tomato<br />
                            Root Vegetables<br />
                            Specialty<br />
                        </p>
                    </Box>
                    <Box>
                        <h4>Brands</h4>
                        <p>
                            Fresho<br />
                            Fresho Potato, Onion & Tomato
                        </p>
                    </Box>
                </Box>

                {/* ---------------------------------------------------------------------------- */}
                <img src="https://www.bigbasket.com/media/uploads/p/l/40162470_2-fresho-potato-chandramukhi.jpg" alt="" />

                {/* ---------------------------------------------------------------------------- */}
                <Box className="upperPart-right" sx={{ ml: "20px" }}>
                    <p>Fresho</p>
                    <h4>Fresho Potato - Chandramukhi, 2 kg</h4>

                    <Box>
                        <p>MRP:Rs 50</p>
                        <h4 id="price">Price:Rs 38 <span>(Rs.19/kg)</span></h4>
                        <p><span>You Save:24%</span> <br />
                            (Inclusive of all taxes)
                        </p>
                        <div style={{margin: "10px"}}>
                        <p className="aboutProduct-rating" style={{color:"#84c225"}}> 4.4 <StarIcon sx={{fontSize:"15px"}}/> </p>
                        </div>
                        <div className="aboutProduct-button-wrapper">
                            <input type="number" value="1" />
                            <button className="aboutProduct-add-button">ADD TO BASKET</button>
                            <button className="aboutProduct-save-button">SAVE</button>
                        </div>
                    </Box>

                    <p id="delhivery-time">
                        <LocalShippingIcon /> Standard: Today Evening
                    </p>

                    <h4>Pack Sizes</h4>
                    <Box onClick={() => setChecked(!checked)} className="product-weight-value-slect">
                        <div id="aboutProduct-price-contaner" style={{ backgroundColor: checked ? "#E6F3D3" : "" }} >
                            <div>2kg</div>
                            <div>
                                <span>Rs 38</span> <span>MRP: <del>Rs 50</del></span> <span>24% Off</span>
                            </div>
                        </div>
                        {/* <label>
                            <input value={["2kg", 38]} type="checkbox" />
                            <span class="checkmark"></span>
                        </label> */}
                        <label class="container">
                            <input value={["2kg", 38]} type="checkbox" checked={checked} />
                            <span class="checkmark"></span>
                        </label>
                    </Box>
                </Box>


            </Box>


            {/* ---------------------------------------------------------------------------- */}
            <Box sx={{ width: "95%", }} className="lowerPart">
                <div>
                    <h4>Fresho Potato - Chandramukhi</h4>
                </div>
                <Box className="product-about-section" sx={{ borderBottom: "solid 0.5px #888888", color: "#888888" }}>
                    <h3>About the Product</h3>
                    <p>
                        Potatoes are filling, reasonable in calories, non-fattening, and are nutrient dense, which means you obtain many nutrients for the number of calories they have. It has a rich and smooth texture. It is a good supply of carbohydrates, dietary fibre and some minerals like potassium, copper, magnesium and iron. It is also rich in phytochemical antioxidants like flavonoids, other B vitamins as well as folate.
                        Product image shown is for representation purpose only, the actual product may vary based on season, produce & availability.
                        Click here for delicious vegetable recipes - https://www.bigbasket.com/flavors/collections/227/fresh-vegetables/
                    </p>
                </Box>
            </Box >

        </Box>
    )
}

export default AboutProduct;