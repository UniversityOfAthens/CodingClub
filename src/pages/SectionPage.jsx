import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import formatFileName from "../general/formatFileName";
import axios from "axios";
import { useParams } from "react-router";
import { Helmet } from 'react-helmet';

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

  useEffect(() => {
    const getAnnouncmenets = async () => {
        setAnnouncements([]);
        console.log("setting announce");
        const response = await axios.get(
            `http://localhost:3000/api/announcements/${sectionId}`
        )
        const announcementsArray = response.data;
        for(const announcement of announcementsArray)
        {
          setAnnouncements(prevItems => [...prevItems, {id: announcement.id, description: announcement.content}]);
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
          width: { xs: "100%", sm: "80%", lg: "45%" },
        }}
      >
        {announcements.map((announcement, index) => (
          <Announcement
            title={""}
            description={announcement.description}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
