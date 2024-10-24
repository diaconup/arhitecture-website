import React from 'react';
import { styles } from './styles';
import { Item } from '../../utils/types';

interface ListItemProps {
  item: Item;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div style={styles.portfolioItem} className='no-select'>
      <div style={styles.iconTextContainer}>
        <img src={item.iconUrl} alt={`${item.title} icon`} style={styles.icon} />
        <div style={styles.textContainer}>
          <p style={styles.title}>{item.title}</p>
          <p style={styles.location}>{item.location}</p>
        </div>
      </div>

      <div style={styles.imageContainer}>
        <img src={item.baseImageUrl} alt={item.title} style={styles.image} />
      </div>
    </div>
  );
};

export default ListItem;
