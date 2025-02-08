import { useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";
import About from "./About";
import Share from "./Share";
import Supporters from "./Supporters";
import developerImage from "../assets/developer.webp";

const Home = () => {
  const api_url = import.meta.env.VITE_APP_API_URL;
  const [booksData, setBooksData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await axios(`${api_url}/book-list`);
        setBooksData(response.data.books);
        setFilterData(response.data.books);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, [api_url]);

  return (
    <>
      <div className="flex flex-row justify-between items-center gap-2 fixed top-0 left-0 z-50 w-full bg-gradient-to-tr from-green-800 to-[#FF005C] pb-2 mx-auto">
        <a
          href="https://ismaildevcode.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[2px] block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-zinc-300 flex flex-row items-center mt-1"
        >
          <img
            src={developerImage}
            loading="lazy"
            alt="Developer image"
            className="w-full h-full rounded-full object-cover"
          />
        </a>
        <div className="flex flex-col w-10/12">
          <h1 className="text-sm sm:text-md font-semibold text-[#fff] text-center mt-1 mb-1">
            Download All PDF Books For Free
          </h1>
          <p className="text-center text-lg text-[#fff] font-medium mt-1">
            Click on grades to view books
          </p>
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