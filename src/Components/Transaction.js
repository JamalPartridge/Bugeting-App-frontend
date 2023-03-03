import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/transaction.css";

const API = process.env.REACT_APP_API_URL;

function Transaction({index, transaction}) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
    .delete(`${API}/transactions/${index}`)
    .then((res) => navigate("/transactions"))
    .catch((err) => console.log(err));
  };

  return (
    <div className="transaction">
      <p className="itemName">{transaction.item_name}</p>
      <p className="amount">${transaction.amount}</p>
      <p className="date">{transaction.date}</p>
      <p className="from">{transaction.from}</p>
      <p className="category">{transaction.category}</p>
      <span> &nbsp; &nbsp; &nbsp;</span>
      <Link to={`/transactions/${index}/edit`}>
        <button className="editButton">Edit</button>
      </Link>
      <span> &nbsp; &nbsp; &nbsp;</span>
      <button onClick={handleDelete} className="deleteButton">
        Delete
      </button>
    </div>
  );
}

export default Transaction;