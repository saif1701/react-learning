import { useState } from "react";
import useFetch from "./hooks/customHooks/useFetch";

const UserList = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(5);
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const filterUsers = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const startPage = (page - 1) * show;
  const totalPages = Math.ceil(filterUsers.length / show);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const nextPage = () => {
    setPage(Math.min(page + 1, totalPages));
  };

  const prevPage = () => {
    setPage(Math.max(page - 1, 1));
  };
  const handleShow = (e) => {
    const value = Number(e.target.value);
    setShow(value);
    setPage(1);
  };
  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
      {filterUsers.slice(startPage, startPage + show).map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <p>
        {page !== 1 && <span onClick={prevPage}>Prev</span>}
        &nbsp;Total : {page} of {totalPages}&nbsp;
        {totalPages !== page && <span onClick={nextPage}>Next</span>}
      </p>
      <select onChange={handleShow} value={show}>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </>
  );
};

export default UserList;
