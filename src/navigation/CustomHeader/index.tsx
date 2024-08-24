import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';

const CustomHeader = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link
            to="/"
            style={activeIndex === 0 ? { ...styles.navLink, ...styles.activeNavItem, position: 'relative' } : { ...styles.navLink, ...styles.navLinkHover }}
            onClick={() => handleClick(0)}
          >
            {activeIndex === 0 && <span style={styles.dot} />}Portfolio
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/about"
            style={activeIndex === 1 ? { ...styles.navLink, ...styles.activeNavItem, position: 'relative' } : { ...styles.navLink, ...styles.navLinkHover }}
            onClick={() => handleClick(1)}
          >
            {activeIndex === 1 && <span style={styles.dot} />}About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/contact"
            style={activeIndex === 2 ? { ...styles.navLink, ...styles.activeNavItem, position: 'relative' } : { ...styles.navLink, ...styles.navLinkHover, position: 'relative' }}
            onClick={() => handleClick(2)}
          >
            {activeIndex === 2 && <span style={styles.dot} />}Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default CustomHeader;
