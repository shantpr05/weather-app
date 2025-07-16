// api/weather.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { location, unit } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unit}&key=${apiKey}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
}
