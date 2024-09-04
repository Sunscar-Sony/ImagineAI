export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    // Replace with actual API call to AI chatbot service
    // Here is a mock response for demonstration purposes
    const reply = `You said: ${message}`;
    res.status(200).json({ reply });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
