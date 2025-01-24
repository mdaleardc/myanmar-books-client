

const Share = () => {
  
const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: "Download Free PDF Books",
      text: "Check out this awesome website for free PDF books!\n",
      url: window.location.href,
    })
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Link copied to clipboard!"))
      .catch((error) => console.error("Error copying link:", error));
  }
};

return (
  <div className="flex flex-row justify-center items-center gap-6 my-6 justify-center">
    {/* Web Share / Copy Link */}
    <button
      onClick={handleShare}
      className="rounded-md bg-blue-500 text-white py-1 px-4 transition duration-300 hover:bg-blue-700">
      Share this Website
    </button>

    {/* Social Media Links */}
    <div>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          "Check out this awesome website for free PDF books: " + window.location.href
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-green-500 text-white py-2 px-4 transition duration-300 hover:bg-green-700">
        WhatsApp
      </a>
    </div>
  </div>
);
}

export default Share;