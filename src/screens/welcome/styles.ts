import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';
import './keyframes.css';

export const styles = {
  welcomeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    fontSize: '40px',
    fontFamily: FontTypes.MEDIUM,
    animation: `moveUpAndFadeOut 1s forwards`,
    overflow: 'hidden',
  },

  letter: (index: number) => ({
    display: 'inline-block',
    opacity: 0,
    animation: `fadeInLetter 1s ease forwards ${index * 0.5}s`,
  }),

  staticText: {
    marginRight: '30px',
  },

  cursor: {
    display: 'inline-block',
    fontSize: '40px',
    color: Colors.WHITE,
    animation: 'blink 1s step-end infinite',
    marginBottom: '10px',
  },
};
