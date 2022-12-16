import { ActivityIndicator, View } from "react-native";

import { styles } from "../../pages/Home/styles";
import { THEME } from "../../theme";

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={THEME.COLORS.Product.blue} />
        </View>
    )
}