import { useState } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import propTypes from "prop-types";
import { MdDownloadForOffline } from "react-icons/md";
import underDeve from "../assets/file-Mi8QSP7upB7QbQ5MFo4jzi.webp";
import { IoBookSharp } from "react-icons/io5";
import { MdDownload } from "react-icons/md";

dayjs.extend(relativeTime);

const Books = ({ filterData, isLoading }) => {
  const [selectedGrade, setSelectedGrade] = useState(null);

  // Group books by grade
  const groupedBooks = filterData?.reduce((acc, book) => {
    if (!acc[book.grade]) acc[book.grade] = [];
    acc[book.grade].push(book);
    return acc;
  }, {});

  // Extract and sort grades (placing "General" at the end)
  const sortedGrades = groupedBooks
    ? Object.keys(groupedBooks).sort((a, b) => {
        const isGeneralA = a.toLowerCase() === "general";
        const isGeneralB = b.toLowerCase() === "general";

        if (isGeneralA) return 1; // "General" goes last
        if (isGeneralB) return -1;

        const numA = parseInt(a.replace(/\D/g, ""), 10) || Infinity; // Extract number
        const numB = parseInt(b.replace(/\D/g, ""), 10) || Infinity;

        return numA - numB;
      })
    : [];

  return (
    <div className="pb-6">
      {isLoading ? (
        <div className="h-[300px] md:h-[200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
          {Array(12)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-300 rounded-md p-4 h-[35px] flex flex-col justify-center items-center"
              ></div>
            ))}
        </div>
      ) : (
        <div>
          {/* Display Grade Names First */}
          <div className="h-[300px] md:h-[200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
            {sortedGrades.map((grade) => {
  const bookCount = groupedBooks[grade].length;
  const totalClicks = groupedBooks[grade].reduce((sum, book) => sum + book.clicks, 0);

  return (
    <button
      key={grade}
      onClick={() => setSelectedGrade(grade)}
      className={`text-lg font-semibold bg-green-600 text-white rounded-md hover:text-red-500 hover:scale-105 hover:bg-green-800 transition flex items-center justify-between px-2 ${
        selectedGrade === grade ? "bg-green-800" : ""
      }`}
    >
      {grade.replace(/_/g, " ")} <span className={`flex items-center gap-1 ${selectedGrade === grade ? "text-white":"text-zinc-700"} `}><IoBookSharp size='15'/> {bookCount}</span> <span className='flex items-center gap-1'> <MdDownloadForOffline size='15'/> {totalClicks}</span>
    </button>
  );
})}
          </div>

          {/* Show Books Only When a Grade is Selected */}
          {selectedGrade && (
            <div className="mt-6">
              <h2 className="mx-auto text-center text-2xl text-pink-600 underline font-bold text-gray-900 mb-4">
                {selectedGrade.replace(/_/g, " ")}
              </h2>
              <div className="p-2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groupedBooks[selectedGrade].map((book, i) => (
                  <div
                    className="rounded-md shadow-md text-center bg-zinc-200 transform transition-transform duration-300 p-2 hover:scale-105 hover:shadow-lg"
                    key={i}
                  >
                    {book.thumbnailUrl.trim() ? (
                      <img
                        src={book.thumbnailUrl}
                        alt="book's thumbnail"
                        className="rounded-lg mx-auto w-full h-[200px] object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div>
                        <img
                          src={underDeve}
                          alt="book's thumbnail"
                          className="rounded-lg mx-auto w-11/12 h-[200px] mt-1 object-cover"
                          loading="lazy"
                        />
                        <p className="text-[red] font-semibold">Under Development!</p>
                      </div>
                    )}
                    <h2 className="text-base font-medium text-gray-900 px-2 pt-2">
                      {book.title.replace(/[_-]/g, " ").replace("Answers", "အဖြေစုံ")}
                    </h2>
                    <p className="flex flex-row items-center justify-center text-red-500">
                      <MdDownloadForOffline size="25" /> {book.clicks}
                      <span className="px-2 text-gray-600 text-xs">
                        {dayjs(book.createdAt).fromNow()}
                      </span>
                    </p>
                    <a
                      role="button"
                      href={`${import.meta.env.VITE_APP_API_URL}/download/${book._id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        `inline-block mt-3 rounded-md text-white py-1 px-4 transition-colors duration-300`,
                        {
                          "bg-[#0066cc] hover:bg-[#004080]": book.thumbnailUrl.trim(),
                          "bg-zinc-600 pointer-events-none": !book.thumbnailUrl.trim(),
                        }
                      )}
                    >
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Props validation
Books.propTypes = {
  filterData: propTypes.array.isRequired,
  isLoading: propTypes.bool.isRequired,
};

export default Books;