import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import newsData from "@/data/news.json";

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = newsData.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">News not found</h1>
        <Link to="/news">
          <Button variant="outline">Return to feed</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold">{newsItem.title}</h2>
          <p className="text-sm text-gray-500">
            Author: {newsItem.author} | Date: {newsItem.date}
          </p>
        </div>
        <div>
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 leading-relaxed">{newsItem.content}</p>
          <Link to="/" className="mt-6 inline-block">
            <Button variant="outline">Back to feed</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
