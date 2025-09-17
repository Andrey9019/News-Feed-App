import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import newsData from "@/data/news.json";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

const NewsFeedPage = () => {
  const news: NewsItem[] = newsData;

  return (
    <div className="container mx-auto  px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">News feed</h1>
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col gap-2">
        {news.map((item) => (
          <Link to={`/news/${item.id}`} key={item.id}>
            <Card className="flex flex-row items-center p-4 hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Date: {item.date}
                  </p>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsFeedPage;
