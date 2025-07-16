document.getElementById('locationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const location = document.getElementById('locationInput').value;
    const isCelsius = document.getElementById('unitToggle').checked;
  
    // Show loading message
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p class="loading">Loading...</p>';
  
    try {
      const apiKey = 'E8CRGDUCX7DCT2H76GFM5XUQC'; // Replace with your actual API key
      const unit = isCelsius ? 'metric' : 'imperial';
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unit}&key=${apiKey}`);
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
  
    // Change background based on weather condition
    document.body.style.backgroundColor = getBackgroundColor(description);
  
    weatherInfo.innerHTML = `
      <h2>Weather in ${data.resolvedAddress}</h2>
      <p>Temperature: ${temp}${unitSymbol}</p>
      <p>Condition: ${description}</p>
    `;
  
    // Optionally use the Giphy API to display a relevant GIF
    fetchGif(description);
  }
  
  function getBackgroundColor(condition) {
    if (condition.includes('Rain')) {
      return '#9ecae1';
    } else if (condition.includes('Clear')) {
      return '#f7d794';
    } else if (condition.includes('Cloud')) {
      return '#d3d3d3';
    } else {
      return '#ffffff';
    }
  }
  
  async function fetchGif(query) {
    try {
      const giphyApiKey = 'E8CRGDUCX7DCT2H76GFM5XUQC'; // Replace with your actual API key
      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${encodeURIComponent(query)}`);
      const gifData = await response.json();
      const gifUrl = gifData.data.images.original.url;
  
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML += `<img src="${gifUrl}" alt="Weather gif">`;
    } catch (error) {
      console.error('Failed to load GIF', error);
    }
  }
  