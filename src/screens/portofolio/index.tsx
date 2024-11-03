import React from 'react';
import { useTranslation } from 'react-i18next';
import items_ro from '../../utils/items_ro.json';
import items_en from '../../utils/items_en.json';
import { Item } from '../../utils/types';
import ListItem from '../../components/ListItem/index';
import { styles } from './styles';
import BackToTop from '../../components/BackToTop';

const Portfolio: React.FC = () => {
  const { i18n } = useTranslation(); 
  const items = i18n.language === 'ro' ? items_ro : items_en; 

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
