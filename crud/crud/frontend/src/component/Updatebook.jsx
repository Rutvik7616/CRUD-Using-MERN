import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Updatebook = () => {
  const navigate = useNavigate();
  //   const [message,setMessage]=useState('');
  const { bid } = useParams();

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

  useEffect(() => {
    axios
      .get(`http://localhost:5003/api/viewbook/${bid}`)
      .then((response) => {
        setBookData({
       
            ...bookData,
          book_name: response.data.book_name,
          book_auther: response.data.book_auther,
          book_price: response.data.book_price,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5003/api/updatebook/${bid}`,bookData);
      console.log(response);
      setBookData({
        book_name: "",
        book_auther: "",
        book_price: "",
      });
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Book</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label">
            Book Name:
            <input
              type="text"
              value={bookData.book_name}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
              className="input"
              name="book_price"
            />
          </label>
        </div>
        <button
          type="submit"
          value={"update book"}
          className="button"
          name="Updatebook"
        >
          Submit
        </button>
      </form>
      {/* <p>{message}</p> */}
      {/* {bid} */}
    </div>
  );
};

export default Updatebook;
