import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className={styles.navbar}>
            <div
                className={`${styles.leftSide} ${openLinks ? styles.open : styles.close}`}
            >
                <Link to="/">
                    <h1 className={styles.textH1}>Statistics</h1>
                </Link>
            </div>
            <div className={styles.rightSide}>
                <Link to="/"> Home </Link>
                <Link to="/charts"> Charts </Link>
                <Link to="/contact"> Contact </Link>
                <Link onClick={logout}> Logout </Link>
            </div>
        </div>
    );
}

export default Navbar;
