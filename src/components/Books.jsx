


const Books = ({filterData, isLoading}) => {
  return (
    <>
    <div className='p-6 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
    {
    isLoading ? (Array(6).fill("").map((_, index) => (
      <div key={index} className="animate-pulse bg-gray-300 rounded-md p-4 h-[280px] flex flex-col justify-center items-center">
      <div className="w-full h-3/5 bg-gray-400 rounded-md"></div>
                <p className="h-4 bg-gray-400 rounded w-3/4 mt-2"></p>
                <p className="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
      </div>
      ))) : (filterData && (filterData.map((book, i) => (
      <div
  className="rounded-xl shadow-md text-center pb-2 bg-zinc-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
  key={i}>
  <img
    src={book.thumbnailUrl}
    alt="book's thumbnail"
    className="rounded-md  mx-auto h-[200px] mt-2 object-cover"
  />
  <h3 className="text-lg font-semibold text-gray-700">{book.subject.replace(/[_-]/g, " ")}</h3>
  <h2 className="text-base font-medium text-gray-800 px-2">{book.title.replace(/[_-]/g, " ").replace("Answers", "အဖြေစုံ")}</h2>
  <a
    href={book.pdfUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-3 rounded-md bg-[#007bff] text-white py-1 px-4 transition-colors duration-300 hover:bg-[#0056b3]">
    Download PDF
  </a>
</div>
      ))
      ))
    }
    </div>
    </>
    )
}


export default Books;