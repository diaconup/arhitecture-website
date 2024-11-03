import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import ListItem from '../../components/NavItem';

type CustomHeaderProps = {
  showPage: (page: string) => void;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ showPage }) => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = useCallback((index: number, page: string): void => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    showPage(page);
  }, [showPage]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navCenter}>
        <ul style={styles.navList}>
          <ListItem index={0} page="portfolio" activeIndex={activeIndex} handleClick={handleClick}>
            {t('portfolio')}
          </ListItem>
          <ListItem index={1} page="about" activeIndex={activeIndex} handleClick={handleClick}>
            {t('about')}
          </ListItem>
          <ListItem index={2} page="contact" activeIndex={activeIndex} handleClick={handleClick}>
            {t('contact1')}
          </ListItem>
        </ul>
      </div>
      <div style={styles.languageSwitcher}>
        <button onClick={() => changeLanguage('en')} style={styles.languageButton}>
          <img src={"../../images/uk_flag.png"} alt="English" style={styles.flagImage} />
        </button>
        <button onClick={() => changeLanguage('ro')} style={styles.languageButton}>
          <img src={"../../images/ro_flag.png"} alt="Romanian" style={styles.flagImage} />
        </button>
      </div>
    </nav>
  );
};

export default CustomHeader;
