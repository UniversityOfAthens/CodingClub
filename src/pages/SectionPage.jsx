import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import axios from "axios";
import { useParams } from "react-router";
import { Helmet } from 'react-helmet';
import CircularProgress from '@mui/material/CircularProgress';


const renderData = {
    gamedev: {title: "Game Development", image: "gd-logo"},
    cp: {title: "Competitive Programming", image: "cp-logo"},
    security: {title: "Security", image: "se-logo"},
    opensource: {title: "Open Source", image: "os-logo"},
    hackathons: {title: "Hackathons", image: "h-logo"},
    general: {title: "Γενικές Ανακοινώσεις", image: "logo"},
}

export default function SectionPage() {
  const [announcements, setAnnouncements] = useState([]);
  let {sectionId} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnnouncmenets = async () => {
        setAnnouncements([]);
        setLoading(true);
        const response = await axios.get(
            `${import.meta.env.VITE_URL}/api/announcements/${sectionId}`
        )
        setLoading(false);
        const announcementsArray = response.data;
        for(const announcement of announcementsArray)
        {
          setAnnouncements(prevItems => [...prevItems, announcement]);
        }
    }
    getAnnouncmenets();
  }, [sectionId]); // everytime we load the page or change section id

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Helmet>
        <title>{`${renderData[sectionId].title} - Dit Coding Club`}</title>
        <meta name="description" content={`See the latest about ${renderData[sectionId].title} of DIT Coding Club.`} />
      </Helmet>
      <Box
        component="img"
        src={`/${renderData[sectionId].image}.png`}
        alt="Logo"
        sx={{
          height: "20vh",
          width: "20vh",
          marginY: "2rem",
          alignSelf: "center",
        }}
      />
      <Typography
        variant="h1"
        component={"h1"}
        textAlign={"center"}
        marginY={"3rem"}
        sx={{ fontSize: "3rem" }}
      >
        {renderData[sectionId].title}
      </Typography>
      <Box
        sx={{
          alignSelf: "center",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: { xs: "100%", sm: "80%", lg: "45%" },
        }}
      >
        {loading && <CircularProgress color={"secondary"}/>}
        {!loading && announcements.map((announcement, index) => (
          <Announcement
            title={announcement.title}
            description={announcement.content}
            date={announcement.date}
            imagesUrl={announcement.imagesUrl}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
