import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: { 
      value: defaultValues ? defaultValues.amount.toString() : '', 
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '', 
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '', 
      isValid: true,
    }
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if(!amountIsValid || !dateIsValid || !descriptionIsValid){
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: { value: currentInputs.description.value, isValid: descriptionIsValid },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }

  const formIsInvalid = 
    !inputs.amount.isValid || 
    !inputs.date.isValid || 
    !inputs.description.isValid;

  return(
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input 
          style={styles.rowInput} 
          label="Amount" 
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            selectionColor: GlobalStyles.colors.accent500,
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }} 
        />
        <Input 
          style={styles.rowInput} 
          label="Date" 
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            selectionColor: GlobalStyles.colors.accent500,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }} 
        />
      </View>
      <Input 
        label="Description" 
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          selectionColor: GlobalStyles.colors.accent500,
          // autoCorrect: false, // turn off autocorrect
          // autoCapitalize: 'none', // turn off autocapitalize
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }} 
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
      )}
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
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error50,
    marginVertical: 8,
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