import React, { useMemo } from 'react';
import { styles } from './styles';

interface ListItemProps {
  index: number;
  page: string;
  activeIndex: number | null;
  handleClick: (index: number, page: string) => void;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ index, page, activeIndex, handleClick, children }) => {
  
  const navLinkStyle = useMemo(() => {
    return activeIndex === index 
      ? { ...styles.navLink, ...styles.activeNavItem }
      : styles.navLink;
  }, [activeIndex, index]);

  const dotStyle = useMemo(() => {
    return activeIndex === index 
      ? { ...styles.dot, ...styles.activeDot }
      : styles.dot;
  }, [activeIndex, index]);

  return (
    <li style={styles.navItem}>
      <div
        style={navLinkStyle}
        onClick={() => handleClick(index, page)}
      >
        <div style={styles.linkContent}>
          <div style={dotStyle} />
          {children}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
