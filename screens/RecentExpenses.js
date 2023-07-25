import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";


function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const dateDaysAgo = getDateMinusDays(today, 7)

    return (expense.date >= dateDaysAgo) && (expense.date <= today);
  })
  return <ExpensesOutput expenses={recentExpenses} period='Last 7 Days' fallbackText='No expenses registered in last 7 days.'/>
}

export default RecentExpenses;