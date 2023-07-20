import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Joggers',
    amount: 24.34,
    date: new Date('2022-12-19'),
  },
  {
    id: 'e2',
    description: 'Headband',
    amount: 12.34,
    date: new Date('2022-12-19'),
  },
  {
    id: 'e3',
    description: 'Wii',
    amount: 240.34,
    date: new Date('2016-12-31'),
  },
  {
    id: 'e4',
    description: 'Candy',
    amount: 1.34,
    date: new Date('2023-7-19'),
  },
  {
    id: 'e5',
    description: 'Book',
    amount: 18.34,
    date: new Date('2023-7-19'),
  },
];

function ExpensesOutput({ expenses, period }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} period={period} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.background500,
  },
})