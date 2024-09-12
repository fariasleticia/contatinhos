import { theme } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    name: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 18,
    },
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
        gap: 7,
    },
})