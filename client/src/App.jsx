import { useEffect } from "react";
import { useLocation, Route, Routes, BrowserRouter } from "react-router-dom"
import Navbar from "./pages/global/Navbar";
import Home from "./pages/home/Home";
import ItemDetails from "./pages/itemDetails/ItemDetails";
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";
import CartMenu from "./pages/global/CartMenu";
import Footer from "./pages/global/Footer";
import { Box } from "@mui/material";


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null;
  }


  return (
    <BrowserRouter>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Navbar />

        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="item/:documentId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />

        </Routes>
        <CartMenu></CartMenu>
        <Footer></Footer>
      </Box>
    </BrowserRouter >
  )

}

export default App;
