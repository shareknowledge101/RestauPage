/**
 * North Africa Atlantic Seafood & Fishing News Module (With Fallback)
 */

const NEWS_API_KEY = 'e85eab7d98e848efaf03c85351ff2398';

// Function called by your openDynamicPage('news') controller setup
async function renderNewsModule() {
  // Trigger fetch asynchronously right after returning HTML layout
  setTimeout(fetchSeaNewsArticles, 50);

  return `
    <div class="order-header-banner">
      <h2>🌊 North Africa Atlantic Seafood & Fishing News</h2>
      <p>Live updates on Atlantic catches, fisheries, and coastal maritime news.</p>
    </div>
    <div id="sea-news-results-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; padding: 20px 0;">
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #00e5ff;">Loading latest maritime updates...</div>
    </div>
  `;
}

async function fetchSeaNewsArticles() {
  const resultsContainer = document.getElementById('sea-news-results-grid');
  if (!resultsContainer) return;

  const searchQuery = encodeURIComponent('(Atlantic OR "North Africa" OR Morocco) AND (fish OR fishing OR seafood OR port)');
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&pageSize=6&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'ok' && data.articles && data.articles.length > 0) {
      resultsContainer.innerHTML = data.articles.map(article => buildArticleCard(article)).join('');
    } else {
      renderFallbackNews(resultsContainer, "contact us for any wrong news at : group.socialboost@gmail.com");
    }
  } catch (error) {
    console.warn('NewsAPI fetch blocked or failed. Switching to curated regional fallback data.', error);
    renderFallbackNews(resultsContainer, "Live feed restricted by browser security. Showing latest North African Atlantic maritime reports:");
  }
}

function buildArticleCard(article) {
  return `
    <div class="menu-card" style="display: flex; flex-direction: column; justify-content: space-between; background: rgba(59, 117, 146, 0.85); border: 1px solid rgba(0, 229, 255, 0.2); border-radius: 16px; overflow: hidden; padding: 15px;">
      ${article.urlToImage ? `
        <div style="width: 100%; height: 160px; border-radius: 12px; overflow: hidden; margin-bottom: 12px; background: #10141d;">
          <img src="${article.urlToImage}" alt="News Image" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.style.display='none'" />
        </div>
      ` : ''}
      <div>
        <h4 style="margin: 0 0 8px; color: #ffffff; font-size: 1.05rem; line-height: 1.4;">${article.title}</h4>
        <p style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 15px; line-height: 1.4;">${article.description || 'Read the full report on Atlantic maritime updates.'}</p>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; margin-top: auto;">
        <span style="font-size: 0.75rem; opacity: 0.6;">${article.source?.name || 'Maritime News'}</span>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="add-item-btn" style="text-decoration: none; padding: 6px 12px; font-size: 0.85rem; border-radius: 8px;">Read Article →</a>
      </div>
    </div>
  `;
}

function renderFallbackNews(container, message) {
  const fallbackArticles = [
    {
      title: "Moroccan Atlantic Fisheries: Sustainable Catch Quotas Announced for the Season",
      description: "Authorities outline new management measures to protect sardine and cephalopod stocks along the North African coastline.",
      source: { name: "Fisheries Observer" },
      url: "https://www.google.com/search?q=Morocco+Atlantic+fisheries+seafood+news",
      urlToImage: ""
    },
    {
      title: "Martil Coastal Port Updates: Local Artisanal Fleets Report Strong Sea Conditions",
      description: "Fishermen in the Martil and Tetouan coastal regions experience favorable conditions for seasonal Mediterranean and Atlantic catches.",
      source: { name: "North Africa Maritime" },
      url: "https://www.google.com/search?q=Martil+fishing+port+news",
      urlToImage: ""
    },
    {
      title: "Expanding Seafood Export Markets Across the Atlantic and Mediterranean",
      description: "How regional logistics hubs are accelerating fresh seafood distribution from North African ports to international markets.",
      source: { name: "Seafood Trade Today" },
      url: "https://www.google.com/search?q=Morocco+seafood+export+news",
      urlToImage: ""
    }
  ];

  container.innerHTML = `
    <div style="grid-column: 1 / -1; background: rgba(0, 229, 255, 0.05); border: 1px dashed rgba(0, 229, 255, 0.3); padding: 10px 15px; border-radius: 10px; font-size: 0.85rem; margin-bottom: 10px; color: #5c601c;">
      ℹ️ ${message}
    </div>
  ` + fallbackArticles.map(article => buildArticleCard(article)).join('');
}