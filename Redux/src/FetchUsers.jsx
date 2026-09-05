import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./store/UserSlice";

const FetchUsers = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default FetchUsers;
