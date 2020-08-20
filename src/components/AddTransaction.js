import React ,{useState,useContext}from 'react';

import {GlobalContext} from './context/GlobalState'

export const AddTansaction=()=>{
    const [description,setDescription] = useState('')
    const [transactionAmount,setTransactionAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)


const onSubmit = (e) =>{
    e.preventDefault();

    const newTransaction = {
        id: new Date().getTime(),
        description,
        transactionAmount:+transactionAmount
    }
    addTransaction(newTransaction)
}

    return(
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" placeholder="Detail of Transaction" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <div className="form-control"><label htmlFor="transactionamount">
                    Transaction Amount
                    </label>
                    <input type="number" placeholder="Dollar Value of Transaction" onChange={(e)=>setTransactionAmount(e.target.value)} value={transactionAmount}/>
                    </div>
                    <button className="btn" onClick={onSubmit}>Add Transaction</button>
            </form>
        </div>
    )
}