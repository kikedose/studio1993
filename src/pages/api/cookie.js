// Endpoint: http://localhost:3000/api/cookie

export default function handler(_req, res) {
  res.status(200).json({ cookie: '🍪' });
}
