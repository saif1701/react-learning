import "./App.css";
import Counter from "./useCallback/counter";

function App() {
  // const { data, error, loading } = useFetch(
  //   "https://fake-json-api.mock.beeceptor.com/users",
  // );

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("hi");
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // if (loading) {
  //   return <p>Data Loading...</p>;
  // }

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
