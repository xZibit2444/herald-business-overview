import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useEffect, useState } from "react"
import { getLatestNews } from "../services/newsdataApi"

export function News() {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    async function fetch() {
      try {
        const results = await getLatestNews()
        if (!mounted) return
        setArticles(results.slice(0, 6))
      } catch (err) {
        console.error(err)
        setError('Failed to load live news')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetch()
    return () => { mounted = false }
  }, [])

  const fallbackItems = [
    {
      id: 1,
      title: "New Business Registration Guidelines",
      date: "October 15, 2025",
      description: "Updated guidelines for business registration in Ghana. Learn about the new requirements and streamlined processes.",
      category: "Business Updates",
      url: "#"
    },
    {
      id: 4,
      title: "Ghana government reaffirms commitment to safe, sustainable management of natural resources",
      date: "October 16, 2025",
      description: "Government pledges to balance industrial development and environmental protection at NORM XI symposium in Accra.",
      category: "National News",
      url: "/pages/news-ghana-natural-resources"
    }
  ]

  const itemsToRender = (!loading && articles.length > 0) ? articles : fallbackItems

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-slate-800 mb-4">
            Latest Updates
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay informed about the latest business regulations, service updates, and corporate news
          </p>
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itemsToRender.map((item: any, idx: number) => (
              <Card key={idx} className="group hover:shadow-lg transition-all duration-300 border hover:border-slate-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">{item.source_id || (item.source && item.source.name) || 'News'}</Badge>
                    <span className="text-sm text-slate-500">{item.pubDate ? new Date(item.pubDate).toLocaleDateString() : item.date}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 text-slate-800">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-blue-600 hover:text-blue-700">
                    <a href={item.link || item.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium">Read more</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}