import { useState, useEffect } from "react";
import { fetchPortfolioData } from "../services/api";

const usePortfolioData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchPortfolioData();
      if (fetchedData) {
        setData(fetchedData);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  return { data, loading };
};

export default usePortfolioData;