import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            marginTop={"auto"}
            backgroundColor="black"
            padding="30px 0"
            sx={{ cursor: "default" }
            }>
            <Box
                width="80%"
                margin="0 auto"
                display="flex"

                justifyContent="space-between"
                flexWrap="wrap"
                gap="20px"
            >
                {/* LEFT */}
                <Box>
                    <Typography color="white" fontWeight="bold" mb="10px">
                        TRENDY FASHION
                    </Typography>
                    <Typography color="gray" fontSize="14px">
                        Premium clothing for everyday style.
                    </Typography>
                </Box>

                {/* CENTER */}
                <Box>
                    <Typography color="white" fontWeight="bold" mb="10px">
                        INFORMATION
                    </Typography>
                    <Typography color="gray" fontSize="14px">
                        About Us
                    </Typography>
                    <Typography color="gray" fontSize="14px">
                        Contact
                    </Typography>
                    <Typography color="gray" fontSize="14px">
                        Privacy Policy
                    </Typography>
                </Box>

                {/* RIGHT */}
                <Box>
                    <Typography color="white" fontWeight="bold" mb="10px">
                        CONTACT
                    </Typography>
                    <Typography color="gray" fontSize="14px">
                        Email: support@trendyfashion.com
                    </Typography>
                    <Typography color="gray" fontSize="14px">
                        Phone: +1 234 567 890
                    </Typography>
                </Box>
            </Box>

            {/* BOTTOM */}
            <Box mt="30px" textAlign="center">
                <Typography color="gray" fontSize="12px">
                    © {new Date().getFullYear()} Trendy Fashion. All rights reserved.
                </Typography>
            </Box>
        </Box >
    );
};

export default Footer;
