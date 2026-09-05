import { useState, useEffect } from "react";

const APIFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
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
  }, []);

  if (loading) {
    return <p>Data Loading .....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>API Fetch</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};

export default APIFetch;
