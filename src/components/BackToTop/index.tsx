import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

const BackToTop = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    style={styles.button}
                    aria-label={t('backToTop.buttonLabel')} 
                >
                    {t('backToTop.buttonLabel')} 
                </button>
            )}
        </>
    );
};

export default BackToTop;
