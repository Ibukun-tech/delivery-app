import axios from "axios";
import styles from "./../../styles/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [err, setErr] = useState(false);

  const router = useRouter();
  const handleClick = async () => {
    try {
      axios.post("http://localhost:3000/api/login", { username, password });
      router.push("/admin");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginHeader}>Admin Dashboard</h1>
        <input
          placeholder="username"
          value="text"
          className={styles.loginInput}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="password"
          value="password"
          className={styles.loginInput}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={handleClick} className={styles.loginButton}>
          Login
        </button>
        {err && <span className={styles.loginErr}>Wrong Credentials</span>}
      </div>
    </div>
  );
};

export default Login;
