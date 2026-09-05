import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const result = await res.json();
        setData(result);
      } catch (e) {
        setLoading(true);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
