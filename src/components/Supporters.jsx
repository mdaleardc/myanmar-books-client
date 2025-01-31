import React from "react";

const supporters = [
  {
    name: "",
    contribution: "",
    image: "",
    social: {
      facebook: "",
      twitter: "",
      instagram: "",
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

      <div className="mx-auto flex flex-wrap flex-row items-center gap-6 px-6">
        {supporters.map((supporter, index) => (
          <div key={index} className="mx-auto w-3/5 bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <img
              src={supporter.image}
              alt={supporter.name}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
            />
            <h3 className="text-xl font-semibold text-gray-700">{supporter.name}</h3>
            <p className="text-gray-600 mt-2 text-sm">{supporter.contribution}</p>
            <div className="mt-4 flex space-x-4">
              <a href={supporter.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={supporter.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={supporter.social.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Supporters;