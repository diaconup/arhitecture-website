import { Colors } from '../../utils/colors';
import { FontTypes } from '../../utils/const';
import './keyframes.css';

export const styles = {
  navItem: {
    fontFamily: FontTypes.MEDIUM,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5px 10px', 
  },
  navLink: {
    textDecoration: 'none',
    color: Colors.LIGHT_GREY,
    fontWeight: 400,
    fontSize: '13px', 
    display: 'flex', 
    alignItems: 'center',
    letterSpacing: '0.5px', 
  },
  navLinkHover: {
    color: Colors.LIGHT_GREY,
  },
  activeNavItem: {
    color: Colors.BLACK,
    fontWeight: 400,
  },
  linkContent: {
    display: 'flex',
    alignItems: 'center',
  },
  dot: {
    display: 'inline-block',
    width: '5px',
    height: '5px',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: '5px',
    marginBottom: '1.5px',
    verticalAlign: 'middle',
  },
  activeDot: {
    backgroundColor: Colors.BLACK,
  },
  notActiveDot:{
    backgroundColor: Colors.WHITE,
  }
};

