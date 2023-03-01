import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import transactions from "../css/transactions.css"


const API = process.env.REACT_APP_API_URL

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    const transactionList = transactions.map((transaction, index) => {
      return (
        <li key={index}>
            <span className="transactionDetails">
              {transaction.date}
              <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>${transaction.amount}
            </span>
          </li>
        );
      });
      
      let array = [];
      
      const balance = array.reduce((a, b) => a + b, 0);
      
      const colorCode = (total) => {
        if (total >= 1000) {
          return "green";
        } else if (total < 0) {
          return "red";
        } else {
          return "white";
        }
      };

      useEffect(() => {
          axios
              .get(`${API}/transactions`)
              .then((res) => {
                  setTransactions(res.data)
              })
              .catch((err) => console.log(err))
      }, []);
      
      return (
        <div className="transactions">
      <p className="balance">
        Account Total:{" "}
        <span style={{ color: colorCode(balance) }}>
          ${balance.toFixed(2)}
        </span>
      </p>
      <ul className="list">{transactionList}</ul>
      <Link to={"/"}>
        <button className="back">Back</button>
      </Link>
    </div>
    )
}

export default Transactions;