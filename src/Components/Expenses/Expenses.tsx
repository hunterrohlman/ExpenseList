import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses: React.FC<any> = (props) => {
  /**
   * TODO: Fix typing issues
   * @param: prop with id, title, amount, date
   */

  const applyNewFilterHanlder = (yearFilter: number) => {
    console.log("In applyNewFilterHandler with value " + yearFilter);
  };

  return (
    <div>
      <ExpensesFilter onNewFilter = {applyNewFilterHanlder}/>
      <Card className="expenses">
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
