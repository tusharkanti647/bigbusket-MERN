const getProducts = () => async (dispatch) => {
    try {
        const productData = await fetch("http://localhost:8000/addproduct", {
            method: "GET",
            headers: {
                "Content_Type": "application/json"
            }
        });
        const jesonProductData = await productData.jeson();
        console.log(jesonProductData);
        dispatch({ type: "SUCCESS_GET_PRODUCT", payload: jesonProductData });
    } catch (err) {
        dispatch({ type: "FAIL_GET_PRODUCT", payload: err });
    }
}


export { getProducts};