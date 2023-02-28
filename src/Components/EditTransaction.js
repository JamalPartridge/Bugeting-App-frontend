import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function EditTransaction(){
    let { index } = useParams();
    const navigate = useNavigate();
    const [editTrans, setEditTrans] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    });
    
    const handleTextChange = (event) => {
        setEditTrans({ ...editTrans, [event.target.id]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
      .put(`${API}/transactions/${index}`, editTrans)
      .then((res) => {
        setEditTrans(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.log(err));
      };
    
      useEffect(() => {
        axios
          .get(`${API}/transactions/${index}`)
          .then((res) => setEditTrans(res.data))
          .catch((err) => console.log(err));
      }, [index, navigate]);
    
      
      return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={editTrans.date}
              placeholder="date"
              onChange={handleTextChange}
              required
            />
            <label htmlFor="item_name">Name</label>
            <input
              id="item_name"
              type="text"
              value={editTrans.item_name}
              placeholder="name"
              onChange={handleTextChange}
              required
            />
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              value={editTrans.amount}
              placeholder="amount"
              onChange={handleTextChange}
            />
            <label htmlFor="from">From</label>
            <input
              id="from"
              type="text"
              required
              value={editTrans.from}
              placeholder="from"
              onChange={handleTextChange}
            />
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              name="category"
              value={editTrans.category}
              placeholder="category"
              onChange={handleTextChange}
            />
            <br />
            <input type="submit" />
          </form>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
      );
    }
    
    export default EditTransaction;