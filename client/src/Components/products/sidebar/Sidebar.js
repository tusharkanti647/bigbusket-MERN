import "./Sidebar.css";
import { Box, createTheme, Grid } from '@mui/material';

function Sidebar() {
    return (
        <Box sx={{ width: "25%", borderRight: "solid 0.5px #888888", color: "#888888" }} className="sidebar-category">
            <Box>
                <h4> Category</h4>
                <p>
                    Fruits & Vegetables  <br />
                    Foodgrains, Oil & Masala  <br />
                    Bakery, Cakes & Dairy  <br />
                    Beverages  <br />
                    Snacks & Branded Foods  <br />
                    Beauty & Hygiene  <br />
                    Cleaning & Household  <br />
                    Kitchen, Garden & Pets  <br />
                    Eggs, Meat & Fish  <br />
                    Gourmet & World Food  <br />
                    Baby Care  <br />
                    View All  <br />
                    Fresh Vegetables  <br />
                    Herbs & Seasonings  <br />
                    Fresh Fruits  <br />
                    Organic Fruits & Vegetables  <br />
                    Exotic Fruits & Veggies  <br />
                    Cuts & Sprouts  <br />
                    Flower Bouquets, Bunches  <br />
                    Potato, Onion & Tomato  <br />
                    Cucumber & Capsicum  <br />
                    Root Vegetables  <br />
                    Gourd, Pumpkin, Drumstick  <br />
                    Beans, Brinjals & Okra  <br />
                    Cabbage & Cauliflower  <br />
                    Leafy Vegetables  <br />
                    Specialty  <br />

                </p>
            </Box>

            <Box>
                <h4>Brands</h4>
                <p>
                    <label class="label">
                        <input type="checkbox" name="checkbox" value="text" /> Text
                    </label><br />
                    Fresho<br />
                    Fresho Potato, Onion & Tomato
                </p>
            </Box>
        </Box>
    )
}

export default Sidebar;