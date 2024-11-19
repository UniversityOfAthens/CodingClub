import { Box, Typography, Button } from "@mui/material"

export default function Home()
{
    return <Box sx={{textAlign: "center", display:"flex", flexDirection: "column"}}>
        <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
                height: 250,
                width: 250,
                marginY: "1rem",
                alignSelf: "center"
            }}
        />
        <Typography             
            sx={{  
                width: "50%",
                textAlign: "center",
                alignContent: "center",
                alignSelf: "center",
                marginY: "1rem",
                fontSize: {md: "1.5em", xs: "1.1em"}
            }}>
            Το Coding Club είναι μια κοινότητα φοιτητών του Τμήματος Πληροφορικής και Τηλεπικοινωνιών του Πανεπιστημίου Αθηνών που στοχεύει στη μάθηση, 
            συνεργασία και ανάπτυξη των τεχνολογικών δεξιοτήτων
        </Typography>
        <Button variant="contained" color="secondary" sx={{width: {md: "15%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "2em", marginY: "2rem",}}>
            ΜΠΑΙΝΩ
        </Button>
    </Box>
}