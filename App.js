import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';
// import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview () {
  return (
    <BottomTabs.Navigator 
      screenOptions={({ navigation }) =>({
        headerStyle: { backgroundColor: GlobalStyles.colors.background700 },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.background700 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton 
            icon='plus' 
            size={24} 
            color={tintColor} 
            onPress={()=>{
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen 
        name='RecentExpenses' 
        component={RecentExpenses} 
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => <SimpleLineIcons name='wallet' size={size} color={color} />
        }}
      />
      <BottomTabs.Screen 
        name='AllExpenses' 
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => <SimpleLineIcons name='calendar' size={size} color={color} />
        }}
      />
    </BottomTabs.Navigator>
  )
}

// ----------- Bottom Tab for a Settings Screen. Intended to be a Context editing window for global app settings
// <BottomTabs.Screen
//   name='Settings'
//   component={Settings}
//   options={{
//     title: 'Settings',
//     tabBarLabel: 'Settings',
//     tabBarIcon: ({color, size}) => <SimpleLineIcons name='settings' size={size} color={color} />
//   }}
// /> 

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='ExpensesOverview'
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.background700},
              headerTintColor: '#fff',
            }}
          >
            <Stack.Screen 
              name='ExpensesOverview' 
              component={ExpensesOverview} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name='ManageExpense' 
              component={ManageExpense} 
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}