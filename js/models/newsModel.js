
export async function renderNewsModule(container) {
  // 1. Render the initial skeleton layout with loading indicators
  container.innerHTML = `
    <div class="news-module">
      <div class="module-header">
        <i class="fa-solid fa-newspaper ocean-glow"></i>
        <h2>Sea News & Maritime Updates</h2>
      </div>
      <p class="module-subtitle">Latest headlines from the Atlantic, North Africa, and Morocco ports</p>
      
      <div id="news-grid" class="news-grid skeleton-loading">
        <!-- News cards will be injected here after fetch -->
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    </div>
  `;

  // 2. Start the asynchronous fetch operation
  try {
    const articles = await fetchSeaNewsArticles();
    renderNewsCards(articles);
  } catch (error) {
    console.error("News Module rendering failed:", error);
    renderNewsError(error);
  }
}

/**
 * Fetches maritime news articles via the Vercel Serverless Function proxy.
 * This approach keeps the API key secure and bypasses NewsAPI CORS restrictions.
 * @returns {Promise<Array>} A promise resolving to an array of article objects.
 */
async function fetchSeaNewsArticles() {
  // IMPORTANT: This relative URL calls your serverless function at /api/news.js
  const proxyUrl = '/api/news'; 

  console.log(`[newsModel] Fetching articles from: ${proxyUrl}...`);

  try {
    const response = await fetch(proxyUrl);

    if (!response.ok) {
      // Handle HTTP errors returned by the proxy/serverless function
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error ${response.status}`;
      throw new Error(`[newsModel] Network response was not ok: ${errorMessage}`);
    }

    const data = await response.json();
    console.log(`[newsModel] Successfully fetched ${data.articles?.length || 0} articles.`);
    return data.articles || [];

  } catch (error) {
    // This catches network errors or issues within the try block
    console.error(`[newsModel] Fetch operation failed: ${error.message}`);
    throw error; // Rethrow to let renderNewsModule handle the final UI state
  }
}

/**
 * Injects article data into the news grid UI.
 * @param {Array} articles - Array of article data from NewsAPI.
 */
function renderNewsCards(articles) {
  const grid = document.getElementById('news-grid');
  grid.classList.remove('skeleton-loading');

  if (!articles || articles.length === 0) {
    grid.innerHTML = `
      <div class="news-no-data">
        <i class="fa-solid fa-fish-fins ocean-glow"></i>
        <p>No recent sea news found.</p>
        <p>Please check back later.</p>
      </div>
    `;
    return;
  }

  const articlesHtml = articles.map(article => {
    // Sanitize data (use placeholders for missing images/dates)
    const imageUrl = article.urlToImage || 'assets/images/ui/news-placeholder.jpg.webp';
    const publishedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-GB') : 'Unknown Date';
    const sourceName = article.source?.name || 'Ocean Update';
    
    return `
      <a href="${article.url}" target="_blank" class="news-card ocean-border-glow" rel="noopener noreferrer">
        <div class="news-card-image">
          <img src="${imageUrl}" alt="Thumbnail for ${article.title}" loading="lazy">
        </div>
        <div class="news-card-body">
          <span class="news-source">${sourceName}</span>
          <h3 class="news-title">${article.title}</h3>
          <p class="news-description">${article.description || ''}</p>
          <div class="news-footer">
            <span class="news-date"><i class="fa-regular fa-calendar"></i> ${publishedDate}</span>
            <span class="news-read-more">Read Full Article <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      </a>
    `;
  }).join('');

  grid.innerHTML = articlesHtml;
}

/**
 * Renders an error message state within the news grid.
 * @param {Error} error - The error object.
 */
function renderNewsError(error) {
  const grid = document.getElementById('news-grid');
  grid.classList.remove('skeleton-loading');
  grid.innerHTML = `
    <div class="news-error-state">
      <i class="fa-solid fa-triangle-exclamation ocean-glow"></i>
      <p><strong>Failed to load Sea News.</strong></p>
      <p class="error-details">${error.message}</p>
      <p>This may happen if the news service is temporarily unavailable.</p>
    </div>
  `;
}
