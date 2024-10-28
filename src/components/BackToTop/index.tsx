import React, { useState, useEffect } from 'react';
import { styles } from './styles';

const BackToTop = () => {
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
            behavior: 'smooth', // Smooth scroll
        });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    style={styles.button}
                    aria-label="Back to top"
                >
                    Back to Top
                </button>
            )}
        </>
    );
};


export default BackToTop;