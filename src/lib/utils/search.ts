// Utilitaire de recherche simple (prêt pour Fuse.js si besoin)
export interface SearchItem {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  keywords: string;
}

export function simpleSearch(query: string, data: SearchItem[], limit = 10): SearchItem[] {
  const q = query.toLowerCase();
  return data.filter(item => {
    const text = `${item.title} ${item.subtitle} ${item.description} ${item.keywords}`.toLowerCase();
    return text.includes(q);
  }).slice(0, limit);
}
