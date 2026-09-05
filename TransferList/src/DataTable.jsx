import { useState } from "react";
import users from "../users";
export default function DataTable() {
  const [message, setMessage] = useState("Data Table");
  const [page, setPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState(users);
  const [show, setShow] = useState(5);

  const startIndex = (page - 1) * show;
  const totalPages = Math.ceil(users.length / show);
  const handleChange = (event) => {
    setShow(Number(event.target.value));
    setPage(1);
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleSort = (key) => {
    const sorted = [...sortedUsers].sort((a, b) => {
      if (typeof a[key] === "string") {
        return a[key].localeCompare(b[key]);
      }

      return a[key] - b[key];
    });

    setSortedUsers(sorted);
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => handleSort("name")}>Sort Name</button>

      <button onClick={() => handleSort("age")}>Sort Age</button>

      <button onClick={() => handleSort("occupation")}>Sort Occupation</button>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers
            .slice(startIndex, startIndex + show)
            .map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className="showNumber">
          <select name="" id="" onChange={handleChange}>
            <option value="5">Show 5</option>
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
          </select>
        </div>
        <button className="prev" onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <p>Page 1 of {totalPages}</p>
        <button
          className="next"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
