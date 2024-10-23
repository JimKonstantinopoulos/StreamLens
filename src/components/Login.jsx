import styles from "./Login.module.css";
import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setPasswordVisible((passwordVisible) => !passwordVisible);
  }

  function handleSubmit() {
    navigate("/app");
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <img src="../assets/logo.png" alt="logo" />
      <h1>Welcome to StreamLens</h1>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <FaUser className={styles.icon} />
      </div>
      <div className={styles.inputBox}>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {passwordVisible ? (
          <FaLockOpen
            className={`${styles.icon} ${styles.clickable}`}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <FaLock
            className={`${styles.icon} ${styles.clickable}`}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
