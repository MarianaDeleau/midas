import { apiNews } from "../utils/axios";

const getNews = async () => {
  const response = await apiNews.get();
  return response;
};

export { getNews };
