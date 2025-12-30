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
import { STATIC_ITEMS } from "../../data/items";

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
        try {
            const res = await fetch(
                `http://localhost:1337/api/items/${documentId}?populate=image`
            );
            if (!res.ok) throw new Error();
            const json = await res.json();
            setItem(json.data);
        } catch {
            const localItem = STATIC_ITEMS.find(
                (i) => i.documentId === documentId
            );
            setItem(localItem);
        }
    }


    async function getItems() {
        try {
            const res = await fetch(
                "http://localhost:1337/api/items?populate=image"
            );
            if (!res.ok) throw new Error();
            const json = await res.json();
            setItems(json.data);
        } catch {
            setItems(STATIC_ITEMS);
        }
    }


    useEffect(() => {
        getItem();
        getItems();
    }, [documentId]);

    useEffect(() => {
        setCount(1);
    }, [documentId]);

    useEffect(() => {
        setValue("description");
    }, [documentId]);

    if (!item) return <Box backgroundColor="white" height={"100vh"}></Box>;

    const imageUrl = item.image?.formats?.medium?.url
        ? `http://localhost:1337${item.image.formats.medium.url}`
        : item.image?.formats?.small?.url
            ? `http://localhost:1337${item.image.formats.small.url}`
            : item.image?.url || "";

    return (
        <Box width="80%" m="80px auto">
            {/* TOP (CENTERED) */}
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="flex-start"
                gap="40px"
                marginTop={"110px"}
            >
                {/* LEFT — IMAGE */}
                <Box flex="0 1 500px" display="flex" justifyContent="center">
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={item.name}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "1200px",
                                objectFit: "contain",
                            }}
                        />
                    )}
                </Box>

                {/* RIGHT — INFO */}
                <Box flex="0 1 500px">
                    {/* TITLE / PRICE / TEXT */}
                    <Box mb={3}>
                        <Typography variant="h3" sx={{ fontWeight: 700, lineHeight: 1.15 }}>
                            {item.name}
                        </Typography>

                        <Typography
                            sx={{ mt: 1.2, fontSize: "22px", fontWeight: 800 }}
                        >
                            ${item.price}
                        </Typography>

                        <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.7 }}>
                            {item?.longDescription?.[0]?.children?.[0]?.text}
                        </Typography>
                    </Box>

                    {/* COUNTER + CART */}
                    <Box display="flex" alignItems="center" gap={2} mt={3}>
                        <Box
                            display="flex"
                            alignItems="center"
                            border={`1px solid black`}
                            borderRadius="12px"
                            px={1}
                            py={0.5}
                        >
                            <IconButton
                                onClick={() => setCount(Math.max(count - 1, 1))}
                                size="small"
                            >
                                <RemoveCircleOutlineIcon />
                            </IconButton>

                            <Typography
                                sx={{
                                    width: "32px",
                                    textAlign: "center",
                                    fontWeight: 700,
                                }}
                            >
                                {count}
                            </Typography>

                            <IconButton onClick={() => setCount(count + 1)} size="small">
                                <AddIcon />
                            </IconButton>
                        </Box>

                        <Button
                            sx={{
                                backgroundColor: "#222",
                                color: "white",
                                borderRadius: "12px",
                                minWidth: "180px",
                                padding: "12px 28px",
                                fontWeight: 800,
                                "&:hover": { backgroundColor: "#111" },
                            }}
                            onClick={() =>
                                dispatch(addToCart({ item: { ...item, count } }))
                            }
                        >
                            ADD TO CART
                        </Button>
                    </Box>

                </Box>
            </Box>

            {/* TABS */}
            <Box m="20px 0">
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="DESCRIPTION" value="description" />
                    <Tab label="REVIEWS" value="reviews" />
                </Tabs>
            </Box>

            <Box textAlign={"center"}>
                {value === "description" &&
                    item.longDescription?.map((block, i) => (
                        <Typography key={i}>
                            {block.children.map((c) => c.text).join("")}
                        </Typography>
                    ))}

                {value === "reviews" && (
                    <Typography>Reviews coming soon…</Typography>
                )}
            </Box>

            {/* RELATED */}
            <Box mt="50px">
                <Typography variant="h3" fontWeight="bold">
                    Related Products
                </Typography>

                <Box
                    mt="20px"
                    display="flex"
                    flexWrap="wrap"
                    columnGap="1.33%"
                    justifyContent="space-between"
                >
                    {items
                        .filter((i) => i.documentId !== item.documentId)
                        .slice(0, 4)
                        .map((i) => (
                            <Item key={i.documentId} item={i} />
                        ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ItemDetails;