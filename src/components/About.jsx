import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section className="bg-gray-50 mx-auto rounded py-10 w-11/12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Platform</h2>
        <p className="text-gray-600 text-lg leading-relaxed text-justify">
          Welcome to our free PDF book download website! Our platform is dedicated to providing students, teachers, and book enthusiasts access to a wide range of educational resources and textbooks for grades 1 through 12. Whether you’re looking for textbooks or answer guides, we’ve got you covered—all completely free!
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Why Choose Us?</h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            Our mission is to make education accessible to everyone. With a simple interface, 
            organized resources, and quick downloads, we aim to support your learning journey 
            without any financial burden.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Free access to textbooks and answer guides</li>
            <li>Downloadable PDFs for offline use</li>
            <li>Resources for grades 1 through 12</li>
            <li>A user-friendly browsing experience</li>
          </ul>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">About Me</h3>
        <h4 className='text-center text-2xl font-semibold'>This is me, <a href="https://ismaildevcode.netlify.app/" className='text-red-600'>Mohammed Ismail</a></h4>
        <p className="text-gray-600 text-lg leading-relaxed text-justify">
          I am a passionate web developer and educator who aims to bridge the gap between technology and education. As a teacher, I understand the challenges faced by students and educators. Through this platform, I hope to contribute to making learning resources more accessible to everyone. 
        </p>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed text-justify">In addition to this project, I’m working on building my skills in web development and Android software engineering. If you share similar interests or have ideas to make this platform better, I’d love to connect!
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto text-center">
      <h4 className="text-xl font-bold text-center text-[#ff00cc]">Follow on Social Medias</h4>
      <div className='mx-auto text-center flex flex-row items-center justify-center gap-5 mt-4'>
      <a href='https://github.com/mdaleardc' target='_blank'><FaGithub size='25' className='text-[#181717]'/></a>
      <a href='https://www.facebook.com/mdaismail.it' target='_blank'><FaFacebook size='25' className='text-[#1877F2]'/></a>
      <a href='https://x.com/MdIsmail5851415' target='_blank'><FaSquareXTwitter size='25'className='text-[#1DA1F2]'/></a>
      <a href='https://bd.linkedin.com/in/mohammed-ismail-601457217' target='_blank'><FaLinkedin size='25' className='text-[#0A66C2]'/></a>
      </div>
      </div>

      {/* Support/Collaborate Section */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Support or Collaborate</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-justify">This platform is a result of hard work and dedication to making education accessible. If you find this platform helpful, you can support my journey by sharing it with others, providing feedback, or collaborating with me on future projects.
        </p>
        <p className="text-gray-600 text-lg mt-4">
          Reach out to me for collaboration or support via email: 
          <a
            href="mailto:dismailait@gmail.com"
            className="text-blue-500 underline ml-1">
            ismail@dev.com
          </a>
        </p>
        <p className="text-gray-600 text-lg mt-4">
          Let’s make education accessible to everyone, together!
        </p>
      </div>
    </section>
  );
};

export default About;