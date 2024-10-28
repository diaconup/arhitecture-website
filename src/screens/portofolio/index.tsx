import React from 'react';
import items from '../../utils/items.json';
import { Item } from '../../utils/types';
import ListItem from '../../components/ListItem/index';
import { styles } from './styles';
import BackToTop from '../../components/BackToTop';


const Portfolio: React.FC = () => {
  return (
    <div style={styles.portfolioContainer}>
      {items.map((item: Item, index: number) => (
        <ListItem key={item.id} item={item} index={index} />
      ))}
      <BackToTop />
    </div>
  );
};

export default Portfolio;
