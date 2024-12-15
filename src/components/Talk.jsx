import { Card, CardContent, CardHeader, Button } from "@mui/material";

export default function Talk({talk})
{
    return (<Card>
        <CardHeader
            title={`${talk.speaker}, ${talk.title}`}
            subheader={talk.date}
        />
        <CardContent sx={{width: "100%", display: "flex", flexDirection: "column", alignContent: "space-evenly"}}>
            {talk.link.map((link, index) => {
                return  (    
                    <Button
                        variant="outlined"
                        color="secondary"
                        href={link}
                        target="_blank"
                        sx={{
                            width: "100%",
                            height: "5rem",
                            marginTop: "1rem"
                        }}
                    >
                        ΜΕΡΟΣ {index+1}
                    </Button>
                )
            })}
        </CardContent>
    </Card>)
}