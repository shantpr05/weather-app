document.getElementById('locationForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const location = document.getElementById('locationInput').value;
  const isCelsius = document.getElementById('unitToggle').checked;
  const unit = isCelsius ? 'metric' : 'us';

  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = '<p class="loading">Loading...</p>';

  try {
    const response = await fetch(`http://localhost:3000/weather?location=${encodeURIComponent(location)}&unit=${unit}`);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data, isCelsius);
    } else {
      throw new Error(data.message || 'Failed to fetch weather data');
    }
  } catch (error) {
    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});

function displayWeather(data, isCelsius) {
  const weatherInfo = document.getElementById('weatherInfo');
  const temp = data.currentConditions.temp;
  const description = data.currentConditions.conditions;
  const unitSymbol = isCelsius ? '°C' : '°F';

  document.body.style.backgroundImage = `url(${getBackgroundImage(description)})`;

  weatherInfo.innerHTML = `
    <h2>Weather in ${data.resolvedAddress}</h2>
    <p>Temperature: ${temp}${unitSymbol}</p>
    <p>Condition: ${description}</p>
  `;

  fetchGif(description);
}

function getBackgroundImage(condition) {
  condition = condition.toLowerCase();
  if (condition.includes('rain')) return 'assets/rainy.jpg';
  if (condition.includes('clear') || condition.includes('sun')) return 'assets/sunny.jpg';
  if (condition.includes('cloud')) return 'assets/cloudy.jpg';
  if (condition.includes('snow')) return 'assets/snow.jpg';
  return 'assets/normal.jpg'; // default
}

async function fetchGif(query) {
  try {
    const giphyApiKey = 'YOUR_GIPHY_API_KEY';
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${encodeURIComponent(query)}`);
    const gifData = await response.json();
    const gifUrl = gifData.data.images.original.url;

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML += `<img src="${gifUrl}" alt="Weather gif">`;
  } catch (error) {
    console.error('Failed to load GIF', error);
  }
}
