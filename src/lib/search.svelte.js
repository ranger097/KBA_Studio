import artData from '#lib/data/art.json';
import articleData from '#lib/data/articles.json';
import contactData from '#lib/data/contact.json';
import faqData from '#lib/data/faq.json';
import testimoniesData from '#lib/data/testimonies.json';


export const searchState = $state({
  query: ''
});

export function getSearchResults() {
  const q = searchState.query.toLowerCase().trim();
  
  if (!q) return { art: [], articles: [], contact: [], faq: [], testimonies: [],  total: 0 };

  const matchingArt = artData.filter(item => 
    item.tags.toLowerCase().includes(q) || 
    item.alt_text.toLowerCase().includes(q)
  );

  const matchingArticles = articleData.filter(item => 
    item.title.toLowerCase().includes(q) ||
    item.paragraph1.toLowerCase().includes(q) ||
    item.paragraph2.toLowerCase().includes(q) ||
    item.paragraph3.toLowerCase().includes(q) ||
    item.paragraph4.toLowerCase().includes(q)
  );

  const matchingContacts = contactData.filter(item => 
    item.tags.toLowerCase().includes(q)
  );

  const matchingFAQ = faqData.filter(item => 
    item.tags.toLowerCase().includes(q)
  );

  const matchingTest = testimoniesData.filter(item => 
    item.author.toLowerCase().includes(q) ||
    item.image.toLowerCase().includes(q) ||
    item.testimonies.toLowerCase().includes(q) ||
    item.month.toLowerCase().includes(q) ||
    item.year.toLowerCase().includes(q)

  );

  return {
    art: matchingArt,
    articles: matchingArticles,
    contact: matchingContacts,
    faq: matchingFAQ,
    testimonies: matchingTest,
    total: 
    matchingArt.length + 
    matchingArticles.length + 
    matchingContacts.length + 
    matchingFAQ.length +
    matchingTest.length
  };
}
