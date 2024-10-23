import { Link } from "react-router-dom";
import styles from "./Greet.module.css";

export default function Greet() {
  return (
    <section>
      <img src="../assets/logoFull.png" alt="logo" />
      <div className={styles.btnContainer}>
        <Link to="/login" className={styles.cta}>
          Login
        </Link>
        <Link to="/signup" className={styles.cta}>
          SignUp
        </Link>
      </div>
    </section>
  );
}
