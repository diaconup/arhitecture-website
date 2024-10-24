import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';

export const styles = {
  portfolioItem: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '20px 0',
    position: 'relative' as 'relative', // Add this line
  },
  iconTextContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-end', 
    marginRight: '20px', 
  },
  textContainer: {
    textAlign: 'right' as 'right',
    fontFamily: FontTypes.MEDIUM,
    overflow: 'hidden',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    maxWidth: '22vw',
    maxHeight: '44vh',
    objectFit: 'cover' as 'cover',
    margin: '0 auto',
  },
  icon: {
    width: '5.3vh',
    height: '2.6vw',
  },
  location: {
    color: Colors.LIGHT_GREY,
    fontSize: '11px',
  },
  title: {
    color: Colors.BLACK,
    fontSize: '14px',
  },
};
