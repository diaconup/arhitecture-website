import React, { useMemo, useState } from 'react';
import { styles } from './styles';
import './keyframes.css';

interface ListItemProps {
  index: number;
  page: string;
  activeIndex: number | null;
  handleClick: (index: number, page: string) => void;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ index, page, activeIndex, handleClick, children }) => {
  const [isPressed, setIsPressed] = useState(false);

  const navLinkStyle = useMemo(() => {
    return activeIndex === index 
      ? { ...styles.navLink, ...styles.activeNavItem, cursor: 'pointer' }
      : { ...styles.navLink, cursor: 'pointer'};
  }, [activeIndex, index]);

  const dotStyle = useMemo(() => {
    if (!isPressed) {
      return { ...styles.dot, ...styles.notActiveDot, cursor: 'pointer' };
    }
    return activeIndex === index 
      ? { ...styles.dot, ...styles.activeDot, cursor: 'pointer', animation: 'dotGrow 0.25s ease-in-out forwards' } 
      : { ...styles.dot, ...styles.activeDot, cursor: 'pointer', animation: 'dotShrink 0.4s ease-in-out forwards' }; 
  }, [activeIndex, index, isPressed]);

  const handleNavItemClick = useMemo(() => () => {
    setIsPressed(true);
    handleClick(index, page);
  }, [handleClick, index, page]);

  return (
    <li style={styles.navItem}>
      <div
        style={navLinkStyle}
        onClick={handleNavItemClick}
      >
        <div style={styles.linkContent} className="no-select">
          <div style={dotStyle} />
          {children}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
