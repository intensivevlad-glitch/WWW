export default async function handler(req, res) {
  // Vercel Edge/Serverless style API (for Vercel deployments of the frontend)
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  try {
    // In this mono-repo we serve via backend locally; on Vercel we can inline sample data
    const projects = [
      {
        id: 'drop-of-life',
        title: 'Краплина життя / Drop of Life',
        description: 'Blood transfusions for leukemia patients.',
        image: 'https://images.unsplash.com/photo-1581093588401-22c8a5c2294e',
        progress: 85
      },
      {
        id: 'ray-of-hope',
        title: 'Промінь надії / Ray of Hope',
        description: 'Chemotherapy funding for children.',
        image: 'https://images.unsplash.com/photo-1600974903052-0d55c6d8f2fb',
        progress: 70
      },
      {
        id: 'stronger-together',
        title: 'Разом сильніші / Stronger Together',
        description: 'Awareness campaigns in schools.',
        image: 'https://images.unsplash.com/photo-1587502536263-929aaf2a69d4',
        progress: 60
      }
    ]
    res.status(200).json(projects)
  } catch (e) {
    res.status(500).json({ error: 'Failed to load projects' })
  }
}






