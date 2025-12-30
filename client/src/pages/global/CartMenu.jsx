import { Box, Divider, Button, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    toggleCart,
} from "../../state/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce(
        (total, item) => total + item.count * item.price,
        0
    );

    const getImageUrl = (item) => {
        if (item.image?.formats?.medium?.url) {
            return `http://localhost:1337${item.image.formats.medium.url}`;
        }

        if (item.image?.formats?.small?.url) {
            return `http://localhost:1337${item.image.formats.small.url}`;
        }

        if (item.image?.url) {
            return item.image.url;
        }

        return "";
    };

    return (

        <Box
            display={isCartOpen ? "block" : "none"}
            backgroundColor="rgba(0,0,0,0.4)"
            position="fixed"
            zIndex={10}
            width="100%"
            height="100%"
            top={0}
            left={0}
        >
            {/* SIDEBAR */}
            <Box
                position="fixed"
                right={0}
                top={0}
                width="max(400px, 30%)"
                height="100%"
                backgroundColor="white"
            >
                <Box padding="30px" height="100%" overflow="auto">
                    {/* HEADER */}
                    <FlexBox mb="20px">
                        <Typography variant="h3">
                            SHOPPING BAG ({cart.length})
                        </Typography>
                        <IconButton onClick={() => dispatch(toggleCart())}>
                            <CloseIcon />
                        </IconButton>
                    </FlexBox>

                    {/* CART ITEMS */}
                    <Box>
                        {cart.map((item) => (
                            <Box key={item.documentId}>
                                <FlexBox padding="15px 0" gap="15px">
                                    {/* IMAGE */}
                                    <Box flex="0 0 123px">
                                        <img
                                            alt={item.name}
                                            width="123"
                                            height="164"
                                            src={getImageUrl(item)}
                                        />
                                    </Box>

                                    {/* INFO */}
                                    <Box flex="1">
                                        <FlexBox mb="5px">
                                            <Typography fontWeight="bold">
                                                {item.name}
                                            </Typography>
                                            <IconButton
                                                onClick={() =>
                                                    dispatch(removeFromCart({ documentId: item.documentId }))
                                                }
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </FlexBox>

                                        <Typography mb="10px">
                                            {item?.shortDescription?.[0]?.children?.[0]?.text}
                                        </Typography>

                                        <FlexBox>
                                            {/* COUNTER */}
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                border={`1.5px solid ${shades.neutral[500]}`}
                                            >
                                                <IconButton
                                                    onClick={() =>
                                                        dispatch(decreaseCount({ documentId: item.documentId }))
                                                    }
                                                >
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>

                                                <Typography>{item.count}</Typography>

                                                <IconButton
                                                    onClick={() =>
                                                        dispatch(increaseCount({ documentId: item.documentId }))
                                                    }
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>

                                            <Typography fontWeight="bold">
                                                ${item.price}
                                            </Typography>
                                        </FlexBox>
                                    </Box>
                                </FlexBox>


                            </Box>

                        ))}
                    </Box>
                    {/* <Divider /> */}
                    {/* FOOTER */}
                    <Box mt="20px">
                        <FlexBox mb="20px">
                            <Typography fontWeight="bold">SUBTOTAL</Typography>
                            <Typography fontWeight="bold">${totalPrice}</Typography>

                        </FlexBox>

                        <Button
                            sx={{
                                backgroundColor: shades.primary[900],
                                color: "white",
                                borderRadius: 0,
                                minWidth: "100%",
                                padding: "20px 40px",
                            }}
                            onClick={() => {
                                navigate("/checkout");
                                dispatch(toggleCart());
                            }}
                        >
                            CHECKOUT
                        </Button>

                    </Box>

                </Box>

            </Box>

        </Box>

    );
};

export default CartMenu;
