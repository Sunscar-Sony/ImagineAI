import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;

      const response = await axios.post(
        'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
        {
          inputs: message,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_HUGGING_FACE_API_TOKEN`,  // Get your token from Hugging Face
          },
        }
      );

      const reply = response.data.generated_text || "Sorry, I couldn't generate a response.";

      res.status(200).json({ reply });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch AI response' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
