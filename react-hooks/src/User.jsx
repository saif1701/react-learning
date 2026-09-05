import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Saif",
      });
    }, 1000);
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return <h1>User: {user.name}</h1>;
}

export default User;
