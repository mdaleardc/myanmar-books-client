import { FaLinkedin, FaGithub, FaFacebook, FaGlobe } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Contact from "./Contact";

const About = () => {
  return (
    <section className="bg-gray-50 mx-auto rounded py-10 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Platform</h2>
        <p className="text-gray-600 text-lg leading-relaxed text-justify">Welcome to our free PDF book download site! We provide textbooks, answer guides for grades 1-12, Islamic books, and a variety of other learning resources, all available at no cost.
</p>
      </div>

      {/* What We Offer Section */}
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Why Choose Us?</h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            Our mission is to make education accessible to everyone. With a simple interface, organized resources, and quick downloads, we aim to support your learning journey without any financial burden.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
  <h3 className="text-xl font-semibold text-gray-700 mb-2">What We Offer</h3>
  <ul className="list-disc list-inside text-gray-600 leading-relaxed">
    <li>Free access to textbooks and answer guides</li>
    <li>Islamic books and religious learning resources</li>
    <li>Downloadable PDFs for offline use</li>
    <li>Resources for grades 1 through 12</li>
    <li>Diverse educational materials for all ages</li>
    <li>A user-friendly browsing experience</li>
  </ul>
</div>
      </div>

{/* About Me Section */}
<div className="mt-12 mb-10">
  <h3 className="text-3xl font-bold text-pink-600 mb-4 text-center">About Me</h3>

  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      {/* Profile Image */}
      <a href='https://www.facebook.com/mdaismail.it'>
      <img 
        src='https://res.cloudinary.com/dubmzlovd/image/upload/v1741245462/developer_ihxb2p.jpg' 
        alt="Mohammed Ismail" 
        className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-300"
      />
      </a>
      
      <h4 className="text-2xl font-semibold">
        <a href="https://ismaildevcode.netlify.app/" className="text-pink-600 ml-1">
          Mohammed Ismail
        </a>
      </h4>

      <p className="text-gray-600 font-semibold mt-2 text-sm tracking-wide leading-relaxed">
        I am the developer of this website, dedicated to providing free educational resources.
      </p>

      <p className="indent-6 text-gray-600 mt-2 text-sm leading-relaxed text-justify">
        A passionate web developer & educator, bridging the gap between technology and education.
      </p>
      
      <p className="indent-6 text-gray-600 mt-2 text-sm leading-relaxed text-justify">
        I understand the challenges faced by students and educators and aim to make learning resources more accessible.
      </p>

      <p className="indent-6 text-gray-600 mt-2 text-sm leading-relaxed text-justify">
        I&apos;m also enhancing my skills in web and Android development.
      </p>

      <p className="indent-6 text-gray-600 mt-2 text-sm leading-relaxed text-justify">
        🚀 Have ideas? Let’s connect!
      </p>
            <div className='mx-auto text-center flex flex-row items-center justify-center gap-6 mt-4'>
          <a
            aria-label='Follow me on github'
            href='https://github.com/mdaleardc' target='_blank'>
            <FaGithub size='25' className='text-[#181717] h-[25px] w-[25px]' />
          </a>
          <a href='https://www.facebook.com/mdaismail.it' target='_blank' aria-label='Follow me on facebook'>
            <FaFacebook size='25' className='text-[#1877F2] h-[25px] w-[25px]' />
          </a>
          <a href='https://x.com/MdIsmail5851415' target='_blank' aria-label='Follow me on X (twitter)'>
            <FaSquareXTwitter size='25' className='text-black h-[25px] w-[25px]' />
          </a>
          <a href='https://bd.linkedin.com/in/mohammed-ismail-601457217' target='_blank' aria-label='Contact me on linkedin'>
            <FaLinkedin size='25' className='text-[#0A66C2] h-[25px] w-[25px]' />
          </a>
          <a href='https://ismaildevcode.netlify.app/' target='_blank' aria-label='Contact me on linkedin'>
            <FaGlobe size='25' className='text-[#333] h-[25px] w-[25px]' />
          </a>
        </div>
        </div>
  </div>
</div>

      <Contact />
    </section>
  );
};

export default About;