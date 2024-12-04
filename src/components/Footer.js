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
        <footer>
            <div className={styles.bottomContainer}>
                <div className={styles.containerNav}>
                    <nav>
                        <ul className={styles.navBottom}>
                            <li><a href="" className={styles.navLink}>Policy</a></li>
                            <li><a href="" className={styles.navLink}>Term of Use</a></li>
                            <li><a href="" className={styles.navLink}>Accessibility</a></li>
                            <li><a href="" className={styles.navLink}>© Sporticloud</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <a className={styles.link} href="#top" id="up-button" onClick={scrollToTop}>
                <div className={styles.btnUp}>up</div>
            </a>
        </footer>
    );
}

export default Footer;

