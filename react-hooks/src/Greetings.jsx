function Greeting({ name, isLoggedIn }) {
  return (
    <div>
      <h1>Hello, {name}</h1>

      {isLoggedIn ? <p>Welcome back!</p> : <p>Please login</p>}
    </div>
  );
}

export default Greeting;
