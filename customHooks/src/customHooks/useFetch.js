import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchData = await res.json();
        setData(fetchData);
      } catch (e) {
        if (e.name === "AbortError") return;
        setError(e);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
