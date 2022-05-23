import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default () => {
    const [name, setTitle] = useState("");
    const [errors, setErrors] = useState([]);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/add', {
            name,
        })
            .then(res=>console.log(res))
            // .catch(err=>console.log(err))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Add a new Author!</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name:</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={name}/>
                </p>
                <input type="submit" value={"Create"}/>
                <button >
                        <Link to ='/authors'>Cancel</Link>
                </button>
        </form>
    )
}

