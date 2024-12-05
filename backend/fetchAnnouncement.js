import dotenvConfig from 'dotenv';
dotenvConfig.config();
import axios from 'axios'
import fs from 'fs'
import cors from 'cors'
import schedule from 'node-schedule'
import formatTimestamp from '../src/general/formatTimestamp.js'
import express from 'express'

const app = express();
const DISCORD_TOKEN = process.env.DISCORD_API_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
const OUTPUT_DIR = './announcements';

// Enable CORS for requests from localhost:5173
app.use(cors({ origin: "http://localhost:5173" }));

app.use('/announcements', express.static(OUTPUT_DIR));

app.get('/', (req, res) => {
  res.send('Server is running');
});

if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
} 
fs.mkdirSync(OUTPUT_DIR)

const fetchAnnouncements = async () => {
    try {
        const response = await axios.get(
            `https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages`,
            {
                headers: {
                    Authorization: `Bot ${DISCORD_TOKEN}`,
                },
            }
        );

        const messages = response.data;
        const allFileNames = ["competitive programming", "security", "gamedev", "hackathons"];
        const roleToClubMapping = {
            '1304747907597078569': 'competitive programming',
            '1305879385454280745': 'security',
            '1304745885212868658': 'gamedev',
            '1304751945034108958': 'hackathons',
        };

        for (let msg of messages) {
            let fileNames = [];
        
            // If the message mentions @everyone, include announcement to general
            if (msg.mention_everyone) {
                fileNames.push("general");
            } 

            // Include respective file name for each mentioned role
            for (let roleId of msg.mention_roles) {
                const clubName = roleToClubMapping[roleId];
                if (clubName) {
                    fileNames.push(clubName);
                }
            }
        
            // Write content to files
            for (let fileName of fileNames) {
                const filePath = `${OUTPUT_DIR}/${fileName}.md`;
                const markdownContent = `### ${formatTimestamp(msg.timestamp)}\n\n\n${msg.content}\n\n\n---\n\n\n`;
        
                fs.appendFileSync(filePath, markdownContent, 'utf8');
            }
        }
    
    } catch (error) {
        console.error('Error fetching announcements:', error.message);
    }
};

// Schedule the task to run every 3 hours
schedule.scheduleJob('0 */3 * * *', fetchAnnouncements);

fetchAnnouncements(); // Run immediately on startup

// Start the Express server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});