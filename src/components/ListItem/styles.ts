import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';
import './keyframes.css';

export const styles = {
  navItem: {
    fontFamily: FontTypes.MEDIUM,
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px', 
  },
  navLink: {
    textDecoration: 'none',
    color: Colors.LIGHT_GREY,
    fontWeight: 400,
    fontSize: '12px', 
    display: 'flex', 
    alignItems: 'center',
    letterSpacing: '0.5px', 
  },
  navLinkHover: {
    color: Colors.LIGHT_GREY,
  },
  activeNavItem: {
    color: Colors.BLACK,
    fontWeight: 300,
  },
  linkContent: {
    display: 'flex',
    alignItems: 'center',
  },
  dot: {
    display: 'inline-block',
    width: '5px',
    height: '5px',
    opacity: 0,
    marginRight: '5px',
    marginBottom: '1px',    
  },
  activeDot: {
    opacity: 1,
    backgroundColor: Colors.BLACK,
    animation: 'dotGrow 0.2s ease-in-out forwards',
  },
};

