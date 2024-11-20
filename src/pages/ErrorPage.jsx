import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorPage()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Box
            component="img"
            src="/error-cat.png"
            alt="Logo"
            sx={{
                height: "30vh",
                width: "30vh",
                marginY: "1vh",
                alignSelf: "center"
            }}
        />
        <Typography variant="h1" component={"h1"} textAlign={"center"} alignSelf={"center"} sx={{alignSelf:"center"}}>
            404 Not Found
        </Typography>
        <Button
            component={Link}
            to={"/"}
            variant="contained" color="secondary" sx={{width: {md: "35%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "2em", marginY: "2rem",}}>
            ΠΙΣΩ
        </Button>
    </Box>
}