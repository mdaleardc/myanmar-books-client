import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const supporters = [
  {
    name: "Mr. Nurul Hakim",
    contribution: "Supports providing and curating PDF file resources for our community",
    about: "",
    //image: "https://res.cloudinary.com/dubmzlovd/image/upload/v1738652247/414676626_695336989392924_2616853107996399_n_mvmfdo.jpg",
    image: "https://res.cloudinary.com/dubmzlovd/image/upload/v1738653886/IMG_20250204_132416_q7wxtb.jpg",
    social: {
      facebook: "https://www.facebook.com/share/18swrfGuZm/",
      twitter: "https://x.com/NurHaki85261693?s=09",
      youtube: "https://youtube.com/@seekknowledg?si=U5-Ns_6ErEIm7R5U",
    },
  },
  // Add more supporters as needed
];

const Supporters = () => {
  return (
<section id="supporters" className="py-10 bg-gray-100 text-center">
<h2 className="text-3xl font-bold text-gray-800 mb-6">Our Supporters</h2>
<p className="text-gray-600 mb-8">
Special thanks to those who contributed to making this project possible!
</p>

<div className="mx-auto flex flex-wrap items-center justify-center gap-6 px-6">
{supporters.map((supporter, index) => (
  <div
    key={index}
    className="w-72 bg-white p-6 shadow-md rounded-lg flex flex-col items-center"
  >
    <img
      src={supporter.image}
      alt={supporter.name}
      className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
    />
    <h3 className="text-xl font-semibold text-gray-700">
      {supporter.name}
    </h3>
    <p className="text-gray-600 mt-2 text-sm">
      {supporter.contribution}
    </p>
    <div className="mt-4 flex space-x-6">
      {supporter.social.facebook && (
        <a
          href={supporter.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700">
          <FaFacebook size='25'/>
        </a>
      )}
      {supporter.social.twitter && (
        <a
          href={supporter.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600">
          <FaSquareXTwitter size='25'/>
        </a>
      )}
      {supporter.social.youtube && (
        <a
          href={supporter.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-pink-700 flext">
          <FaYoutube size='25'/>
        </a>
      )}
    </div>
  </div>
))}
</div>
</section>
);
};

export default Supporters;