import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Divider, Button, IconButton, Typography, useTheme } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import { shades } from "../theme";
import { addToCart } from "../state/slices/cartSlice";

import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const { category, price, image, name } = item;
    const [isHovered, setIsHovered] = useState(false);



    return (
        <Box width={width}>
            <Box
                position="relative"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}

            >
                <img
                    alt={name}
                    width="300px"
                    height="400px"
                    src={
                        image?.formats?.medium?.url
                            ? `http://localhost:1337${image.formats.medium.url}`
                            : ""
                    }
                    onClick={() => navigate(`/item/${item.documentId}`)}
                    style={{ cursor: "pointer", display: "block" }}
                />
                <Box
                    display={isHovered ? "block" : "none"}
                    position="absolute"
                    bottom="10%"
                    left="0"
                    width="100%"
                    padding="0 5%"
                >
                    <Box display="flex" justifyContent="space-between">
                        <Box
                            display="flex"
                            alignItems="center"
                            backgroundColor={shades.neutral[100]}
                            borderRadius="3px"

                        >
                            <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <Typography color={shades.primary[300]}>{count}</Typography>
                            <IconButton onClick={() => setCount(count + 1)}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <Button
                            onClick={() => {
                                dispatch(addToCart({ item: { ...item, count } }));
                            }}
                            sx={{ backgroundColor: shades.primary[300], color: "white" }}
                        >
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box border={"1px solid grey"} borderTop={"none"} padding={"5px"}>
                <Typography variant="subtitle2" color={shades.neutral.dark}>
                    {category
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                </Typography>
                <Typography>{name}</Typography>
                <Typography fontWeight="bold">${price}</Typography>
            </Box>
        </Box>
    )
}


export default Item;