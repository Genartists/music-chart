import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const HeaderArtist = () => {
    return (
        <header>
            <div id="top"></div>
            <div className={styles.heroHead}>
                <h1><Link to="/">Sporticloud</Link></h1>
                <nav>
                    <ul className={styles.navMenu}>
                        <li className={`${styles.child}`}><Link to="/" className={`${styles.navLink}`}>Home</Link></li>
                        <li className={`${styles.child}`}><Link to="/artists"
                                                                className={`${styles.navLink}`}>Artists</Link></li>
                        {/*<Link className={styles.child}><a href="#instruments" className={styles.navLink}>Instruments</a></Link>*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderArtist;

