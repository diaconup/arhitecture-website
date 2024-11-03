import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import BackToTop from '../../components/BackToTop';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div style={styles.aboutContainer}>
      <div style={styles.aboutTitle}>
        <h1>{t('aboutMe.title')}</h1>
      </div>
      <div style={styles.aboutContent}>
        <div style={styles.aboutParagraph}>
          <p style={styles.aboutTextParagraph}>
            {t('aboutMe.intro')}
          </p>
          <p style={styles.aboutTextParagraph}>
            {t('aboutMe.inspiration')}
          </p>
        </div>
        <div style={styles.aboutTextContainer}>
          <p style={styles.aboutTextParagraph}>
            {t('aboutMe.reading')}
          </p>
        </div>
        <img 
          src="../images/profile.png" 
          alt="About Me" 
          style={styles.aboutImage} 
          loading='lazy'
        />
      </div>
      <img 
        src="../images/stare_image.jpg" 
        alt="About Me" 
        style={styles.longImage}
        loading='lazy'
      />
      <div style={styles.aboutTitle}>
        <h1>{t('aboutMe.education')}</h1>
        <div style={styles.education}>
          <h3 style={styles.headerText}>{t('aboutMe.university')}</h3>
          <h3 style={styles.headerText}>{t('aboutMe.universityDates')}</h3>
        </div>
        <p style={styles.otherText}>{t('aboutMe.universityLocation')}</p>

        <div style={styles.education}>
          <h3 style={styles.headerText}>{t('aboutMe.highSchool')}</h3>
          <h3 style={styles.headerText}>{t('aboutMe.highSchoolDates')}</h3>
        </div>
        <p style={styles.otherText}>{t('aboutMe.highSchoolLocation')}</p>
      </div>
      <div style={styles.aboutTitle}>
        <h1>{t('aboutMe.technicalSkills')}</h1>
        <h3 style={styles.headerText}>{t('aboutMe.skills')}</h3>
      </div>
      <BackToTop />
    </div>
  );
};

export default AboutMe;
