
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material"
import { Carousel } from "react-responsive-carousel";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from "../../theme";

//Impor all images frmo assets folder
const heroImages = Object.values(
    import.meta.glob("../../assets/img_carousel/*.{png,jpg,jpeg,svg}", {
        eager: true,
        import: "default",
    })
);


const MainCarousel = () => {

    const inNonMobile = useMediaQuery("(min-width: 600px)")
    return (
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
                                height: "921px",
                                objectFit: "cover",
                                objectPosition: "center top",
                                backgroundAttachment: "fixed",
                            }}
                        />

                        <Box
                            color="white"
                            padding="20px"
                            borderRadius="1px"
                            textAlign="left"
                            backgroundColor="rgb(0, 0, 0, 0.4)"
                            position="absolute"
                            top="35%"
                            left={inNonMobile ? "10%" : "0"}
                            right={inNonMobile ? undefined : "0"}
                            margin={inNonMobile ? undefined : "0 auto"}
                            maxWidth={inNonMobile ? undefined : "240px"}
                            sx={{ cursor: "default" }}
                        >
                            <Typography fontSize={"60px"} color="white">TRENDY FASHION</Typography>
                            <Typography fontSize={"38px"} color="white" sx={{ textAlign: "center" }}>COLLECTION</Typography>

                        </Box>

                    </Box>


                )

            })}

        </Carousel>
    )
}

export default MainCarousel;