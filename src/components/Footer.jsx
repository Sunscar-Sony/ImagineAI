import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerLogo}>MyAIChatbot</div>
      <ul className={styles.footerLinks}>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className={styles.footerSocials}>
        <a href="#" className={styles.socialLink}>Facebook</a>
        <a href="#" className={styles.socialLink}>Twitter</a>
        <a href="#" className={styles.socialLink}>Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
