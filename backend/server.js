import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: ['http://localhost:5173'], credentials: false }));
app.use(express.json());
app.use(morgan('dev'));

// Paths for data storage
const dataDir = path.resolve(__dirname, '../data');
const projectsPath = path.join(dataDir, 'projects.json');
const messagesPath = path.join(dataDir, 'messages.json');
const frontendDistDir = path.resolve(__dirname, '../frontend/dist');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Ensure messages file exists
if (!fs.existsSync(messagesPath)) {
  fs.writeFileSync(messagesPath, JSON.stringify([] , null, 2));
}

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Projects endpoint - read from JSON
app.get('/api/projects', (_req, res) => {
  try {
    const raw = fs.readFileSync(projectsPath, 'utf-8');
    const projects = JSON.parse(raw);
    res.json(projects);
  } catch (err) {
    console.error('Failed to read projects.json', err);
    res.status(500).json({ error: 'Failed to load projects' });
  }
});

// Contact endpoint - append to messages.json
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const payload = { name, email, message, createdAt: new Date().toISOString() };
    const raw = fs.readFileSync(messagesPath, 'utf-8');
    const arr = JSON.parse(raw);
    arr.push(payload);
    fs.writeFileSync(messagesPath, JSON.stringify(arr, null, 2));
    console.log('Contact message received:', payload);
    res.json({ success: true });
  } catch (err) {
    console.error('Failed to store message', err);
    res.status(500).json({ error: 'Failed to store message' });
  }
});

// Serve frontend in production if built
if (fs.existsSync(frontendDistDir)) {
  app.use(express.static(frontendDistDir));
  app.get('*', (req, res) => {
    // Avoid capturing API routes
    if (req.path.startsWith('/api')) return res.status(404).end();
    res.sendFile(path.join(frontendDistDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});


