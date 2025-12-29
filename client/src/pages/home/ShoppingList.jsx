import { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state/slices/cartSlice";
import Item from "../../components/Item"



const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all")
    const items = useSelector((state) => state.cart.items)

    const isNonMobile = useMediaQuery("(max-width:600px)")

    const handleCgange = (event, newValue) => {
        setValue(newValue)
    }

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data))
        console.log(itemsJson.data[0])
    }

    useEffect(() => {
        getItems()
    }, [])

    const topRatedItems = items.filter(
        (item) => item.category === "topRated"
    )

    const bestSeelrsItems = items.filter(
        (item) => item.category === "bestSellers"
    )

    const newArrivalsItems = items.filter(
        (item) => item.category === "newArrivals"
    )




    return (
        <Box width={"80%"} margin={"50px auto"}>

            <Typography variant="h1" textAlign={"center"} sx={{ cursor: "default", marginBottom: "20px" }}>Our Products</Typography>

            <Tabs

                onChange={handleCgange}
                value={value}
                textColor="secondary"
                indicatorColor="secondary"
                centered
            >
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="All" value={"all"} ></Tab>
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="New Arrivals" value={"newArrivals"}></Tab>
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="Best Sellers" value={"bestSellers"}></Tab>
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="Top Rated" value={"topRated"}></Tab>
            </Tabs>
        </Box >
    )
}



export default ShoppingList;