import NewDetails from "@/components/news/NewDetails";
import { Button } from "@/components/ui/button";
import newsData from "@/data/news.json";
import { Link, useParams } from "react-router-dom";

export default function NewsDetailPage() {
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

  return <NewDetails newsItem={newsItem} />;
}
