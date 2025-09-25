import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { useArticleQuery } from "@/hooks/useArticleQuery";

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const url = id ? decodeURIComponent(id) : "";

  const { data: article, isLoading, error } = useArticleQuery(url);

  if (isLoading)
    return (
      <div className="container mx-auto px-4 py-8">Loading article...</div>
    );
  if (error)
    return (
      <div className="container mx-auto px-4 py-8 text-red-500">
        Error: {error?.message}
      </div>
    );
  if (!article)
    return <div className="container mx-auto px-4 py-8">Article not found</div>;

  return (
    <div className="flex flex-row">
      <iframe title=" " id="ad-frame-0" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold">{article.title}</h2>
            <p className="text-sm text-gray-500">
              {/* Author: {author} | Date: {date} */}
            </p>
          </div>
          <div>
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className="w-full h-96 object-cover rounded-md mb-4"
            />

            <p className="text-gray-700 leading-relaxed">{article.content}</p>
            <Link to="/" className="mt-6 inline-block">
              <Button variant="outline">Back to feed</Button>
            </Link>
          </div>
        </div>
      </div>
      <iframe title=" " id="ad-frame-1" />
    </div>
  );
}
