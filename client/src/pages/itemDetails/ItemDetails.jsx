import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, IconButton, Typography, Tabs, Tab } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { shades } from "../../theme";
import { useParams } from "react-router-dom";
import { addToCart } from "../../state/slices/cartSlice";
import Item from "../../components/Item"


const ItemDetails = () => {
    const dispatch = useDispatch();
    const { documentId } = useParams();
    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);

    const [items, setItems] = useState([])
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }




    async function getItem() {
        const res = await fetch(
            `http://localhost:1337/api/items/${documentId}?populate=image`,
            { method: "GET" }
        );

        if (!res.ok) {
            console.error("FETCH ERROR", res.status);
            return;
        }

        const json = await res.json();
        setItem(json.data);
        console.log(json)
    }


    async function getItems() {
        const items = await fetch(
            `http://localhost:1337/api/items?populate=image`,
            {
                method: "GET",
            }
        );
        const itemsJson = await items.json();
        setItems(itemsJson.data.id);
    }

    useEffect(() => {
        getItem();
        getItems();
    }, [documentId]);


    return (
        <>

            <Box>

            </Box>


        </>
    )
}


export default ItemDetails;