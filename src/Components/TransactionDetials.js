import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  
  const handleDelete = () => {
    axios
    .delete(`${API}/transactions/${index}`)
    .then(() => {
      navigate(`/transactions`);
    })
    .catch((e) => console.error(e));
  };

  useEffect(() => {
    axios
    .get(`${API}/transactions/${index}`)
    .then((response) => {
      setTransaction(response.data);
    })
    .catch(() => {navigate('/not-found')});
  }, [index, navigate]);
  
  return (
    <article className="Show">
      <h2>{transaction.item_name} - ${transaction.amount}</h2>
      <br></br>
      <h3>Date: {transaction.date}</h3>
      <h3>Paid From: {transaction.from}</h3>
      <h3>Category: {transaction.category}</h3>
      <div className="showNavigation">
        <div className="transaction">
          <Link to={`/transactions`}>
            <button className="backButton">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button className="editButton">Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete} className="deleteButton">Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;