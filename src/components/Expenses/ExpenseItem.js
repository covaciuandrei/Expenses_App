import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  //array destructuring, title e current state ce e stored in props.title
  //si settitle e fct folosita sa o modificam

  // const clickHandler = () => {
  //   setTitle('Updated!');

  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          {/* title in loc de props.title daca vrem sa pastram butonul */}
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
