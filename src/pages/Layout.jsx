import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function Layout()
{
    return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <Box sx={{ flex: 1, margin:0,padding:0, width: "100%", height: "100%"}}>
            <Outlet/>
        </Box>
        <Footer/>
    </Box>
}