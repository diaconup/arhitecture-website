import { Colors } from "../../utils/colors";
import { FontTypes } from "../../utils/const";

export const styles = {
    button: {
        bottom: '30px',
        right: '30px',
        // padding: '10px 15px',
        fontSize: '16px',
        border: 'none',
        backgroundColor: Colors.WHITE,
        color: Colors.BLACK,
        fontFamily: FontTypes.MEDIUM,
        textTransform: 'uppercase' as 'uppercase',
        cursor: 'pointer',
        zIndex: '1000',
        transition: 'opacity 0.3s ease',
    },
};
