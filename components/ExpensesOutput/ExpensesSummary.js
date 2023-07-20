import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({ expenses, period }) {
  const expensesSum = expenses.reduce((sum, expense)=> {
    return sum + expense.amount
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary400,
    backgroundColor: GlobalStyles.colors.primary100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary700,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary700,
  }
});