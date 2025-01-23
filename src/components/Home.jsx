import {useState, useEffect} from "react";
import axios from "axios";
import Books from "./Books";

const Home = () => {
  const api_url = import.meta.env.VITE_APP_API_URL;
  const [booksData, setBooksData] = useState(null);
  useEffect(()=>{
    const AllBooks = async () => {
      try {
      const response = await axios(`${api_url}/book-list`);
      setBooksData(response.data.books);
      } catch (err) {
        console.error(err.message);
      }
    }
    AllBooks();
  },[]);
  
  return (
    <>
    <Books booksData={booksData}/>
    </>
    )
}


export default Home;