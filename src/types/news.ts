export interface NewsItem {
  id?: string;
  title: string;
  link: string;
  image: string;
  pubDate: string;
  contentSnippet: string;
  content: string;
  isoDate: string;
  [key: string]: unknown;
}

export interface Feed {
  items: NewsItem[];
}

export interface Article {
  title: string;
  image?: string;
  content: string;
  [key: string]: unknown;
}
