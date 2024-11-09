import styles from "./Navbar.module.css";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <img src="../assets/logo.png" alt="logo" className={styles.navLogo} />
      <ul className={styles.navItems}>
        <li>movies</li>
        <li>series</li>
        <li>books</li>
        <li>
          <FaUser />
        </li>
      </ul>
    </nav>
  );
}
