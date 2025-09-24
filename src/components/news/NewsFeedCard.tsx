import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsItem } from "@/types";
const defaultImg = "/no-image.jpg";

interface NewsFeedCardProps {
  item: NewsItem;
}

const isValidImage = (url?: string): boolean => {
  if (!url) return false;
  const validExtensions = /\.(jpg|jpeg|png|webp|gif)$/i;
  return validExtensions.test(url);
};

export default function NewsFeedCard({
  item: { title, contentSnippet, pubDate, image },
}: NewsFeedCardProps) {
  return (
    <Card className="flex flex-row items-center p-4 hover:shadow-lg transition-shadow">
      {isValidImage(image) ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-32 h-32 object-cover rounded-md mr-4 flex-shrink-0"
        />
      ) : (
        <img
          src={defaultImg}
          alt="Default image"
          loading="lazy"
          className="w-32 h-32 object-cover rounded-md mr-4 flex-shrink-0"
        />
      )}

      <div className="flex-1 min-w-0">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl truncate">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-600 line-clamp-2">{contentSnippet}</p>
          <p className="text-sm text-gray-500 mt-2 items-end">
            Date: {pubDate}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
