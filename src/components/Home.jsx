import { useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";
import About from "./About";
import Share from "./Share";
import Supporters from "./Supporters";
import weblogo from "../assets/logo.webp";

const Home = () => {
  const api_url = import.meta.env.VITE_APP_API_URL;
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await axios(`${api_url}/book-list`);
        setFilterData(response.data.books);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, [api_url]);
  
  useEffect(()=> {
    const totalClicks = filterData.reduce((acc, book) => acc + (book.clicks || 0), 0);
    setClickCount(totalClicks);
  }, [filterData]);
 
 console.log(clickCount);
   
 
  return (
    <>
      <div className="flex flex-row justify-between items-center gap-2 fixed top-0 left-0 z-50 w-full bg-gradient-to-tr from-green-800 to-[#FF005C] pb-2 mx-auto">
       <a
  href="https://ismaildevcode.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-[2px] block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-transparent hover:border-zinc-400 transition-all duration-300 ease-in-out flex flex-row items-center mt-1 shadow-sm hover:shadow-md"
>
  <img
    src={weblogo}
    loading="lazy"
    alt="Developer image"
    className="w-full h-full rounded-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
  />
</a>
        <div className="flex flex-col w-10/12">
          <h1 className="text-sm sm:text-md font-semibold text-[#fff] text-center mt-1 mb-1">
            Download All PDF Books For Free
          </h1>
<p className='text-white text-sx font-light tracking-tighter whitespace-nowrap text-center'>Total Books Downloaded: {clickCount}</p>
        </div>
      </div>

      <div className="mt-[5rem]">
        <Books filterData={filterData} isLoading={isLoading} />
        <About />
        <Supporters />
        <Share />
      </div>
    </>
  );
};

export default Home;