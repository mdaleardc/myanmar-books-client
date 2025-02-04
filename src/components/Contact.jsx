import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  
  
  return (
    <div className="py-[1rem] mt-4 rounded-md mb-3 bg-gradient-to-tr px-2 from-[#523] to-[#325]">
    
  <div className='text-white text-sm font-normal tracking-wider px-4 flex flex-col gap-2'>
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-[#0ef] text-2xl font-semibold py-4">
      Support or Collaborate
    </h2>
    <p className="indent-6 text-base leading-relaxed text-justify">
      This platform is a result of hard work and dedication to making education accessible. If you find it helpful, support my journey by sharing it with others, providing feedback, or collaborating with me on future projects.
    </p>
    <p className="indent-6 text-base mt-4 text-justify leading-relaxed">
      Are you passionate about web development and looking for an opportunity to collaborate with a dedicated and skilled developer? Let’s make education accessible to everyone, together!
    </p>
  </div>
  
  <h3 className='text-yellow-500 text-center font-semibold text-xl py-2'>What I'm Looking For:</h3>
  <p className='indent-6 max-w-2xl mx-auto text-justify leading-relaxed text-base'>
    I'm seeking like-minded individuals who are enthusiastic about creating stunning websites and web applications. Whether you're a designer, developer, or have skills in project management, I believe that collaboration is key to delivering exceptional results.
  </p>
  
  <h3 className='text-yellow-500 text-center font-semibold text-xl py-2'>How We Can Work Together?</h3>
  <p className='indent-6 max-w-2xl mx-auto text-justify leading-relaxed text-base'>
    If you're interested in teaming up with me for web development projects, here's what you can expect:
  </p>
  <ul className='my-4 list-disc max-w-4/5 mx-auto'>
    <li className='max-w-2xl mx-auto text-justify leading-relaxed text-base'>
      <span className='text-xl font-semibold'>Collaborative Ideation:</span> We'll brainstorm ideas and come up with innovative solutions together.
    </li>
    <li className='max-w-2xl mx-auto text-justify leading-relaxed text-base'>
      <span className='text-xl font-semibold'>Skill Sharing:</span> Share your expertise, and I'll do the same, fostering a learning environment for both of us.
    </li>
    <li className='max-w-2xl mx-auto text-justify leading-relaxed text-base'>
      <span className='text-xl font-semibold'>Timely Communication:</span> Clear and open communication is crucial for project success, and I'm committed to keeping the lines of communication open throughout our collaboration.
    </li>
  </ul>
  
  <h3 className='text-green-500 text-center font-semibold text-xl py-2'>Get in Touch</h3>
  <p className='indent-6 max-w-2xl mx-auto text-justify leading-relaxed text-base'>
    If you're ready to embark on an exciting journey of web development collaboration, I'd love to hear from you! Feel free to reach out to me via the contact form below.
  </p>
  <p className='max-w-2xl pt-4 text-right leading-relaxed text-base'>
    <em>Let's build something amazing together!</em>
  </p>
</div>
<div className='mx-4'>
  <h1 className="text-[#0ef] text-center text-2xl font-semibold my-4 tracking-wider">We'd Love to Hear From You!</h1>
  <p className="text-white text-center tracking-wider py-2">
    Have suggestions, feedback, or inquiries? Reach out by clicking on the options below.
  </p>
  <h4 className='text-center text-lg font-semibold text-white mt-4' id='contact'>Contact Us</h4>
  <div className="text-center flex flex-row justify-center items-center gap-6">
    <a href="https://m.me/mdaismail.it" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2 text-xl text-blue-400 underline hover:text-blue-500 transition duration-300'>
    <FaFacebookMessenger size='25'/>
  Message Us
    </a>
    <a href="mailto:dismailait@gmail.com?subject=From: Myanmar School Books" className='flex flex-row gap-2 text-xl text-blue-400 underline hover:text-blue-500 transition duration-300'>
    <MdEmail size='25'/>
      Email Us
    </a>
  </div>
</div>
      
    </div>
  );
};

export default Contact;
