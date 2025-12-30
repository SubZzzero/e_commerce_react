import { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state/slices/cartSlice";
import { STATIC_ITEMS } from "../../data/items";
import Item from "../../components/Item"



const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all")
    const items = useSelector((state) => state.cart.items) || []

    const isNonMobile = useMediaQuery("(max-width:600px)")

    const handleCgange = (event, newValue) => {
        setValue(newValue)
    }

    async function getItems() {
        try {
            const res = await fetch(
                "http://localhost:1337/api/items?populate=image"
            );
            if (!res.ok) throw new Error();
            const json = await res.json();
            dispatch(setItems(json.data));
        } catch (error) {
            alert("Using static items");
            dispatch(setItems(STATIC_ITEMS));
        }
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
        <Box width={"80%"} margin={"55px auto"}>

            <Typography
                variant="h1"
                textAlign={"center"}
                paddingTop={"15px"}
                sx={{ cursor: "default" }}>Our Products</Typography>

            <Tabs

                onChange={handleCgange}
                value={value}
                textColor="secondary"
                indicatorColor={{ sx: { display: isNonMobile ? "secondary" : "none" } }}
                centered
                sx={{
                    m: "35px",
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                    },
                }}
            >
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="All" value={"all"} ></Tab>
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="New Arrivals" value={"newArrivals"}></Tab>
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="Best Sellers" value={"bestSellers"}></Tab>
                <Tab sx={{ fontSize: "18px", fontWeight: "bold" }} label="Top Rated" value={"topRated"}></Tab>
            </Tabs>



            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fit, 300px)"
                justifyContent="space-around"
                rowGap="35px"
                columnGap="5.33%"
                margin="0 auto"
            >

                {/* CHANGING CATEGORY */}
                {value === "all" &&
                    items.map((item) => (
                        <Item item={item} key={item.id} />
                    ))
                }

                {value === "newArrivals" &&
                    newArrivalsItems.map((item) => (
                        <Item item={item} key={item.id} />
                    ))
                }

                {value === "bestSellers" &&
                    bestSeelrsItems.map((item) => (
                        <Item item={item} key={item.id} />
                    ))
                }

                {value === "topRated" &&
                    topRatedItems.map((item) => (
                        <Item item={item} key={item.id} />
                    ))
                }

            </Box>
        </Box >
    )
}



export default ShoppingList;