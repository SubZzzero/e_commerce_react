import { Box, Typography } from "@mui/material"
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { shades } from "../../theme"

const Home = () => {
    return (
        <div className="home">
            <MainCarousel></MainCarousel>
            <ShoppingList></ShoppingList>
            <Subscribe></Subscribe>
        </div>
    )
}

export default Home;
