import { useEffect, useState } from "react";
import { getNews } from "../api/apiNews";

const useNews = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [newsToShow, setNewsToShow] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then((response) => {
        let data = response.data.posts; //Guardamos posts en constante data

        // Ordenamos data por relevancia
        const orderedData = data.sort(function (a, b) {
          return b.thread.domain_rank - a.thread.domain_rank;
        });
        setData(orderedData);
        setFilteredData(orderedData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchNews = (value) => {
    //Filtramos por título y texto
    let newData = data.filter(
      (x) => x.title.includes(value) || x.text.includes(value)
    );
    setFilteredData(newData);
  };

  return {
    data,
    filteredData,
    setFilteredData,
    newsToShow,
    setNewsToShow,
    searchNews,
    loading,
  };
};

export { useNews };
