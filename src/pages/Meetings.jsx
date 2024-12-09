import { Box, Typography } from "@mui/material";
import { Helmet } from 'react-helmet';

export default function Meetings()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Helmet>
            <title>Meetings - Dit Coding Club</title>
            <meta name="description" content="See the schedule and meetings of DIT Coding Club." />
        </Helmet>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '4em',marginY: "2rem" }}>
            Πρόγραμμα
        </Typography>
        <Box 
        sx={{
            width: { xs: '100%', sm: "65%", md: '40%' },
            height: '500px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
        }}
        >
        <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FAthens&showPrint=0&src=NzU4ZTlmY2NiMGM0NjAxYmIzMzNmYWI1MjZkNGUzMzIyNGQ0YTBjYWI4NjllZTIwMWEyYWYzNzkxMTIzNDUwYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
            style={{
            width: '100%',
            height: '100%',
            border: 'none',
            }}
        />
        </Box>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '4em',marginTop: "2rem" }}>
            Χάρτης Σχολής
        </Typography>

        <Box
            component="img"
            src="/map.png"
            alt="Logo"
            sx={{
                height: "45vh",
                width: { xs: '100%', sm: "65%", md: '40%' },
                marginY: "2rem",
                alignSelf: "center"
            }}
        />
    </Box>
}