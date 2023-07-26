import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

import Button from "../components/UI/Button";

function recentSettingHandler() {
  // set days recent context
}

function displaySettingHandler() {
  // set display mode context
}

function orderSettingHandler() {
  // set default sort order for items
}

function Settings() {
  const recentSetting = 1; //settings context
  const lightMode = 0; //settings context
  const orderBy = 'date'; //settings context

  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.text, styles.title]}>Settings Page</Text>
      <View style={styles.item}>
        <Text style={styles.text}>Recent Day Value</Text>
        <View style={styles.twiddles}>
          <Button 
            onPress={recentSettingHandler}
            mode={recentSetting !== 1 && 'flat'}
            style={styles.settingsButton}
          >24 Hours</Button>
          <Button 
            onPress={recentSettingHandler}
            mode={recentSetting !== 2 && 'flat'}
            style={styles.settingsButton}
          >One Week</Button>
          <Button 
            onPress={recentSettingHandler}
            mode={recentSetting !== 3 && 'flat'}
            style={styles.settingsButton}
          >One Month</Button>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Display Mode</Text>
        <View style={styles.twiddles}>
          <Button
            onPress={displaySettingHandler}
            mode={lightMode !== 0 && 'flat'}
            style={styles.settingsButton}
          >Dark</Button>
          <Button
            onPress={displaySettingHandler}
            mode={lightMode !== 1 && 'flat'}
            style={styles.settingsButton}
          >Light</Button>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Default Order</Text>
        <View style={styles.twiddles}>
          <Button
            onPress={orderSettingHandler}
            mode={orderBy !== 'date' && 'flat'}
            style={styles.settingsButton}
          >Newest</Button>
          <Button
            onPress={orderSettingHandler}
            mode={orderBy !== 'oldest' && 'flat'}
            style={styles.settingsButton}
          >Oldest</Button>
          <Button
            onPress={orderSettingHandler}
            mode={orderBy !== 'priceDesc' && 'flat'}
            style={styles.settingsButton}
          >Price Desc</Button>
          <Button
            onPress={orderSettingHandler}
            mode={orderBy !== 'priceAsc' && 'flat'}
            style={styles.settingsButton}
          >Price Asc</Button>
        </View>
      </View>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.background500,
  },
  item: {
    alignItems: 'center',
    marginTop: 20,
    borderBottomColor: GlobalStyles.colors.primary200,
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 16,
    color: GlobalStyles.colors.primary100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 6,
    marginBottom: 4,
    borderBottomColor: GlobalStyles.colors.primary200,
    borderBottomWidth: 2,
  },
  twiddles: {
    flexDirection: 'row',
    margin: 12,
  },
  settingsButton: {
    justifyContent: 'space-between',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
    borderRadius: 4,
  },
})