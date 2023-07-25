import { View, Pressable, StyleSheet } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';


function IconButton({icon, size, color, onPress, background}) {
  const isBack = !!background;

  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.buttonContainer, isBack && {backgroundColor: background}]}>
        <SimpleLineIcons name={icon} size={size} color={color}/>
      </View>
    </Pressable>
  )
}

export default IconButton;

const styles = new StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});