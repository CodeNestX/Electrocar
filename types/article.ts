export interface Article {
  id: number;
  category_translation_id: number;
  title: string;
  slug: string;
  excerpt: string;
  language: string;
  status: string;
  cover_url: string;
  alt_text: string;
  caption: string;
}