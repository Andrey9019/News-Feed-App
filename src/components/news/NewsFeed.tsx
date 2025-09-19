import newsData from "@/data/news.json";
import type { NewsItem } from "@/types";
import { Link } from "react-router-dom";
import NewsFeedCard from "./NewsFeedCard";

export default function NewsFeed() {
  const news: NewsItem[] = newsData;

  return (
    <div className="container mx-auto  px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">News feed</h1>
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col gap-2">
        {news.map(({ id, ...item }) => (
          <Link to={`/news/${id}`} key={id} className="block">
            <NewsFeedCard item={{ id, ...item }} />
          </Link>
        ))}
      </div>
    </div>
  );
}
