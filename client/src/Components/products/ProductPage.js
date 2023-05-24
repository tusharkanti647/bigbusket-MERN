import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import ProductCard from "../card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../redux_toolkit/slices/getProduvtSlices";
import { useEffect, useState } from "react";
import { useFetch } from "../../survices/getapi";
import "./ProductPage.css";


function ProductPage() {
    const [sortInputValue, setSortInputValue] = useState("");
    const [newProductData, setNewProductData] = useState([]);
    const searchName = useSelector((state) => state.functionSlices.searchName);
    let filters = useSelector((state) => state.functionSlices.filterArr);

    //let { isLoading, serverError, apiData } = useFetch("http://localhost:8000/addproduct");
    //let newProductData = [];
    //console.log(apiData);
    useEffect(() => {

        try {
            const fatchFun = async () => {
                let uid = "http://localhost:8000/products-search";
                let querySearchString = "";

                querySearchString = searchName ? querySearchString + "searchName=" + searchName : querySearchString;
                querySearchString = sortInputValue ? (querySearchString ? querySearchString + "&&sortQue=" + sortInputValue : querySearchString + "sortQue=" + sortInputValue) : querySearchString;
                if (filters) {
                    

                    filters = filters.join("+");
                    
                    querySearchString = querySearchString ? querySearchString + "&&filters=" + filters : querySearchString + "filters=" + filters;
                    
                }
                //querySearchString=filters ? (querySearchString ? querySearchString + "&&filters=")
                
                if (querySearchString) {
                    uid = `${uid}?${querySearchString}`;
                    console.log(uid);
                    const respons = await fetch(uid);
                    const data = await respons.json();
                    //console.log(data.data);
                    setNewProductData([...data.data]);
                } else {
                    //uid = `http://localhost:8000/products-search`;
                    
                    const respons = await fetch(uid);
                    const data = await respons.json();
                    //console.log(data.data);
                    setNewProductData([...data.data]);
                }

                // if (sortInputValue) {
                //     let sortQua = sortInputValue.split(" ").join("+");
                //     uid = `http://localhost:8000/products-search?sortQue=${sortQua}`;
                //     //console.log(uid);
                //     const respons = await fetch(uid);
                //     const data = await respons.json();
                //     //console.log(data.data);
                //     setNewProductData([...data.data]);
                // }else{
                //     uid = `http://localhost:8000/products-search`;
                //     //console.log(uid);
                //     const respons = await fetch(uid);
                //     const data = await respons.json();
                //     //console.log(data.data);
                //     setNewProductData([...data.data]);
                // }
            }
            fatchFun();
        } catch (e) {
            console.log(e);
        }

    }, [sortInputValue, searchName, filters])

    //const { isLoading, serverError, apiData } = useFetch("http://localhost:8000/addproduct");
    //console.log(apiData);

    //let newProductData = [];

    return (
        <Box className="product-page">
            <Box sx={{ width: "95%", display: "flex", }}>
                <Sidebar />


                <Box sx={{ display: "flex", flexDirection: "column", flex: 1, }}>
                    <FormControl sx={{ width: 250, marginRight: 0, marginLeft: "2%", marginBottom: "30px" }}>
                        <InputLabel id="select-filter">Short By</InputLabel>
                        <Select
                            defaultValue="popularity"
                            labelId="select-filter"
                            id="demo-simple-select"
                            value={sortInputValue}
                            label="Short By"
                            onChange={(e) => setSortInputValue(e.target.value)}
                        >
                            <MenuItem value="rating -1">Popularity</MenuItem>
                            <MenuItem value="discountPrice 1">Price - Low to High</MenuItem>
                            <MenuItem value="discountPrice -1">Price - High to Low</MenuItem>
                        </Select>
                    </FormControl>


                    <Box className="card-contaner">
                        {newProductData.map((product, ind) => <ProductCard key={ind} product={product} />)}
                    </Box>

                </Box>
            </Box>


        </Box>
    )
}

export default ProductPage;