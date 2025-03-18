import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <a href="/" className={styles.logo}>
                        <h1>Sporticloud</h1>
                    </a>
                </div>
                <div className={styles.linksSection}>
                    <div className={styles.linkColumn}>
                        <ul className={styles.linkList}>
                            <h3 className={styles.columnTitle}>Helpful Links</h3>
                            <li><a href="#" className={styles.link}>Podcast Charts</a></li>
                            <li><a href="#" className={styles.link}>Spotify for Artists</a></li>
                        </ul>
                    </div>
                    <div className={styles.linkColumn}>
                        <ul className={styles.linkList}>
                            <h3 className={styles.columnTitle}>Need help?</h3>
                            <li><a href="#" className={styles.link}>Contact us</a></li>
                            <li><a href="#" className={styles.link}>FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <span className={styles.copyright}>© 2024 Sporticloud AB</span>
            </div>
            <a className={styles.scrollToTop} href="#top" onClick={scrollToTop}>
                <div className={styles.scrollToTopButton}>↑</div>
            </a>
        </footer>
    );
}

export default Footer;
