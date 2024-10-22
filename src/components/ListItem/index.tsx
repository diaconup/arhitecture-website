import React from 'react';
import { styles } from './styles';

interface ListItemProps {
    imageUrl: string;
    title: string;
    subtitle: string;
  }
  
const ListItem: React.FC<ListItemProps> = ({ imageUrl, title, subtitle }) => {
    return (
      <div style={styles.container}>
        <img src={imageUrl} alt={title} style={styles.image as React.CSSProperties} />
        <div style={styles.textContainer}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    );
  };

export default ListItem;