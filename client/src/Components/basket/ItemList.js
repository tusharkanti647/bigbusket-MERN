
import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import "./ItemList.css";
import { useState } from "react";


function ItemList() {
    const [itemNumber, setItemNumber] = useState(1);

    return (<>
        <Box className="cart-table-body">
            <Box sx={{ width: "52%" }} className="cart-table-body-left">
                <div style={{}}>
                    <img src="https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg"></img>
                    <div>
                        <h3>Fresho Cauliflower (Medium) / Phulcop</h3>
                        <h4>1 pc (approx. 400 to 600 g)</h4>
                    </div>
                </div>
            </Box>
            <Box className="cart-table-body-right">
                <div>
                    <h3>Rs. 25.50</h3>
                    <h4><strike>Rs. 38.60</strike></h4>
                </div>

                <div className="item-count">
                    <button onClick={() => setItemNumber(itemNumber + 1)}><AddIcon /></button>
                    <input type="number" value={itemNumber} />
                    <button onClick={() => setItemNumber(itemNumber - 1)}><RemoveIcon /></button>
                </div>

                <div>
                    <h3>Rs.25.50</h3>
                    <CloseIcon sx={{ color: "#888888", cursor: "pointer" }} />
                </div>
                <h3>Rs.13.10</h3>
            </Box>
        </Box>
    </>)
}

export default ItemList;