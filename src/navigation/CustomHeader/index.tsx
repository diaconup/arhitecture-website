import React, { useState } from 'react';
import { styles } from './styles';
import ListItem from '../../components/NavItem';

type CustomHeaderProps = {
  showPage: (page: string) => void;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ showPage }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, page: string): void => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index)); 
    showPage(page);
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <ListItem index={0} page="portfolio" activeIndex={activeIndex} handleClick={handleClick}>
          PORTFOLIO
        </ListItem>
        <ListItem index={1} page="about" activeIndex={activeIndex} handleClick={handleClick}>
          ABOUT
        </ListItem>
        <ListItem index={2} page="contact" activeIndex={activeIndex} handleClick={handleClick}>
          CONTACT
        </ListItem>
      </ul>
    </nav>
  );
};

export default CustomHeader;
