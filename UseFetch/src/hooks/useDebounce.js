import { useState, useEffect } from "react";
const useDebounce = (value, delay = 500) => {
  const [debounceSearch, setDebounceSearch] = useState(value);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDebounceSearch(value);
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return { debounceSearch, loading };
};

export default useDebounce;
