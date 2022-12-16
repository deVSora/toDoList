import { StyleSheet } from "react-native";
import { THEME } from "../../theme";


export const styles = StyleSheet.create({
    container:{
        height: 64,
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.Base.grey[500],
        borderRadius: 8,
        alignItems: "center",
        justifyContent:'space-between',
        marginBottom: 8
    },
    checkButtonDefault:{
        borderWidth: 2,
        borderColor: THEME.COLORS.Product.blue,
        borderRadius: 50,
        height: 17,
        width: 17,
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkButtonActivate:{
        borderWidth: 2,
        borderRadius: 50,
        height: 17,
        width: 17,
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: THEME.COLORS.Product.purpleDark,
        backgroundColor: THEME.COLORS.Product.purpleDark
    },
    text:{
        color: THEME.COLORS.Base.grey[100],
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginHorizontal: 8,
        marginVertical: 12,
        flexShrink: 1
    },
    textCompleted:{
        color: THEME.COLORS.Base.grey[100],
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginHorizontal: 8,
        marginVertical: 12,
        flexShrink: 1,
        textDecorationLine: "line-through"
    },
    removeStyle:{
        alignItems:'center',
        justifyContent: 'center',
        marginRight: 8,
        height: 32,
        width: 32,
    }
})