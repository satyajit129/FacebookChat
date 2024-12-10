import fs from 'fs'; 

export default function handler(req, res) {
    const VERIFY_TOKEN = 'my_secure_token_123'; 

    // Log function to write data into a file
    function logToFile(message) {
        const logMessage = `${new Date().toISOString()} - ${message}\n`;
        fs.appendFile('response.txt', logMessage, (err) => {
            if (err) {
                console.error('Failed to write to log file', err);
            }
        });
    }

    if (req.method === 'GET') {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        // Verifying the token and mode
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            logToFile('WEBHOOK_VERIFIED');
            return res.status(200).send(challenge);
        } else {
            return res.status(403).send('Forbidden');
        }
    } else if (req.method === 'POST') {
        const logMessage = 'Received POST request';
        console.log(logMessage);
        logToFile(logMessage);

        const body = req.body;
        if (body.object === 'page') {
            body.entry.forEach((entry) => {
                const events = entry.messaging;
                events.forEach((event) => {
                    if (event.message && event.message.text) {
                        const senderId = event.sender.id;
                        
                        const messageText = event.message.text;

                        const messageLog = `Message received from ${senderId}: ${messageText}`;
                        console.log(messageLog);
                        logToFile(messageLog);
                    }
                });
            });

            return res.status(200).send('EVENT_RECEIVED');
        } else {
            return res.status(404).send('Not Found');
        }
    } else {
        return res.status(405).send('Method Not Allowed');
    }
}
