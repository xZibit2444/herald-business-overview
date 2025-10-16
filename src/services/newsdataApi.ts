// newsdata.io integration
const API_KEY = 'pub_38355d840e7945299ae9447ee5add002';
const BASE_URL = 'https://newsdata.io/api/1/news';

export interface NewsArticle {
  title: string;
  description: string | null;
  pubDate: string; // newsdata uses pubDate
  link: string;
  image_url?: string;
  source_id?: string;
  source?: { name?: string };
}

interface NewsDataResponse {
  status: string;
  totalResults?: number;
  results: NewsArticle[];
}

export async function getLatestNews(country: string = 'gh', category: string = 'business') : Promise<NewsArticle[]> {
  try {
    const url = new URL(BASE_URL);
    url.searchParams.set('apikey', API_KEY);
    url.searchParams.set('country', country);
    url.searchParams.set('category', category);
    url.searchParams.set('language', 'en');

    const res = await fetch(url.toString());
    const data: NewsDataResponse = await res.json();

    if (data.status !== 'success') {
      console.error('newsdata.io error:', data);
      return [];
    }

    return data.results;
  } catch (err) {
    console.error('Error fetching newsdata.io:', err);
    return [];
  }
}