import { text } from "stream/consumers";
import { Colors } from "../../utils/colors";
import { FontTypes } from "../../utils/const";
import './keyframes.css';

export const styles = {
  contact: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FontTypes.REGULAR,
    overflow: 'hidden',
  },
  form: {
    animation: 'slideIn 1s forwards',
    maxWidth: '350px',
    width: '100%',
    margin: '25px',
  },
  header:{
    fontSize: '24px',
    textAlign: 'center' as 'center', 
  },
  inputBox: {
    marginTop: '20px',
  },
  field: {
    width: '100%',
    height: '15px',
    background: 'transparent',
    border: '1px solid #333',
    outline: 'none',
    padding: '10px',
    fontSize: '14px',
    marginTop: '10px',
  },
  fieldMess: {
    width: '100%',
    background: 'transparent',
    border: '1px solid #333',
    outline: 'none',
    padding: '15px',
    fontSize: '14px',
    marginTop: '10px',
    height: '200px',
    resize: 'none' as 'none',
  },
  button: {
    marginTop: '10px',
    width: '50%',
    height: '30px',
    border: '1px solid #333',
    background: Colors.WHITE,
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
  },
  buttonWide: {
    border: 'none',
    backgroundColor: Colors.WHITE,
    color: Colors.LIGHT_GREY,
    cursor: 'pointer',
    width: '100%',
    margin: '10px 50px',
    fontFamily: FontTypes.REGULAR,
    textAlign: 'left' as 'left',
    fontSize: '10px',
  },
  message: {
    fontSize: '10px',
    textAlign: 'center' as 'center',
    fontFamily: FontTypes.REGULAR,
    color: Colors.BRIGHT_BLACK,
    animation: 'slideDown 0.5s ease forwards',
  },
  buttonWrapper: {
    textAlign: 'center' as 'center',
  },
};
