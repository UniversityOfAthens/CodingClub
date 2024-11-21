import { Box, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"


export default function HomeSection({imageName, title, description, link, isReverse})
{
    return (
    <Box sx={{display: "flex", alignSelf: "center", width: { xs: '100%', md: '75%' }, flexDirection: { xs: 'column', md: isReverse ? "row-reverse" : "row"  }}}>
        <Box
            component="img"
            src={imageName}
            alt="Logo"
            sx={{
                height: 200,
                width: 200,
                margin: "1rem",
                alignSelf: "center"
            }}
        />
        <Box>
            <Typography variant="h2" component={"h2"}>{title}</Typography>
            <Typography sx={{  
                marginY: "1rem",
                paddingX: {md: "1.5rem", xs: "0em"},
                fontSize: {md: "1.5em", xs: "1em"}
            }}>
                {description}
            </Typography>
            <Button
                component={Link}
                to={link}
                variant="outlined" color="secondary" sx={{width: {md: "35%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "16px", marginY: "2rem", textTransform:"none", fontWeight: "bold"}}>
                Περισσότερα
            </Button>
        </Box>
    </Box>)
}