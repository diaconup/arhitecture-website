import React, { useCallback, useState } from 'react'; // Import useState
import { styles } from './styles';
import { Colors } from '../../utils/colors';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [buttonMessages, setButtonMessages] = useState({
    button1: '',
    button2: '',
    button3: '',
  });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleButtonClick = useCallback((buttonKey: any, message: any) => {
    if (buttonKey === 'button2') {
      setButtonMessages((prevMessages) => ({
        ...prevMessages,
        [buttonKey]: <a href="https://www.instagram.com/ariananassss/" target="_blank" rel="noopener noreferrer" style={{ color: Colors.BRIGHT_BLACK }}>INSTAGRAM</a>,
      }));
    } else {
      setButtonMessages((prevMessages) => ({
        ...prevMessages,
        [buttonKey]: message,
      }));
    }
  }, []);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const apiKey = process.env.REACT_APP_API_KEY;
    if (apiKey) {
      const dataToSubmit = { ...formData, access_key: apiKey };
      const json = JSON.stringify(dataToSubmit);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert(t('contact.successAlert'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(t('contact.errorAlert'));
      }
    } else {
      console.error("API key is not defined");
    }
  };

  return (
    <div>
      <section style={styles.contact}>
        <form style={styles.form} onSubmit={onSubmit}>
          <div style={styles.inputBox}>
            <label>{t('contact.nameLabel')}</label>
            <input
              type="text"
              style={styles.field}
              placeholder={t('contact.namePlaceholder')}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputBox}>
            <label>{t('contact.emailLabel')}</label>
            <input
              type="email"
              style={styles.field}
              placeholder={t('contact.emailPlaceholder')}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputBox}>
            <label>{t('contact.messageLabel')}</label>
            <textarea
              style={styles.fieldMess}
              placeholder={t('contact.messagePlaceholder')}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>{t('contact.submitButton')}</button>
        </form>
      </section>

      <div style={styles.buttonContainer}>
        <div style={styles.buttonWrapper}>
          <button
            style={styles.buttonWide}
            onClick={() => handleButtonClick('button1', t('contact.emailMessage'))}
          >
            {t('contact.emailButton')}
          </button>
          {buttonMessages.button1 && <p style={styles.message}>{buttonMessages.button1}</p>}
        </div>

        <div style={styles.buttonWrapper}>
          <button
            style={styles.buttonWide}
            onClick={() => handleButtonClick('button2', t('contact.socialMessage'))}
          >
            {t('contact.socialButton')}
          </button>
          {buttonMessages.button2 && <p style={styles.message}>{buttonMessages.button2}</p>}
        </div>

        <div style={styles.buttonWrapper}>
          <button
            style={styles.buttonWide}
            onClick={() => handleButtonClick('button3', t('contact.phoneMessage'))}
          >
            {t('contact.phoneButton')}
          </button>
          {buttonMessages.button3 && <p style={styles.message}>{buttonMessages.button3}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
