import React, { BaseSyntheticEvent, useState } from "react";
import "./ExpenseForm.css";

/**
 *
 * @param props
 * TODO: Fix the <any> typing
 */

const ExpenseForm: React.FC<any> = (props) => {
  /**
   * * Individual states
   */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /**
   * * Combined States
   */

  //   const [, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event: BaseSyntheticEvent) => {
    setEnteredTitle(event.target.value);

    /**
     * * The following two examples provide identical results, just different circumstances for use
     * ! Use the following approach when not utilizing previous states
     */
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    /**
     * ! Must use the following approach for relying on previous states
     */
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event: BaseSyntheticEvent) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //       ...prevState,
    //       enteredAmount: event.target.value,
    //     };
    //   });
  };

  const dateChangeHandler = (event: BaseSyntheticEvent) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //       ...prevState,
    //       enteredDate: event.target.value,
    //     };
    //   });
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
