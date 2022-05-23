import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import tabStyle from "./Main.module.css";
    
const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            console.log(res.data)
            // console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const deleteThisAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`,)
            .then(console.log(`Deleted the author with an id of ${id}`))
            .catch( err => console.log("Sadly it didn't get deleted" + err) )
    }
return (
    <>
        <p>We have quotes by:</p>
    <table className={tabStyle.author_tab}>
        <thead>
            <tr>
                <th>Authors</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
        {loaded&&authors.map( (author, i) =>{
        return (
            <tr key={i}>
                <td>{author.name}</td>
                <td>
                    <button onClick={() => deleteThisAuthor(author._id)}>Delete</button>
                    <button><Link to={`/authors/update/${author._id}`}>Edit</Link></button>
                </td>
            </tr>
            )
        })}
        </tbody>
</table>
</>
)
}
    
export default Main;
