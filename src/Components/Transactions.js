import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then((res) => {
                setTransactions(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div></div>
    )
}

export default Transactions;