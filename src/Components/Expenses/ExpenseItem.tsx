import { useState } from "react";
import "./ExpenseItem.css";
import { ExpenseItemModel } from "../../Models/ExpenseItemModel";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem: React.FC<ExpenseItemModel> = (props) => {
  const [expenseTitle, setExpenseTitle] = useState(props.title);

  const expenseDate = props.date;
  const expenseAmount = props.amount;

  const clickHandler = () => {
    setExpenseTitle('Updated Value Check');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
