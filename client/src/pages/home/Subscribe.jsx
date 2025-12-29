import { Box, Typography, InputBase, Button, useMediaQuery } from "@mui/material"
import { useState } from "react";


const Subscribe = () => {
    const inNonMobile = useMediaQuery("(min-width: 1200px)")
    const [email, setEmail] = useState("")
    console.log(email)

    return (
        <Box width={"100%"} margin={"75px auto"} textAlign={"center"}>
            <Typography variant="h2">Join the newsletter!</Typography>
            <Typography variant="h3">Subscribe to receive updates, news, and useful insights.</Typography>

            <Box
                backgroundColor="grey"
                margin={"30px auto"}
                padding={"10px"}
                width={inNonMobile ? "30%" : "85%"}
                display={"flex"}
                alignItems={"center"}>
                <InputBase placeholder="Enter Email:"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    sx={{
                        width: '100%',
                        color: 'white',
                        padding: '5px',
                        marginRight: "15px",
                        border: '1px solid white',
                        fontSize: '16px',
                        '& input::placeholder': {
                            color: '#ddd',
                            opacity: 1,
                        },
                    }}
                >
                </InputBase>
                <Button variant="contained" >Subscribe</Button>
            </Box>
        </Box>
    )
}


export default Subscribe;

