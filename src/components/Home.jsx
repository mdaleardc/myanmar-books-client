import {useState, useEffect} from "react";
import axios from "axios";
import Books from "./Books";
import About from "./About";
import Share from "./Share";
import Supporters from "./Supporters";
import developerImage from "../assets/developer.png"

const Home = () => {
  const api_url = import.meta.env.VITE_APP_API_URL;
  const [booksData, setBooksData] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(()=>{
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
      const response = await axios(`${api_url}/book-list`);
      setBooksData(response.data.books);
      setFilterData(response.data.books);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false)
      }
    }
    fetchBooks();
  },[]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) {
      setFilterData(booksData);
      return;
    }
    const filteredBooks = booksData.filter((book) => {
      const query = searchQuery.trim().toLowerCase().replace(/\s/g, "_");
      return book.grade?.toLowerCase().replace(/\s/g, "_").includes(query) ||
      book.subject?.toLowerCase().replace(/\s/g, "_").includes(query) ||
      book.title?.toLowerCase().replace(/\s/g, "_").includes(query) ||
      book.pdfType?.toLowerCase().replace(/\s/g, "_").includes(query);
    });
    setFilterData(filteredBooks);
    setSearchQuery("");
  }
  
  
  return (
    <>
    <div className='flex flex-row justify-between items-center gap-2 fixed top-0 left-0 z-50 w-full bg-gradient-to-tr  from-green-800 to-[#FF005C] pb-3 mx-auto'>
    <a
      href="https://ismaildevcode.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className='ml-[2px] block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-zinc-300 flex flex-row items-center'><img
      src={developerImage}
      loading='lazy'
      alt='Developer image' className='w-full h-full rounded-full object-cover'/></a>
  <div className='flex flex-col w-10/12'>
    <h1 className='text-sm sm:text-md font-semibold text-[#fff] text-center mt-3 mb-2'>Download All PDF Books For Free</h1>
    <form className='mx-auto text-center flex flex-row items-center justify-center gap-2' onSubmit={handleSearch}>
    <input type="text" placeholder="Search books" className="rounded-md w-3/6 sm:w-2/5 outline-none border focus:ring-[0.05rem] ring-[#02ff02] py-px px-1 text-xl" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
    <button type="submit" className="inline-block rounded-md bg-[#007bff] text-white py-1 px-2 transition-colors duration-300 hover:bg-[#0056b3]">Search</button>
    </form>
    </div>
    </div>
    <div className="mt-[5.6rem]">
    <Books filterData={filterData} isLoading={isLoading}/>
    <About />
    <Supporters />
    <Share />
    </div>
    </>
    )
}


export default Home;