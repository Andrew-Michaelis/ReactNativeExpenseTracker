import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
    description: defaultValues ? defaultValues.description : '',
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if(!amountIsValid || !dateIsValid || !descriptionIsValid){
      Alert.alert('Invalid input', 'Please check your input values');
      return;
    }
    onSubmit(expenseData);
  }

  return(
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input style={styles.rowInput} label="Amount" textInputConfig={{
          keyboardType: 'decimal-pad',
          selectionColor: GlobalStyles.colors.accent500,
          onChangeText: inputChangedHandler.bind(this, 'amount'),
          value: inputValues.amount,
        }} />
        <Input style={styles.rowInput} label="Date" textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          selectionColor: GlobalStyles.colors.accent500,
          onChangeText: inputChangedHandler.bind(this, 'date'),
          value: inputValues.date,
        }} />
      </View>
      <Input label="Description" textInputConfig={{
        multiline: true,
        selectionColor: GlobalStyles.colors.accent500,
        // autoCorrect: false, // turn off autocorrect
        // autoCapitalize: 'none', // turn off autocapitalize
        onChangeText: inputChangedHandler.bind(this, 'description'),
        value: inputValues.description,
      }} />
      <View style={styles.buttons}>
        <Button mode='flat' onPress={onCancel} style={styles.button}>Cancel</Button>
        <Button onPress={submitHandler} style={styles.button}>{submitButtonLabel}</Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = new StyleSheet.create({
  form: {
    marginTop: 20,
  },
  title: {
    marginVertical: 24,
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary50,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    minWidth: 120,
    padding: 6,
  },
});