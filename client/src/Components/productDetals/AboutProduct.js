
import "./AboutProduct.css"

import { border, Box, display } from "@mui/system";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { colors } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useFetch } from "../../survices/getapi";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";






function AboutProduct() {
    const [checked, setChecked] = useState(false);
    const [oneProductData, setOneProductData] = useState({});
    const [productNumber, setProductNumber] = useState(1);


    const { id } = useParams();

    // const { isLoading, serverError, apiData }=useFetch(`http://localhost:8000/addproduct/${id}`);
    // console.log(apiData);

    //get one product from the server
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/addproduct/${id}`);
                const data = await response.json();
                setOneProductData({ ...data });
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    //handel the input
    const handleChange = (event) => {
        setProductNumber(event.target.value);
    }

    //off calculating
    let off=0;
    if(oneProductData.price){
        off=((oneProductData.price[0] - oneProductData.price[1])/oneProductData.price[0])*100;
    }

    //  console.log(oneProductData.about.weight[1])
    // const arr=[...oneProductData.price]
    // console.log(arr)
    // //console.log(arr[0])
    // if(oneProductData.price){
    // oneProductData.price && console.log(oneProductData.about.weight[1]);
    // }
    return (

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center"}} className="About-product-main">
            <Box sx={{ width: "95%", display: "flex"}} className="upperPart">

                <Box sx={{ width: "25%", borderRight: "solid 0.5px #888888", color: "#888888"}} className="sidebar-category">
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
                <img src={oneProductData.imgLink} alt="" />

                {/* ------------------------------+ ", "+ oneProductData.about.weight}---------------------------------------------- */}
                {oneProductData.price && (
                    <Box className="upperPart-right" sx={{ ml: "20px" }}>
                        <p>Fresho</p>
                        <h4>{oneProductData.titel}</h4>

                        <Box>

                            <p>MRP:{oneProductData.price[0]}</p>
                            <h4 id="price">Price:Rs {oneProductData.price[1]} <span>({oneProductData.about.weight.length===3 ? ((oneProductData.price[1]/oneProductData.about.pcs)+"/pcs") : ((oneProductData.price[1]/oneProductData.about.weight[1])+"/" + oneProductData.about.weight[0])})</span></h4>
                            <p><span>You Save:{off}%</span> <br />
                                (Inclusive of all taxes)
                            </p>
                            <div style={{ margin: "10px" }}>
                                <p className="aboutProduct-rating" style={{ color: "#84c225" }}>{oneProductData.rating}<StarIcon sx={{ fontSize: "15px" }} /> </p>
                            </div>
                            <div className="aboutProduct-button-wrapper">
                                <input type="number" value={productNumber} onChange={handleChange}/>
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
                                <div>{oneProductData.about.weight.length===3 ? (oneProductData.about.pcs+"pcs") : (oneProductData.about.weight[1] + oneProductData.about.weight[0])}</div>
                                <div>
                                    <span>Rs {oneProductData.price[1]}</span> <span>MRP: <del>{oneProductData.price[0]}</del></span> <span>{off}% Off</span>
                                </div>
                            </div>
                            {/* <label>
                            <input value={["2kg", 38]} type="checkbox" />
                            <span class="checkmark"></span>
                        </label> */}
                            <label className="container">
                                <input value={["2kg", 38]} type="checkbox" checked={checked} onChange={(event)=>{console.log(event.target.value)}}/>
                                <span className="checkmark"></span>
                            </label>
                        </Box>
                    </Box>
                )}



            </Box>


            {/* ---------------------------------------------------------------------------- */}
            {oneProductData.price && (
            <Box sx={{ width: "95%", }} className="lowerPart">
                <div>
                    <h4>{oneProductData.titel}</h4>
                </div>
                <Box className="product-about-section" sx={{ borderBottom: "solid 0.5px #888888", color: "#888888" }}>
                    <h3>About the Product</h3>
                    <p>
                    {oneProductData.about.describtion}
                    </p>
                </Box>
            </Box >
            )}

        </Box>
    )
}

export default AboutProduct;