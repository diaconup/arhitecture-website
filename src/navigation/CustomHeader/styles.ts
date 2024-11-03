import { Colors } from "../../utils/colors";

export const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky' as 'sticky',
    backgroundColor: Colors.WHITE,
    padding: '20px 0',
    top: '0',
    zIndex: 100,
  },
  navCenter: {
    display: 'flex',
    justifyContent: 'center', 
    flex: 1,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '40px',
    margin: 0,
    padding: 0,
  },
  languageSwitcher: {
    position: 'absolute' as 'absolute', 
    right: '20px', 
    display: 'flex',
    gap: '10px',
  },
  languageButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid white',
    backgroundColor: Colors.WHITE,
  },
  flagImage: {
    width: '20px',
    height: '15px',
    marginRight: '5px',
  },
};
