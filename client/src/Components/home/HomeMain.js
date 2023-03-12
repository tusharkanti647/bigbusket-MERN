

import "./HomeMain.css"
import topMeetBanner from "../../image/banner/topMeet.webp"
import ayurveda from "../../image/offerBar/ayurveda.webp"
import byeMoreSaveMore from "../../image/offerBar/bye-more-save-more.webp"
import comboStore from "../../image/offerBar/combo-store.webp"
import dealsOfTheDay from "../../image/offerBar/deals-of-the-day.webp"
import eggsMeat from "../../image/offerBar/Eggs-meat.webp"
import newPass from "../../image/offerBar/newPass.webp"
import american from "../../image/bank/american.jpg"
import city from "../../image/bank/city.jpg"
import induslnd from "../../image/bank/induslnd.jpg"
import kotak from "../../image/bank/kotak.jpg"


import { Box, grid } from "@mui/system"
import { Grid } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Navbaar from "../header/Navbaar"
import Footer from "../footer/Footer"
import SixItemBar from "./SixItemBar"
import BannerSlid from "./BannerSlid"
import ProductCard from "./card/ProductCard"

const Beauty=["https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-makeup-splash_m_250223_01.jpg",
"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-summer-lotions_m_250223_02.jpg",
"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-scentful_m_250223_03.jpg",
"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-shaving_m_250223_04.jpg",
"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-min-30_m_250223_05.jpg",
"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-under-199_m_250223_06.jpg"]
function HomeMain() {
    return (<>
    
        <img src={topMeetBanner} alt="meet Offer" id="topMeetBaner" />
        
        
        <Box className="main">
        <Box sx={{display:"flex", justifyContent:"space-between", width: "95%" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /><ProductCard />
        </Box>
            <div className="top-bar">
                <img src={ayurveda} alt="ayurveda" />
                <img src={newPass} alt="newPass" />
                <img src={eggsMeat} alt="eggs Meat" />
                <img src={dealsOfTheDay} alt="deals Of The Day" />
                <img src={comboStore} alt="combo Store" />
                <img src={byeMoreSaveMore} alt="bye More Save More" />

            </div>
            <Box mt={5} sx={{ fontSize: 25 }}>Bank Offers</Box>
            <Grid className="bank" container
                direction="row"
                justifyContent="space-between"
                alignItems="center" width="95%" >
                <img src={american} alt="american" />
                <img src={city} alt="city" />
                <img src={induslnd} alt="induslnd" />
                <img src={kotak} alt="kotak" />
            </Grid>
        </Box>

        <SixItemBar header="Beauty & Hygiene" arr={Beauty}/>

        <BannerSlid />
        <Footer />
    </>)
}
export default HomeMain;