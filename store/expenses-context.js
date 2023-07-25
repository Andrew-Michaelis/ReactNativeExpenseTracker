import { createContext, useReducer } from "react";

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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: ({id}) => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state;
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData} });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider