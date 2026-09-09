// import Counter from "./useCallback/counter";
import Counter from "./Counter";
import Button from "./Button";
import "./App.css";

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
      <Button variant="secondary" size="small" children="View More" />
    </>
  );
}

export default App;
