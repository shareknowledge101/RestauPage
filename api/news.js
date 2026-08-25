// api/news.js
export default async function handler(request, response) {
  // 1. Get parameters from the incoming request (optional, or hardcode them)
  // Hardcoded for your example, but you could use: const { q } = request.query;

  // 2. Define your hardcoded URL with your API KEY (safe on backend)
  const apiKey = process.env.NEWS_API_KEY; // WE WILL SET THIS IN VERCEL
  const newsApiUrl = `https://newsapi.org/v2/everything?q=(Atlantic%20OR%20%22North%20Africa%22%20OR%20Morocco)%20AND%20(fish%20OR%20fishing%20OR%20seafood%20OR%20port)&sortBy=publishedAt&pageSize=6&apiKey=${apiKey}`;

  try {
    const apiResponse = await fetch(newsApiUrl);
    
    if (!apiResponse.ok) {
      // If NewsAPI returns an error (like 429 too many requests), pass it on
      return response.status(apiResponse.status).json({ error: 'Failed to fetch news from provider' });
    }

    const data = await apiResponse.json();

    // 3. Return the data to your frontend
    return response.status(200).json(data);
    
  } catch (error) {
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}