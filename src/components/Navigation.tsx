import React from 'react';
import Link from "next/link";
import styles from "../styles/Navigation.module.css"

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full bg-white border-2 border-solid border-wave border-gray-400 p-4 ">
            <ul className="flex justify-between w-full">
                <li>
                    <Link className={styles.a} href={'/'}>Home</Link>
                </li>
                <li>
                    <Link className={styles.a} href={'/about'}>About Us</Link>
                </li>
            </ul>
        </nav>
    );
}