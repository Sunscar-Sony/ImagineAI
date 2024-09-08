import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>MyAIChatbot</div>
    <ul className={styles.navLinks}>
      <li><Link href="#">Home</Link></li>
      <li><Link href="#">Features</Link></li>
      <li><Link href="#">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
