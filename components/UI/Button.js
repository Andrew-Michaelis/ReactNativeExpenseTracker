import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";


function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary700,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary100,
  },
  flat: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary700,
  },
  buttonText: {
    color: GlobalStyles.colors.primary100,
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary800,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary200,
    borderRadius: 4,
  }
})