export const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '10px 0',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '40px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontFamily: 'FontTypes.LIGHT, sans-serif',
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 300,
    fontSize: '14px',
  },
  navLinkHover: {
    color: 'gray',
  },
  activeNavItem: {
    color: 'black',
    position: 'relative',
  },
  dot: {
    content: '""',
    display: 'inline-block',
    width: '8px',       /* Width of the square */
    height: '8px',      /* Height of the square */
    backgroundColor: 'black',
    marginRight: '8px', /* Space between the square and the text */
  },
};
