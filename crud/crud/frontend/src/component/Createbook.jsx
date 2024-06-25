import React, { useState } from "react";
import "./createbook.css";
import axios from "axios"; 

const Createbook = () => {
  const [message,setMessage]=useState('');
  const [bookData, setBookData] = useState({
    book_name: "",
    book_auther: "",
    book_price: "",
  });

  const handleInputChange = (e) => { 
    
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:5003/api/addbook",
        bookData
      );
      console.log(response);
      setBookData({
        book_name: "",
        book_auther: "",
        book_price: "",
      });
       setMessage("Your Data Is Submitted")
    } 
    
    catch (error) {
      console.error(error);
    }
    e.preventDefault();

  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add Book</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label className="label">
            Book Name:
            <input
              type="text"
              value={bookData.book_name}
              onChange={handleInputChange} // Correct function name
              required
              className="input"
              name="book_name"
            />
          </label>
        </div>
        <div className="formGroup">
          <label className="label">
            Author Name:
            <input
              type="text"
              value={bookData.book_auther}
              onChange={handleInputChange} // Correct function name
              required
              className="input"
              name="book_auther"
            />
          </label>
        </div>
        <div className="formGroup">
          <label className="label">
            Book Price:
            <input
              type="number"
              value={bookData.book_price}
              onChange={handleInputChange} // Correct function name
              required
              className="input"
              name="book_price"
            />
          </label>
        </div>
        <button
          type="submit"
          value={"Add Book"}
          className="button"
          name="AddBook"
        >
          Submit
        </button>
      </form>
      <p>{message}</p>
    </>
  );
};

export default Createbook;
