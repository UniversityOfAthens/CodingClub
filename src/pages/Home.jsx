import { Box, Typography, Button, Divider } from "@mui/material"

export default function Home()
{
    return <Box sx={{textAlign: "center", display:"flex", flexDirection: "column"}}>
        <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
                height: 400,
                width: 400,
                marginTop: "4rem",
                marginBottom: "2rem",
                alignSelf: "center"
            }}
        />
        <Typography             
            sx={{  
                width: { xs: '100%', md: '50%' },
                textAlign: "center",
                alignContent: "center",
                alignSelf: "center",
                marginY: "1rem",
                paddingX: "1rem",
                fontSize: {md: "2em", xs: "1.1em"}
            }}>
            Το Coding Club είναι μια κοινότητα φοιτητών του Τμήματος Πληροφορικής και Τηλεπικοινωνιών του Πανεπιστημίου Αθηνών που στοχεύει στη μάθηση, 
            συνεργασία και ανάπτυξη των τεχνολογικών δεξιοτήτων
        </Typography>
        <Button variant="contained" color="secondary" href="https://discord.gg/bS2VKCVQWc" target="_blank" sx={{width: {md: "15%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "2em", marginY: "2rem",}}>
            ΜΠΕΣ
        </Button>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <Box sx={{display: "flex", alignSelf: "center", width: { xs: '100%', md: '50%' }, flexDirection: { xs: 'column', md: 'row' }}}>
            <Box
                component="img"
                src="/eh-logo.png"
                alt="Logo"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "1rem",
                    alignSelf: "center"
                }}
            />
            <Box>
                <Typography variant="h2" component={"h2"}>Ethical Hacking</Typography>
                <Typography sx={{  
                    marginY: "1rem",
                    paddingX: {md: "1.5rem", xs: "0em"},
                    fontSize: {md: "1.75em", xs: "1.1em"}
                }}>
                    Βουτήξτε στον κόσμο της ασφάλειας πληροφοριακών συστημάτων και μάθετε πώς να εντοπίζετε και να διορθώνετε ευπάθειες.
                </Typography>
                <Button variant="outlined" color="secondary" href="https://discord.gg/bS2VKCVQWc" target="_blank" sx={{width: {md: "35%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "2em", marginY: "2rem",}}>
                    ΧΑΚΑΡΕ
                </Button>
            </Box>
        </Box>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <Box sx={{display: "flex", alignSelf: "center", width: { xs: '100%', md: '50%' }, flexDirection: { xs: 'column', md: 'row-reverse' }}}>
            <Box
                component="img"
                src="/gd-logo.png"
                alt="Logo"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "1rem",
                    alignSelf: "center"
                }}
            />
            <Box>
                <Typography variant="h2" component={"h2"}>Game Development</Typography>
                <Typography sx={{  
                    marginY: "1rem",
                    paddingX: {md: "1.5rem", xs: "0em"},
                    fontSize: {md: "1.5em", xs: "1.1em"}
                }}>
                    Εξερευνήστε τη δημιουργία παιχνιδιών από το μηδέν! Από την ανάπτυξη ιστοριών και σχεδιασμού μέχρι την κωδικοποίηση και την κυκλοφορία.
                </Typography>
                <Button variant="outlined" color="secondary" href="https://discord.gg/bS2VKCVQWc" target="_blank" sx={{width: {md: "35%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "2em", marginY: "2rem",}}>
                    ΠΑΙΞΕ
                </Button>
            </Box>
        </Box>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <Box sx={{display: "flex", alignSelf: "center", width: { xs: '100%', md: '50%' }, flexDirection: { xs: 'column', md: 'row' }}}>
            <Box
                component="img"
                src="/h-logo.png"
                alt="Logo"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "1rem",
                    alignSelf: "center"
                }}
            />
            <Box>
                <Typography variant="h2" component={"h2"}>Hackathons</Typography>
                <Typography sx={{  
                    marginY: "1rem",
                    paddingX: {md: "1.5rem", xs: "0em"},
                    fontSize: {md: "1.5em", xs: "1.1em"}
                }}>
                    Λάβετε μέρος σε δημιουργικά hackathons, λύνοντας πραγματικά προβλήματα, μαθαίνοντας νέα εργαλεία και συναγωνιζόμενοι με άλλες ομάδες.
                </Typography>
                <Button variant="outlined" color="secondary" href="https://discord.gg/bS2VKCVQWc" target="_blank" sx={{width: {md: "35%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "2em", marginY: "2rem",}}>
                    ΔΗΜΙΟΥΡΓΗΣΕ
                </Button>
            </Box>
        </Box>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <Box sx={{display: "flex", alignSelf: "center", width: { xs: '100%', md: '50%' }, flexDirection: { xs: 'column', md: 'row-reverse' }}}>
            <Box
                component="img"
                src="/cp-logo.png"
                alt="Logo"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "1rem",
                    alignSelf: "center"
                }}
            />
            <Box>
                <Typography variant="h2" component={"h2"}>Competitive Programming</Typography>
                <Typography sx={{  
                    marginY: "1rem",
                    paddingX: {md: "1.5rem", xs: "0em"},
                    fontSize: {md: "1.5em", xs: "1.1em"}
                }}>
                    Βελτιώστε τις δεξιότητές σας στον προγραμματισμό μέσα από απαιτητικές ασκήσεις, αλγοριθμικά challenges και διαγωνισμούς.
                </Typography>
                <Button variant="outlined" color="secondary" href="https://discord.gg/bS2VKCVQWc" target="_blank" sx={{width: {md: "35%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "1.5em", marginY: "2rem",}}>
                    ΠΡΟΓΡΑΜΜΑΤΙΣΕ
                </Button>
            </Box>
        </Box>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <Box sx={{display: "flex", alignSelf: "center", width: { xs: '100%', md: '50%' }, flexDirection: { xs: 'column', md: 'row' }}}>
            <Box
                component="img"
                src="/os-logo.png"
                alt="Logo"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "1rem",
                    alignSelf: "center"
                }}
            />
            <Box>
                <Typography variant="h2" component={"h2"}>Open Source</Typography>
                <Typography sx={{  
                    marginY: "1rem",
                    paddingX: {md: "1.5rem", xs: "0em"},
                    fontSize: {md: "1.5em", xs: "1.1em"}
                }}>
                    Μάθετε πώς να συνεισφέρετε σε open source projects, να συνεργάζεστε με developers παγκοσμίως και να φτιάχνετε λογισμικό που κάνει τη διαφορά.
                </Typography>
                <Button variant="outlined" color="secondary" href="https://discord.gg/bS2VKCVQWc" target="_blank" sx={{width: {md: "35%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "1.5em", marginY: "2rem",}}>
                    ΣΥΜΜΕΤΕΙΧΕ
                </Button>
            </Box>
        </Box>
    </Box>
}