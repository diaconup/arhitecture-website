import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';

export const styles = {
  aboutContainer: {
    maxWidth: '85%',
    margin: '0 auto',
    padding: '40px 20px',
  },
  aboutTitle: {
    textAlign: 'left' as 'left',
    marginBottom: '20px',
    fontFamily: FontTypes.MEDIUM,
    fontSize: '40px',
    color: Colors.BRIGHT_BLACK,
    fontWeight: '10px',
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  },
  aboutParagraph: {
    lineHeight: '1.6',
    color: Colors.BRIGHT_BLACK,
    fontFamily: FontTypes.MEDIUM,
  },
  aboutTextContainer: {
    color: Colors.BRIGHT_BLACK,
    marginLeft: '50px',
    lineHeight: '21px',
  },
  aboutTextParagraph: {
    fontSize: '16px',
    margin: '10px 0',
    textAlign: 'justify' as 'justify',
  },
  aboutImage: {
    width: '450px',
    height: '450px',
    objectFit: 'cover' as 'cover',
    marginLeft: '250px',
  },
  longImage:{
    width: '1579px',
    height: '50%',
    objectFit: 'cover' as 'cover',
    marginTop: '80px',
  }
};