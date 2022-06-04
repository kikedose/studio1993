import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.sass';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li className={styles.navBar__navLink}>
          <Link href="/">STUDIO 1993</Link>
        </li>
        <li className={styles.navBar__navLink}>
          <Link href="/contacto">CONTACTO</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
