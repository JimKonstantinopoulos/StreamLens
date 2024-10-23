import styles from "./Navbar.module.css";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <img src="../assets/logo.png" alt="logo" />
      <div>
        <p>movies</p>
        <p>series</p>
        <p>books</p>
        <FaUser />
      </div>
    </nav>
  );
}
