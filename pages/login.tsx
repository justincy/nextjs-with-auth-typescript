import Layout from "../components/Layout";
import React from "react";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const setUsernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/auth/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 200) {
      router.push("/");
    } else {
      console.error("Login error", response);
    }
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
