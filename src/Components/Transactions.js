import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Transaction from "./Transaction"
import "../css/transactions.css"


const API = process.env.REACT_APP_API_URL

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
      axios
      .get(`${API}/transactions`)
      .then((res) => 
        setTransactions(res.data)
      )
      .catch((err) => console.log(err))
    }, []);
    
    const sum = transactions.map((transaction) => Number(transaction.amount))
    const balance = sum.reduce((a, b) => Number(a + b), 0)


    let color = "white"
      if (balance >= 1000) {
        color = "green";
      } else if (balance < 0) {
        color = "red";
      }
      
      return (
        <div className="transactions">
          <p className="balance">Account Total: <span className={color}>${balance}</span></p>
     <ul> {transactions.map((transaction, index) => {
							return (
								<Transaction
									key={index}
									transaction={transaction}
									index={index} />
							);
						})}</ul>
     
      <Link to={"/"}>
        <button className="back">Back</button>
      </Link>
    </div>
    )
}

export default Transactions;
