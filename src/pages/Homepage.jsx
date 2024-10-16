import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main>
      <picture>
        <source media="(max-width: 320px)" srcSet="../assets/bg-320.webp" />
        <source media="(max-width: 640px)" srcSet="../assets/bg-640.webp" />
        <source media="(max-width: 1280px)" srcSet="../assets/bg-1280.webp" />
        <source media="(max-width: 1920px)" srcSet="../assets/bg-1920.webp" />
        <img
          srcSet="../assets/bg.webp"
          alt="Responsive Background"
          className={styles.backgroundImage}
        />
      </picture>
      <div className={styles.overlay}></div>
      <section>
        <img src="../assets/logo.png"></img>
        <Link to="/login" className={styles.cta}>
          Sign up
        </Link>
      </section>
    </main>
  );
}
