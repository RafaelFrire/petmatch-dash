export interface Article {
  title: string;
  slug: string;
  categorie: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string; // Adicionando updatedAt
  sections: Section[];
}

export interface Section {
  id: string;
  articleId: string;
  title: string;
  content: string;
  quote?: string;
  image?: string;
}
