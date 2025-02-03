import {Link} from "react-router"
import clsx from "clsx";
import { MdDownloadForOffline } from "react-icons/md";
import underDeve from "../assets/file-Mi8QSP7upB7QbQ5MFo4jzi.webp"


const Books = ({filterData, isLoading}) => {
    const shuffledData = filterData && [...filterData].sort(()=>Math.random() - 0.5);
  return (
    <>
    <div className='p-2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {
    isLoading ? (Array(6).fill("").map((_, index) => (
      <div key={index} className="animate-pulse bg-gray-300 rounded-md p-4 h-[280px] flex flex-col justify-center items-center">
      <div className="w-full h-3/5 bg-gray-400 rounded-md"></div>
                <p className="h-4 bg-gray-400 rounded w-3/4 mt-2"></p>
                <p className="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
      </div>
      ))) : (filterData && (shuffledData.map((book, i) => (
      <div
  className="rounded-md shadow-md text-center pb-2 bg-zinc-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
  key={i}>
  {
  book.thumbnailUrl.trim() ? (<img
    src={book.thumbnailUrl}
    alt="book's thumbnail"
    className="rounded-lg  mx-auto w-11/12 h-[200px] mt-1 object-cover"
    loading="lazy"
  />) : ( <div>
  <img
    src={underDeve}
    alt="book's thumbnail"
    className="rounded-lg  mx-auto w-11/12 h-[200px] mt-1 object-cover"
    loading="lazy"
  />
  <p className='text-[red] font-semibold'>Under Development!</p>
  </div>)
  }
  {/*<h3 className="text-md font-semibold text-gray-700">{book.subject.replace(/[_-]/g, " ")}</h3>*/}
  <h2 className="text-base font-medium text-gray-800 px-2">{book.title.replace(/[_-]/g, " ").replace("Answers", "အဖြေစုံ")}</h2>
  {
  book.clicks > 0 && (<p className='flex flex-row items-center justify-center text-gray-700'><MdDownloadForOffline size='25'/> {book.clicks}</p>)
  }
  <a
    href={`${import.meta.env.VITE_APP_API_URL}/download/${book._id}`}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(`inline-block mt-3 rounded-md text-white py-1 px-4 transition-colors duration-300`,
    {
      "bg-[#007bff] hover:bg-[#0056b3]" : book.thumbnailUrl.trim(),
      "bg-zinc-500 pointer-events-none" : !book.thumbnailUrl.trim()
    }
    )}>
    Download PDF
  </a>
</div>
      ))
      ))
    }
    </div>
    <Link to='/contact' className='mx-10 mb-10 bg-blue-500 text-white underline cursor-pointer hover:bg-blue-700 active:bg-violet-700 rounded-md w-fit py-1 px-2'>Contact Us</Link>
    </>
    )
}


export default Books;