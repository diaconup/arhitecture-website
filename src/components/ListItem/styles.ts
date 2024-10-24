import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';

export const styles = {
  portfolioItem: {
    display: 'flex',
    margin: '20px 0',
    alignItems: 'flex-start',
  },
  iconTextContainer: {
    display: 'inline-block',
    width: '30%',
    height: '100%',
    marginRight: '15px',
    textAlign: 'right' as 'right', // Aligns the content to the right
  },
  textContainer: {
    textAlign: 'right' as 'right',
    fontFamily: FontTypes.MEDIUM,
    overflow: 'hidden',
  },
  imageContainer: {
    display: 'inline-block',
    width: '80%', 
    height: '100%',
    verticalAlign: 'top',
  },
  image: {
    maxWidth: '70%', 
    maxHeight: '559px',
    objectFit: 'cover' as 'cover',
  },
  icon: {
    width: '50px',
    height: '50px',
    display: 'inline-block',
  },
  location: {
    color: Colors.LIGHT_GREY,
    fontSize: '11px',
    textTransform: 'uppercase' as 'uppercase',
  },
  title: {
    color: Colors.BLACK,
    fontSize: '14px',
  },
};
