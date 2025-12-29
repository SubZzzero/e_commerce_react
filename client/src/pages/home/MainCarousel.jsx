
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material"
import { Carousel } from "react-responsive-carousel";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from "../../theme";

//Impor all images from assets folder
const heroImages = Object.values(
    import.meta.glob("../../assets/img_carousel/*.{png,jpg,jpeg,svg}", {
        eager: true,
        import: "default",
    })
);


const MainCarousel = () => {

    const inNonMobile = useMediaQuery("(min-width: 1200px)")
    return (

        <>

            {inNonMobile ? (
                <Carousel
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) => (
                        <IconButton
                            onClick={onClickHandler}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "0",
                                color: "white",
                                padding: "5px",
                                zIndex: "10",
                            }}
                        >
                            <NavigateBeforeIcon sx={{ fontSize: 60 }} />
                        </IconButton>
                    )}
                    renderArrowNext={(onClickHandler, hasNext, label) => (
                        <IconButton
                            onClick={onClickHandler}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                right: "0",
                                color: "white",
                                padding: "5px",
                                zIndex: "10",
                            }}
                        >
                            <NavigateNextIcon sx={{ fontSize: 60 }} />
                        </IconButton>
                    )}
                >

                    {heroImages.map((images) => {
                        return (


                            <Box key={images} >
                                <img
                                    src={images}
                                    alt={`main-${images}`}
                                    style={{
                                        width: "100%",
                                        height: "100vh",
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                        backgroundAttachment: "fixed",
                                    }}
                                />

                                <Box
                                    position="absolute"
                                    top="35%"
                                    left="10%"
                                    padding="24px"
                                    backgroundColor="rgba(0, 0, 0, 0.4)"
                                    color="white"
                                    sx={{ cursor: "default" }}
                                >
                                    <Box
                                        display="inline-block"
                                        textAlign="right"
                                    >
                                        <Typography
                                            fontSize="120px"
                                            fontWeight={600}
                                            lineHeight="1"
                                        >
                                            TRENDY FASHION
                                        </Typography>

                                        <Typography
                                            fontSize="85px"
                                            fontWeight={300}
                                            lineHeight="1"
                                            position={"relative"}
                                            right={"4px"}
                                        >
                                            COLLECTION
                                        </Typography>
                                    </Box>


                                    <Box
                                        mt="30px"
                                        mb="20px"
                                        width="70px"
                                        height="1px"
                                        backgroundColor="white"
                                    />


                                    <Typography
                                        fontSize="16px"
                                        lineHeight="1.6"
                                        maxWidth="360px"
                                    >
                                        Modern clothing focused on simplicity,
                                        comfort and everyday wear.
                                    </Typography>
                                </Box>


                                <Box
                                    position="absolute"
                                    top="50%"
                                    right="60px"
                                    sx={{
                                        width: "1px",
                                        height: "120px",
                                        backgroundColor: "white",
                                        opacity: 0.6,
                                        transform: "translateY(-50%)",
                                    }}
                                />


                                <Box
                                    position="absolute"
                                    top="50%"
                                    right="30px"
                                    sx={{
                                        transform: "translateY(-50%) rotate(90deg)",
                                        transformOrigin: "center",
                                        cursor: "default",
                                    }}
                                >
                                    <Typography
                                        fontSize="12px"
                                        letterSpacing="4px"
                                        color="white"
                                    >
                                        EST. 2025
                                    </Typography>
                                </Box>


                                <Box
                                    position="absolute"
                                    bottom="40px"
                                    left="10%"
                                    color="white"
                                    sx={{ cursor: "default" }}
                                >
                                    <Typography
                                        fontSize="12px"
                                        letterSpacing="2px"
                                        opacity={0.7}
                                    >
                                        Designed for modern lifestyle
                                    </Typography>
                                </Box>
                            </Box>


                        )

                    })}

                </Carousel>



            ) : null}


        </>
    )
}

export default MainCarousel;