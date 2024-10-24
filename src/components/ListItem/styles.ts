import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';

export const styles = {
  portfolioItem: {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    margin: '20px 0',
    alignItems: 'flex-start',
    paddingRight: '60px',
  },
  iconTextContainer: {
    display: 'block',
    textAlign: 'right' as 'right',
    marginRight: '15px',
  },
  textContainer: {
    textAlign: 'right' as 'right',
    fontFamily: FontTypes.MEDIUM,
    height: '50px',
    lineHeight: '1.5',
    padding: '2px'
  },
  imageContainer: {
    display: 'block', 
    verticalAlign: 'top',
  },
  image: {
    width: '459px', 
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
