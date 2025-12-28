
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material"
import { Carousel } from "react-responsive-carousel";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//Impor all images frmo assets folder
const heroImages = Object.values(
    import.meta.glob("../../assets/img_carousel/*.{png,jpg,jpeg,svg}", {
        eager: true,
        import: "default",
    })
);

console.log(heroImages)
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
                    <Box key={images} height={"100vh"}>
                        <img
                            src={images}
                            alt={`main-${images}`}

                        />
                    </Box>
                )

            })}

        </Carousel>
    )
}

export default MainCarousel;