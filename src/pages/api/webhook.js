// src/pages/api/webhook.js

const HUB_VERIFY_TOKEN = 'your-verify-token'; 

export default async (req, res) => {
  if (req.method === 'GET') {
    const { hub_mode, hub_challenge, hub_verify_token } = req.query;
    if (hub_verify_token === HUB_VERIFY_TOKEN) {
      return res.status(200).send(hub_challenge);
    }

    return res.status(400).send('Verification failed');
  }

  if (req.method === 'POST') {
    const newCommentData = req.body;
    console.log('New Comment Data:', newCommentData);
    return res.status(200).send('OK');
  }
  return res.status(405).send('Method Not Allowed');
};
