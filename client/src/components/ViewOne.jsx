import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ViewOne = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
        console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div key={author}>
            <p>Name: {author.title}</p>
        </div>
    )
}
    
export default ViewOne;