import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className={styles.navbar}>
            <div
                className={`${styles.leftSide}`}
            >
                <Link to="/">
                    <h1 className={styles.textH1}>Statistics</h1>
                </Link>
            </div>
            <div className={styles.rightSide}>
                <Link to="/"> Home </Link>
                <Link to="/"> Charts </Link>
                <Link to="/contact"> Contact </Link>
                <Link onClick={logout}> Logout </Link>
            </div>
        </div>
    );
}

export default Navbar;
