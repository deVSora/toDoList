import { StyleSheet } from "react-native"

import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: THEME.COLORS.Base.grey[600]
    },
    header:{
        height: 200,
        backgroundColor: THEME.COLORS.Base.grey[700],
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContent:{
        paddingLeft: 24,
        paddingRight: 24
    },
    inputContainer:{
        marginTop: -32,
        flexDirection: 'row',
    },
    inputDefault:{
        backgroundColor: THEME.COLORS.Base.grey[500],
        marginRight: 4,
        paddingStart: 16,
        borderRadius: 4,
        color: THEME.COLORS.Base.grey[100],
        borderColor: THEME.COLORS.Base.grey[700],
        borderWidth: 1,
        flexGrow: 1,
        maxWidth: 288,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.LG,
    },
    inputActive:{
        backgroundColor: THEME.COLORS.Base.grey[500],
        marginRight: 4,
        paddingStart: 16,
        maxWidth: 288,
        flexGrow: 1,
        borderRadius: 4,
        color: THEME.COLORS.Base.grey[100],
        borderColor: THEME.COLORS.Product.purpleDark,
        borderWidth: 1,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.LG,
    },
    inputButton:{
        padding: 18,
        backgroundColor: THEME.COLORS.Product.blueDark,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    textContainer:{
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textView:{
        flexDirection: 'row',
    },
    createdTasks:{
        color: THEME.COLORS.Product.blue,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        marginRight: 8
    },
    completedTasks:{
        color: THEME.COLORS.Product.purple,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        marginRight: 8
    },
    textValue:{
        color: THEME.COLORS.Base.grey[200],
        backgroundColor: THEME.COLORS.Base.grey[400],
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM
    },
    itemsContainer:{
        marginTop: 20,
    },
    emptyContainer:{
        borderTopColor: THEME.COLORS.Base.grey[400],
        borderTopWidth: 1,
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20
    },
    emptyTextContainer:{
        marginTop: 16
    },
    emptyText:{
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.Base.grey[300],
        textAlign: 'center'
    },
    subEmptyText:{
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.Base.grey[300],
        textAlign: 'center'
    },
})