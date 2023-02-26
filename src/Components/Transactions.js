import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then((res) => {
                setTransactions(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const transactionList = transactions.map((transaction, index) => {
        return (
          <li key={index}>
            <span className="transactionDetails">
              {transaction.date}
              <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>$
              {transaction.amount}
            </span>
          </li>
        );
      });
    
      let array = [];
      
      const bankTotal = array.reduce((a, b) => a + b, 0);
    
      const colorCode = (total) => {
        if (total >= 1000) {
          return "green";
        } else if (total < 0) {
          return "red";
        } else {
          return "white";
        }
      };

    return (
        <div className="transactions">
      <p className="bankTotal">
        Bank Account Total:{" "}
        <span style={{ color: colorCode(bankTotal) }}>
          ${bankTotal.toFixed(2)}
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