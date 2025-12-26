import { createTheme } from "@mui/material/styles";

export const shades = {
    primary: {
        100: "#d6d6d6",
        200: "#adadad",
        300: "#858585",
        400: "#5c5c5c",
        500: "#333333",
        600: "#292929",
        700: "#1f1f1f",
        800: "#141414",
        900: "#0a0a0a",
    },
    secondary: {
        100: "#f5ccd9",
        200: "#eb99b2",
        300: "#e2668c",
        400: "#d83365",
        500: "#ce003f",
        600: "#a50032",
        700: "#7c0026",
        800: "#520019",
        900: "#29000d",
    },
    neutral: {
        100: "#fffbcf",
        200: "#fef69f",
        300: "#fef270",
        400: "#fded40",
        500: "#fde910",
        600: "#caba0d",
        700: "#988c0a",
        800: "#655d06",
        900: "#332f03",
    },
};

export const theme = createTheme({
    palette: {
        primary: {
            main: shades.primary[500],
        },
        secondary: {
            main: shades.secondary[500],
        },
        neutral: {
            light: shades.neutral[100],
            main: shades.neutral[500],
            dark: shades.neutral[700],
        },
    },

    typography: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: 11, // px

        h1: {
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 48, // px
            fontWeight: 400,
            letterSpacing: "0.04em",
        },

        h2: {
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 36,
            fontWeight: 400,
            letterSpacing: "0.04em",
        },

        h3: {
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "0.04em",
        },

        h4: {
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: "0.04em",
        },
    },
});
