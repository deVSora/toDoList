import { TouchableOpacity, View, Text } from "react-native";
import { useState } from "react";
import { Trash2, Check } from "react-native-feather";

import { styles } from "./styles";
import { THEME } from "../../theme";

interface Props{
    description: string
    onRemove: () => void
    onCheck: () => void
    isChecked : boolean
}

export function Task(props: Props){
    const [iconColor, setIconColor] = useState(false)
    function handleIconColor(){
        iconColor ? setIconColor(false) : setIconColor(true)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={props.isChecked ? styles.checkButtonActivate : styles.checkButtonDefault} onPress={props.onCheck}>
                {props.isChecked ? <Check height={10} width={10} color={'white'}/> : <></>}
            </TouchableOpacity>
            <Text style={props.isChecked ? styles.textCompleted : styles.text}>
                {props.description}
            </Text>
            <TouchableOpacity 
                style={styles.removeStyle} 
                onPress={props.onRemove}
                onPressIn={handleIconColor} 
                onPressOut={handleIconColor}
            >
                {iconColor ? 
                    <Trash2 
                    onPress={props.onRemove}
                    onPressIn={handleIconColor}
                    onPressOut={handleIconColor}
                    color={iconColor ? THEME.COLORS.Base.danger : THEME.COLORS.Base.grey[300]} 
                    height={14} width={14}/>
                    :
                    <Trash2 
                    onPress={props.onRemove}
                    onPressIn={handleIconColor}
                    onPressOut={handleIconColor}
                    color={iconColor ? THEME.COLORS.Base.danger : THEME.COLORS.Base.grey[300]} 
                    height={14} width={14}/>   
                }

            </TouchableOpacity>
        </View>
    )
}