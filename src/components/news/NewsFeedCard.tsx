import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsItem } from "@/types";

interface NewsFeedCardProps {
  item: NewsItem;
}

export default function NewsFeedCard({
  item: { title, description, date, image },
}: NewsFeedCardProps) {
  return (
    <Card className="flex flex-row items-center p-4 hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-md mr-4 flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl truncate">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-600 line-clamp-2">{description}</p>
          <p className="text-sm text-gray-500 mt-2">Date: {date}</p>
        </CardContent>
      </div>
    </Card>
  );
}
