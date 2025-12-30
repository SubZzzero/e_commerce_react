import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../state/slices/cartSlice";
import { Box, Typography, IconButton, Badge } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { shades } from "../../theme"

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../assets/logo.png"




const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)



    return (


        <Box display="flex"
            alignItems="center"
            width="100%"
            height="60px"
            // backgroundColor="rgba(255, 255, 255, 0.95)"
            backgroundColor="white"
            color="black"
            position="fixed"
            top="0"
            left="0"
            zIndex="1"

        >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} margin={"0 auto"} width={"80%"}  >

                <Box onClick={() => navigate("/")} component="img" src={Logo} alt="Company Logo" sx={{ height: 40, marginRight: 2, cursor: "pointer" }} />

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0 15px",
                        zIndex: "2",

                        "& .MuiIconButton-root": {
                            color: shades.primary[900],
                        },

                    }}
                >
                    {/* <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        <PersonIcon />
                    </IconButton> */}

                    <Badge color="secondary" badgeContent={cart.length} invisible={cart.length === 0} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>
                        <IconButton onClick={() => dispatch(toggleCart())} >
                            <ShoppingBagIcon />
                        </IconButton>
                    </Badge>

                    {/* <IconButton>
                        <MenuIcon />
                    </IconButton> */}
                </Box>

            </Box>



        </Box >)
}

export default Navbar;