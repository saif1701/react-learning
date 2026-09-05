import { useState, useMemo, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(10);
  const [page, setPage] = useState(1);
  const [counter, setCounter] = useState(0);

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
  );
  const { debounceSearch, loading: debounceSearchLoading } = useDebounce(
    search,
    500,
  );
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(debounceSearch.toLowerCase()),
    );
  }, [data, debounceSearch]);

  useEffect(() => {
    // setCounter(0);

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 5) {
          clearInterval(timer);
          return prev;
        }

        return prev + 1;
      });
    }, 1);

    return () => clearInterval(timer);
  }, []);

  const startIndex = (page - 1) * show;
  const totalPages = Math.ceil(filteredData.length / show);

  if (error) {
    return <p>{error}</p>;
  }
  if (loading) {
    return <p>Loading.....</p>;
  }
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <section id="center">
        <div>
          <input
            type="text"
            name="search"
            id=""
            value={search}
            onChange={handleChange}
          />
        </div>
        {debounceSearchLoading && <p>Searching.....{counter}</p>}
        {!debounceSearchLoading &&
          filteredData
            .slice(startIndex, startIndex + show)
            .map((item) => <p key={item.id}>{item.title}</p>)}
        <button onClick={handlePrev}>Prev</button>
        <p>
          Page {page} of {totalPages || 1}
        </p>
        <button onClick={handleNext}>Next</button>
      </section>
    </>
  );
}

export default App;
