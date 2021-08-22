export const NewsMapper = (news) => ({
  id: news.id,
  associationId: news.association,
  description: news.news_description,
  image: news.news_image,
  preview: news.news_preview,
  title: news.news_title,
})
