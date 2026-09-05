import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Email: {email}</p>
    </div>
  );
}

export default Login;
