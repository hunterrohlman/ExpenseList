import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import { ExpenseItemIdModel } from "../../Models/ExpenseItemModel";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

/**
 * TODO: Fix typing issues
 * @param: prop with id, title, amount, date
 */

const Expenses: React.FC<any> = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");
  const applyNewFilterHanlder = (yearFilter: string) => {
    setSelectedYear(yearFilter);
    console.log("In applyNewFilterHandler with value " + yearFilter);
  };

  const filteredExpenses = props.data.filter((expense: ExpenseItemIdModel) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onNewFilter={applyNewFilterHanlder}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList data={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
