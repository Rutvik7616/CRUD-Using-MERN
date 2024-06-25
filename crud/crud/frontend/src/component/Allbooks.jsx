import React, { useEffect, useState } from "react";
import axios from "axios";
import './allbook.css'
const Allbooks = () => {
  const [booksData, setBooksData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getbook()
  }, []);

const getbook=async()=>{
  axios.get("http://localhost:5003/api/viewbook")
  .then((response) => {
    setBooksData(response.data);
  })

  
  .catch((error) => {
    console.error("There was an error fetching the books data:", error);
    setError(error);
  });
}

const deletebook=async(id)=>{
  axios.delete(`http://localhost:5003/api/deletebook/${id}`)
 getbook()
}

  if (error) {
    return <div>Error fetching books data: {error.message}</div>;
  }
  return (
    <div>
      <h2 className="title">Books List</h2>
      <table className="books-table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Name</th>
            <th>Price</th>
            <th>Publish Date</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {booksData.map((book) => (
            <tr key={book._id}>
              <td>{book.book_auther}</td>
              <td>{book.book_name}</td>
              <td>{book.book_price}</td>
              <td>{book.book_publish_date}</td>
              <td><a href={`updatebook/${book._id}`}>Edit</a></td>
               <td><a href="#" onClick={()=>deletebook(book._id)}>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allbooks;
