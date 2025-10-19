export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields' })
      return
    }
    // In Vercel, you would persist to a database or external service
    res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ error: 'Failed to store message' })
  }
}






