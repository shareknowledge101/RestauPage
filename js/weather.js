/* weather.js initialized */
async function renderWeatherModule() {
  try {
    const res = await fetch('restaurant_data.json');
    const data = await res.json();
    const w = data.weather_static;

    return `
      <h2>🌤️ Local Regional Sea Weather</h2>
      <p style="color: var(--text-muted)">Non-API Static Forecast • Tanger, Tétouan & Martil Coasts</p>
      
      <div class="weather-cards-grid">
        ${Object.values(w).map(city => `
          <div class="weather-card">
            <h3>📍 ${city.city}</h3>
            <div class="weather-metric"><span>Wind Speed:</span><strong>${city.wind_speed}</strong></div>
            <div class="weather-metric"><span>High Temp:</span><strong>${city.high_c}</strong></div>
            <div class="weather-metric"><span>Low Temp:</span><strong>${city.low_c}</strong></div>
            <div class="weather-metric"><span>Sunrise:</span><strong>${city.sunrise}</strong></div>
            <div class="weather-metric"><span>Sunset:</span><strong>${city.sunset}</strong></div>
          </div>
        `).join('')}
      </div>
    `;
  } catch (err) {
    return `<p>Failed to load weather data.</p>`;
  }
}