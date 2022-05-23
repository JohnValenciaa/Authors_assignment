// import './App.css';
import './App.css';
import React from 'react';
import {Link,Routes,Route, Navigate} from "react-router-dom";
import Main from './components/Main';
import ViewOne from './components/ViewOne';
import Update from './components/Update';
import Add from './components/Add';
    
function App() {
  return (
      <div className='Author_tab'>
        <h1>Favorite Authors</h1>
          <Link to="/authors">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/authors/add">Add an Author!</Link>
      <hr />
        <Routes>
          <Route path="/authors" element={<Main/>}/>
          <Route path="/author/:id" element={<ViewOne/>}/>
          <Route path="/authors/add" element={<Add/>}/>
          <Route path="/authors/update/:id" element={<Update/>}/>
        </Routes>
      </div>
  );
}
    
export default App;