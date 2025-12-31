import { Box, Button, TextField, useMediaQuery, Typography, Divider } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"



const Checkout = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    }

    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


    const useSchema = yup.object().shape({
        firstName: yup.string().required("Required"),
        lastName: yup.string().required("Required"),
        email: yup.string().email("Invalid email").required("Required"),
        contact: yup
            .string()
            .matches(phoneRegExp, "phone is not valid")
            .required("Required"),
        address1: yup.string().required("Required"),
        address2: yup.string().notRequired(),
    });

    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return (
        <Box
            minHeight="75vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin={"60px"}
        >
            <Box width="80%" maxWidth="900px">
                <Typography variant="h2" gutterBottom>
                    Checkout
                </Typography>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={useSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h3" gutterBottom>
                                Shipping Information
                            </Typography>

                            <Divider sx={{ mb: 3 }} />

                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Contact number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name="contact"
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={touched.contact && errors.contact}
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address 1"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address1}
                                    name="address1"
                                    error={!!touched.address1 && !!errors.address1}
                                    helperText={touched.address1 && errors.address1}
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address 2"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address2}
                                    name="address2"
                                    error={!!touched.address2 && !!errors.address2}
                                    helperText={touched.address2 && errors.address2}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>

                            <Box display="flex" justifyContent={isNonMobile ? "flex-end" : "center"} mt={3}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        px: 4,
                                        py: 1.5,
                                        "&:hover": {
                                            backgroundColor: "#222",
                                        },
                                    }}
                                >
                                    Save this Address
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};


export default Checkout;