import React from 'react';
import items from '../../utils/items.json';
import { Item } from '../../utils/types';
import ListItem from '../../components/ListItem';
import { styles } from './styles';

const Portfolio: React.FC = () => {
  return (
    <div style={styles.portfolioContainer}>
      {items.map((item: Item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
