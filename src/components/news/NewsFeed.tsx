import type { NewsItem } from "@/types";
import { Link } from "react-router-dom";
import NewsFeedCard from "./NewsFeedCard";
import { useFeedQuery } from "@/hooks/useFeedQuery";

export default function NewsFeed() {
  const { data: feed, isLoading, error } = useFeedQuery();

  return (
    <div className="container mx-auto  px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">News feed</h1>
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col gap-2">
        {feed?.items.map(({ id, ...item }) => (
          <Link to={`/news/${id}`} key={id} className="block">
            <NewsFeedCard item={{ id, ...item }} />
          </Link>
        ))}
      </div>
    </div>
  );
}
