

import { configureStore } from "@reduxjs/toolkit";
import getProduvtSlices from "./slices/getProduvtSlices";

const store=configureStore({
    reducer: {
        getproduct : getProduvtSlices,
    }
});

export default store;