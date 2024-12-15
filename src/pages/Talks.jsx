import { Box, Typography } from "@mui/material";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import axios from "axios";
import Talk from "../components/Talk";
import CircularProgress from '@mui/material/CircularProgress';

export default function Talks()
{
    const [loading, setLoading] = useState(true);
    const [talks, setTalks] = useState([]);
    
    useEffect(() => {    
        const fetchTalks = async () => {
          setTalks([]);
          setLoading(true);
          const response = await axios.get(`${import.meta.env.VITE_URL}/api/talks`);
          console.log(response.data);
          setLoading(false);
          for(const talk of response.data)
          {
            setTalks(prevItems => [...prevItems, talk]);
          }
        }
        
        fetchTalks();
    }, []);
    
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Helmet>
            <title>Talks - Dit Coding Club</title>
            <meta name="description" content="See the latest talks of DIT Coding Club." />
        </Helmet>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '4em',marginY: "2rem" }}>
            Ομιλίες
        </Typography>
        {loading && <CircularProgress color={"secondary"}/>}
        {!loading && talks.map((talk) => {
            return <Talk talk={talk}/>
        })}
    </Box>
}