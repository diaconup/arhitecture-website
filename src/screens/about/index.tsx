import React from 'react';
import { styles } from './styles';
import BackToTop from '../../components/BackToTop';

const AboutMe = () => {
  return (
    <div style={styles.aboutContainer}>
      <div style={styles.aboutTitle}>
        <h1>ABOUT ME</h1>
      </div>
      <div style={styles.aboutContent}>
        <div style={styles.aboutParagraph}>
          <p style={styles.aboutTextParagraph}>
          Sunt studentă în anul V la Facultatea de Arhitectură și Urbanism, unde mă pregătesc să devin arhitect, 
          o profesie ce are puterea de a transforma spatiile în experiențe semnificative pentru oameni. 
          De-a lungul anilor de studiu, am descoperit că arhitectura înseamnă mult mai mult decât proiectarea de clădiri sau configurarea spatiilor - 
          este o artă complexă și o știintă în același timp, ce implică întelegerea profundă a modului în care oamenii interacționează cu mediul construit, 
          a emotiilor pe care un spatiu le poate evoca și a impactului asupra comunitătii și naturii din jur. 
          </p>
          <p style={styles.aboutTextParagraph}>
          Arhitectura creează legături invizibile între oameni, locuri și timpuri, iar acest lucru mă 
          inspiră să îmi doresc să contribui la crearea unor spații care să vorbească nu doar despre estetică și functionalitate, ci și despre identitate, sustenabilitate și inovatie.
          </p>
        </div>
        <div style={styles.aboutTextContainer}>
          <p style={styles.aboutTextParagraph}>
          In momentul de fată citesc Atomic habits by James Clear. Cartea explorează ideea schimbărilor mici și constante pentru îmbunătătirea performanței pe termen lung. 
          Această filozofie este perfect aplicabilă și în arhitectură, unde evolutia continuă și inovatia sunt cheia pentru a crea 
          spatii relevante și de impact. 
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
        <h1>Education</h1>
        <div style={styles.education}>
        <h3 style={styles.headerText}>Facultatea de arhitectură și urbanism</h3>
        <h3 style={styles.headerText}> Oct 2020 - Present</h3>
        </div>
        <p style={styles.otherText}>Cluj-Napoca, Romania</p>

        <div style={styles.education}>
        <h3 style={styles.headerText}>Colegiul National - Mircea Eliade</h3>
        <h3 style={styles.headerText}>Sep 2016 - Oct 2020</h3>
        </div>
        <p style={styles.otherText}>Sighișoara, Romania</p>
        
      </div>
      <div style={styles.aboutTitle}>
        <h1>Technical Skills</h1>
        <h3 style={styles.headerText}>ArchiCAD / Adobe PHOTOSHOP / Lightroom / Lumion / TwinMotion</h3>
      </div>
      <BackToTop />
    </div>
  );
};

export default AboutMe;
