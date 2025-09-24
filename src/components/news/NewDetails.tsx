import { Button } from "@/components/ui/button";
import type { NewsItem } from "@/types";
import { Link } from "react-router-dom";

interface NewsDetailCardProps {
  newsItem: NewsItem;
}

export default function NewDetails({ newsItem }: NewsDetailCardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold">{newsItem.title}</h2>
          <p className="text-sm text-gray-500">
            {/* Author: {newsItem.author} | Date: {newsItem.date} */}
          </p>
        </div>
        <div>
          <img
            src={newsItem.image}
            alt={newsItem.title}
            loading="lazy"
            className="w-full h-64 object-cover rounded-md    mb-4"
          />
          <p className="text-gray-700 leading-relaxed">{newsItem.content}</p>
          <Link to="/" className="mt-6 inline-block">
            <Button variant="outline">Back to feed</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
