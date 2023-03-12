import { Box } from "@mui/material"
import "./SixItemBar.css"


function SixItemBar({ header, arr }) {
    console.log(arr);
    return (<Box className="main"  >
    <Box mt={5} sx={{ fontSize: 25 }}>{header}</Box>
    <div className="sixItem">
    <img src={arr[0]} alt="" />
    <img src={arr[1]} alt="" />
    <img src={arr[2]} alt="" />
    <img src={arr[3]} alt="" />
    <img src={arr[4]} alt="" />
    <img src={arr[5]} alt="" />
    </div>
    </Box >)
}

export default SixItemBar