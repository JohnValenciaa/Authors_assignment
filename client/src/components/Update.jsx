import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

const Update = (props) => {
    // const navigate = useNavigate();

    const { id } = useParams();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/update/' + id, {
            name,
        })
            .then(res => console.log(res))
            .catch(err=>{
                console.log(err)
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
        <div>
            <h1>Update Author:</h1>
            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Title</label><br />
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
                <button >
                    <Link to ='/authors'>Cancel</Link>
                </button>
            </form>
        </div>
    )
}

export default Update;