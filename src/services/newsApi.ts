// Note: Replace this with your actual NewsAPI key
const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://newsapi.org/v2';

export interface NewsArticle {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  urlToImage?: string;
  source: {
    name: string;
  };
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export async function getLatestNews(country: string = 'gh', category: string = 'business'): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
    );
    const data: NewsResponse = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch news');
    }
    
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}