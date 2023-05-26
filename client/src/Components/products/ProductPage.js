import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import ProductCard from "../card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../redux_toolkit/slices/getProduvtSlices";
import { useEffect, useState } from "react";
import { useFetch } from "../../survices/getapi";
import "./ProductPage.css";
import Lodar from "../lodar/Lodar";


function ProductPage() {
    const [sortInputValue, setSortInputValue] = useState("");
    const [newProductData, setNewProductData] = useState([]);
    const [basketProductArr, setBasketProductArr]=useState([]);
    const [isLodar, setIsLodar] = useState(false);
    const searchName = useSelector((state) => state.functionSlices.searchName);
    let filters = useSelector((state) => state.functionSlices.filterArr);
    const ischeck = useSelector((state) => state.functionSlices.isAddProduct);

    //let { isLoading, serverError, apiData } = useFetch("http://localhost:8000/addproduct");
    //let newProductData = [];
    //console.log(apiData);
    useEffect(() => {

        try {
            const fatchFun = async () => {
                //setIsLodar(true);
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
                    //console.log(uid);
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
                //setIsLodar(false);

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

    useEffect(() => {
        const fetchFun = async () => {
            //setIsLodar(true);
            const response = await fetch("http://localhost:8000/basket", {
                method: "GET",
                headers: { Authorization: localStorage.getItem("token") }
            });
            if (response.statusText === "Unauthorized") {

                //navigate("./");
                //return;
            } else {
                const data = await response.json();
                setBasketProductArr([...data])
            }
            //setIsLodar(false);
        }
        fetchFun();
    }, [ischeck])

    //cart product present or not
    //-----------------------------------------------------------------
    const findCartProduct = (product) => {
        return basketProductArr.find((ele) => ele._id === product._id);
    }


    // if(isLodar){
    //     return(
    //         <Lodar />
    //     )
    // }

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
                        {newProductData.map((product, ind) => findCartProduct(product) ? <ProductCard key={ind} basketQty={findCartProduct(product).qty} product={product} /> :<ProductCard key={ind} product={product} />)}
                    </Box>

                </Box>
            </Box>


        </Box>
    )
}

export default ProductPage;