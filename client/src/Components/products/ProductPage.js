import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import ProductCard from "../card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../redux_toolkit/slices/getProduvtSlices";
import { useEffect } from "react";
import { useFetch } from "../../survices/getapi";
import "./ProductPage.css";


function ProductPage() {
    const { isLoading, serverError, apiData } = useFetch("http://localhost:8000/addproduct");
    let newProductData = [...apiData];

    return (
        <Box className="product-page">
            <Box sx={{ width: "95%", display: "flex", }}>
                <Sidebar />


                <Box sx={{display: "flex", flexDirection:"column", flex: 1, }}>
                    <FormControl sx={{ width: 250, marginRight: 0, marginLeft:"2%", marginBottom:"30px" }}>
                        <InputLabel id="select-filter">Short By</InputLabel>
                        <Select
                         defaultValue="popularity"
                            labelId="select-filter"
                            id="demo-simple-select"
                            // value={age}
                            label="Short By"
                        // onChange={handleChange}
                        >
                            <MenuItem value="popularity">Popularity</MenuItem>
                            <MenuItem value="price-low-to-igh">Price - Low to High</MenuItem>
                            <MenuItem value="price-high-to-low">Price - High to Low</MenuItem>
                        </Select>
                    </FormControl>


                    <Box className="card-contaner">
                        <ProductCard newProductData={newProductData} />
                    </Box>

                </Box>
            </Box>


        </Box>
    )
}

export default ProductPage;