import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { ExpenseItemModel } from "../../Models/ExpenseItemModel";
import { useState } from "react";

/**
 *
 * @param props
 * TODO: Fix the <any> typing
 */

const NewExpense: React.FC<any> = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemModel) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
