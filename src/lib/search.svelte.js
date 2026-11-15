import artData from '#lib/data/art.json';
import articleData from '#lib/data/articles.json';
import contactData from '#lib/data/contact.json';
import faqData from '#lib/data/faq.json';

export const searchState = $state({
  query: ''
});

export function getSearchResults() {
  const q = searchState.query.toLowerCase().trim();
  
  if (!q) return { art: [], articles: [], total: 0 };

  const matchingArt = artData.filter(item => 
    item.tags.toLowerCase().includes(q) || 
    item.alt_text.toLowerCase().includes(q)
  );

  const matchingArticles = articleData.filter(item => 
    item.tags.toLowerCase().includes(q)
  );

  const matchingContacts = contactData.filter(item => 
    item.tags.toLowerCase().includes(q)
  );

  const matchingFAQ = faqData.filter(item => 
    item.tags.toLowerCase().includes(q)
  );

  return {
    art: matchingArt,
    articles: matchingArticles,
    contact: matchingContacts,
    faq: matchingFAQ,
    total: 
    matchingArt.length + 
    matchingArticles.length + 
    matchingContacts.length + 
    matchingFAQ.length
  };
}
