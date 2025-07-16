# Weather Forecast Site 🌦️
Live: https://weather-qlieswm5x-shantpr05s-projects.vercel.app

This is a simple weather forecast site that allows users to search for weather information in a specific location using the Visual Crossing Weather API. Users can toggle between Fahrenheit and Celsius for temperature display, and the page changes background based on the weather conditions. Optionally, a weather-related GIF can also be displayed using the Giphy API.
## Features
- **Search weather by location**: Users can enter any location to see the current weather.
- **Unit toggle**: Switch between Fahrenheit and Celsius.
- **Dynamic background**: The background color changes based on weather conditions.
- **Weather GIF (optional)**: Displays a relevant weather GIF using the Giphy API.
- **Loading state**: Shows a loading message while fetching data.

## Technologies Used
- HTML, CSS, JavaScript
- [Visual Crossing Weather API](https://www.visualcrossing.com/)
- [Giphy API](https://developers.giphy.com/) (optional)

## Setup Instructions

### Prerequisites
- A **Visual Crossing API Key** (for weather data) - Get it [here](https://www.visualcrossing.com/)
- (Optional) A **Giphy API Key** (for weather GIFs) - Get it [here](https://developers.giphy.com/)

### Installation
1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/${githubUsername}/${projectName}.git
   cd ${projectName}
   \`\`\`

2. **Set up API Keys**:
   - Open \`script.js\` and replace \`'YOUR_VISUAL_CROSSING_API_KEY'\` with your Visual Crossing API key: **${visualCrossingApiKey}**
   - If you want to use GIFs, replace \`'YOUR_GIPHY_API_KEY'\` with your Giphy API key: **${giphyApiKey || "Not provided"}**

3. **Open the project**:
   Open \`index.html\` in your web browser.

### Usage
1. Enter a location (e.g., "New York" or "London") in the input field and click **Get Weather**.
2. Toggle the checkbox to switch between Fahrenheit and Celsius.
3. The page will show the current temperature, weather conditions, and dynamically change the background based on the weather.
4. If the Giphy API key is provided, a weather-related GIF will also appear.
