
import { Box, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import "./NewNav.css"
import logo from "../../image/logo1.jpg";
import Menu from "./model/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function NewNav() {


  //get the cart product array
  const basketProductArr = useSelector((state) => state.basketProductArr);
  let basketBadgeCount = basketProductArr.length;

  return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <header>
      <nav>
        <div className="left">
          <div className="navlogo" >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: 'block' } }}
            >
              <img src={logo} alt='logo' />
            </Typography>
            <span className='logo_div' style={{ display: "flex", flexDirection: 'column' }}>
              <Box className="logo_text" sx={{ color: "red" }} >big</Box>
              <Box className="logo_text" sx={{ color: "black" }}>basket</Box>
            </span>
          </div>

          <div className="nav_searchbaar">
            {/* <input type="text" name=""
            onChange={(e) => getText(e.target.value)}
            placeholder="Search Your Products" />
          <div className="search_icon">
            <i className="fas fa-search" id="search"></i>
          </div> */}



            <input type="text" name=""
              // onChange={(e) => getText(e.target.value)}
              placeholder="Search Your Products" />

            <IconButton sx={{ m: "0", p: "0" }}>
              <SearchIcon id="search_icon" />
            </IconButton>
          </div>

        </div>

        <div className="right">

          <Menu />

          <Link to="/basket" >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              //   onClick={handleProfileMenuOpen}
              color="black"
            >
              {basketBadgeCount > 0 ? (<Badge badgeContent={basketBadgeCount} color="error">
                <ShoppingCartIcon style={{ fontSize: 50 }} />
              </Badge>) : ""}
            </IconButton>
          </Link>
        </div>
      </nav>

      <div className="nav_searchbaar nav_searchbaar_down">

        <input type="text" name=""
          // onChange={(e) => getText(e.target.value)}
          placeholder="Search Your Products" />

        <IconButton sx={{ m: "0", p: "0" }}>
          <SearchIcon id="search_icon" />
        </IconButton>
      </div>

    </header>
  </div>)
}

export default NewNav;