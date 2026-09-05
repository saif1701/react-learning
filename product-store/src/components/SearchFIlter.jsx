import { useState, useMemo } from "react";
export const products = [
  { id: 1, name: "iPhone", price: 80000 },
  { id: 2, name: "Samsung", price: 70000 },
  { id: 3, name: "MacBook", price: 150000 },
  { id: 4, name: "iPad", price: 50000 },
];
const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredProd = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);
  return (
    <>
      <h1>Seach filter</h1>
      <input type="text" value={search} onChange={handleChange} />
      {search}
      {filteredProd.map((prod) => (
        <p key={prod.id}>{prod.name}</p>
      ))}
    </>
  );
};
export default SearchFilter;
