import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';
import './keyframes.css';

export const IMAGE_WIDTH = 459;
export const IMAGE_HEIGHT = 344;

export const styles = {
  container: {
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
    minWidth: '100px',
  },

  icon: {
    width: '40px',
    height: '40px',  
    animation: 'slideLeft 0.5s forwards',
  },

  textContainer: {
    textAlign: 'right' as 'right',
    fontFamily: FontTypes.MEDIUM,
    height: '50px',
    lineHeight: '1.5',
    padding: '2px',
    animation: 'slideLeft 0.5s forwards',
  },

  title: {
    color: Colors.BLACK,
    fontSize: '14px',
  },

  location: {
    color: Colors.LIGHT_GREY,
    fontSize: '11px',
    textTransform: 'uppercase' as 'uppercase',
  },

  imageContainer: {
    cursor: 'grab',
    display: 'block', 
    verticalAlign: 'top',
  },
  
  slide: {
    width: 'calc(100% - 30%)',
    cursor: 'pointer',
    display: 'flex',
    FlexDirection: 'column',
    alignItems: 'center',
  },

  thumbnailImage: {
    width: `${IMAGE_WIDTH}px`,
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
    animation: 'shrink 1s ease-in-out forwards',
  },
  enlargedImage: {
    width: `${IMAGE_WIDTH * 2}px`, 
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
    animation: 'grow 1s ease-in-out forwards',
  },
  swiper: {
    width: '100%', // Use viewport width to take full screen width
    height: 'auto', // Adjust as needed or set a specific height
    padding: '20px 0', // Optional: Add some vertical padding for better spacing
    // boxSizing: 'border-box', // Ensure padding is included in the width
  },
  slideContent: {
    display: 'flex',
    FlexDirection: 'column', // Stack icon, title, location, and image vertically
    alignItems: 'center', // Center content horizontally
    textAlign: 'center' as 'center', // Center text
  },
  enlargedSpacing: {
    marginTop: '20px', // Adjust this value as needed
  },
};