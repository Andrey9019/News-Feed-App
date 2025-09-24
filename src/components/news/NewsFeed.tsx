// import type { NewsItem } from "@/types";
import { Link } from "react-router-dom";
import NewsFeedCard from "./NewsFeedCard";
import { useFeedQuery } from "@/hooks/useFeedQuery";

export default function NewsFeed() {
  const { data: feed, isLoading, error } = useFeedQuery();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Loading news feed...
      </div>
    );
  }

  if (error) {
    console.error("[NewsFeed] Error:", error?.message);
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        Error loading feed: {error?.message}
      </div>
    );
  }

  if (!feed || !feed.items || feed.items.length === 0) {
    console.log("[NewsFeed] No news items found");
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        No news available
      </div>
    );
  }

  console.log(`[NewsFeed] Rendering ${feed.items.length} news items`);
  return (
    <div className="container mx-auto  px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">News feed</h1>
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col gap-2">
        {feed?.items.map(({ id, ...item }) => (
          <Link
            to={`/article/${encodeURIComponent(item.link)}`}
            key={item.link}
            className="block"
          >
            <NewsFeedCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
