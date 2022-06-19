import "./App.css";
import "./Components/Expenses/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
// import { ExpenseItemModel } from "./Models/ExpenseItemModel";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App: React.FC = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  /**
   *
   * @param expense
   * TODO: Fix typing
   */

  const addExpenseHandler = (expense: any) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses}></Expenses>
    </div>
  );
};

export default App;
