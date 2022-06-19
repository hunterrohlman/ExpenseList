import { BaseSyntheticEvent } from "react";
import "./ExpensesFilter.css";

/**
 *
 * @param props
 * TODO: Fix "any" typing
 */

const ExpensesFilter: React.FC<any> = (props) => {
  const yearChangeHandler = (event: BaseSyntheticEvent) => {
    props.onNewFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
