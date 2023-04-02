

import { configureStore } from "@reduxjs/toolkit";
import getProduvtSlices from "./slices/getProduvtSlices";
import basketProductArrSlices from "./slices/basketProductArrSlices";

const store=configureStore({
    reducer: {
        getproduct : getProduvtSlices,
        basketProductArr : basketProductArrSlices,
    }
});

export default store;