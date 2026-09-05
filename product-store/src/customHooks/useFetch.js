import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { users, error, loading };
};

export default useFetch;
