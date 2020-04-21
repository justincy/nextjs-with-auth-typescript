import Layout from "../components/Layout";
import React from "react";

function LoginPage() {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const setUsernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <Layout title="Login">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Username{" "}
            <input type="text" value={username} onChange={setUsernameHandler} />
          </label>
        </div>
        <div>
          <label>
            Password{" "}
            <input
              type="password"
              value={password}
              onChange={setPasswordHandler}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </Layout>
  );
}

export default LoginPage;
