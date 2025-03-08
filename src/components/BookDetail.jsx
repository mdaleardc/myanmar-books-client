import { useParams, useNavigate } from "react-router"; // Added useNavigate for navigation
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MdDownloadForOffline } from "react-icons/md";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams(); // Extract book ID from URL using useParams()
  const navigate = useNavigate(); // Initialize useNavigate
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_APP_API_URL}/book-detail/${id}`);
        const data = await response.data.book;
        console.log("book-detail: ", data.thumbnailUrl);
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      }
    };
    fetchBookDetails();
  }, [id]); // Add id as a dependency to refetch when the id changes

  if (!book) {
    return <div className="h-screen flex items-center justify-center text-lg font-semibold text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-4 mt-3 mb-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={book.thumbnailUrl}
          alt="Book Thumbnail"
          className="rounded-lg shadow-md w-[300px] h-[470px] object-cover"
        />
        <h2 className="mt-4 text-3xl font-bold text-gray-800">{book.subject.replace("Myanmar", "Myanmasar").replace(/_/g, " ")}</h2>
        <p className="text-lg text-gray-600">{book.grade.replace(/_/, ": ")}</p>
        <p className="text-gray-600">{book.pdfType.replace("Answers", "Answer Guide").replace(/_/g, " ")}</p>
        {book.curriculum && <p className="text-gray-600">{book.curriculum} curriculum</p>}
        <p className="text-gray-600">{book.categories.replace(/_/g, " ")}</p>

        <p className="flex items-center gap-2 text-green-500 mt-3">
          <MdDownloadForOffline size={20} />
          <span className="text-lg font-medium">{book.clicks} Downloads</span>
          <span className="px-2 text-gray-500 text-sm">{dayjs(book.createdAt).fromNow()}</span>
        </p>

        <div className="flex gap-4 mt-5">
          {/* Home Button */}
          <button
            onClick={() => navigate("/")} // Navigate to home page without reload
            className="px-5 py-2 rounded-full text-gray-700 border border-gray-400 hover:bg-gray-200 transition duration-300"
          >
            Go to Home
          </button>

          {/* Download Button */}
          <a
            role="button"
            href={`${import.meta.env.VITE_APP_API_URL}/download/${book._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-white text-lg font-medium bg-[#0066cc] hover:bg-[#004080] transition duration-300"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;