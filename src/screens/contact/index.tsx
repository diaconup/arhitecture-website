import React, { useCallback, useState } from 'react'; // Import useState
import { styles } from './styles';
import { Colors } from '../../utils/colors';

const Contact = () => {
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

  const handleChange = useCallback((event: any) => {
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

  const onSubmit = async (event: any) => {
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
        alert("Your message has been sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("There was an error sending your message. Please try again.");
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
          <label>Full Name</label>
          <input
            type="text"
            style={styles.field}
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleChange} // Update state on change
            required
          />
        </div>
        <div style={styles.inputBox}>
          <label>Email Address</label>
          <input
            type="email"
            style={styles.field}
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputBox}>
          <label>Your message</label>
          <textarea
            style={styles.fieldMess}
            placeholder='Enter your message...'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type='submit' style={styles.button}>Send message</button>
      </form>
    </section>

    <div style={styles.buttonContainer}>
        <div style={styles.buttonWrapper}>
          <button style={styles.buttonWide} onClick={() => handleButtonClick('button1', 'ariana.rotar@yahoo.com')}>EMAIL +</button>
          {buttonMessages.button1 && <p style={styles.message}>{buttonMessages.button1}</p>} 
        </div>
        
        <div style={styles.buttonWrapper}>
          <button style={styles.buttonWide} onClick={() => handleButtonClick('button2', 'INSTAGRAM')}>SOCIAL +</button>
          {buttonMessages.button2 && <p style={styles.message}>{buttonMessages.button2}</p>} 
        </div>
        
        <div style={styles.buttonWrapper}>
          <button style={styles.buttonWide} onClick={() => handleButtonClick('button3', '(+40) 772 260 454')}>PHONE +</button>
          {buttonMessages.button3 && <p style={styles.message}>{buttonMessages.button3}</p>} 
        </div>
      </div>
    </div>
  );
};

export default Contact;
