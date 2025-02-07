import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  
  
  return (
    <div className="py-[1rem] mt-4 rounded-md mb-3 bg-gradient-to-tr px-2 from-[#523] to-[#325]">
    
  <div className='text-white text-sm font-normal tracking-wider px-4 flex flex-col gap-2'><div className="max-w-3xl mx-auto text-center">
  <h2 className="text-[#0ef] text-2xl font-semibold py-4">
    Support or Collaborate
  </h2>
  <p className="indent-6 text-base leading-relaxed text-justify">
    This platform is built with dedication to accessible education. If you find it helpful, support by sharing, providing feedback, or collaborating on future projects.
  </p>
</div>

<h3 className="text-yellow-500 text-center font-semibold text-xl py-2">Join Me</h3>
<p className="indent-6 max-w-2xl mx-auto text-justify leading-relaxed text-base">
  I&apos;m looking for passionate designers, developers, and project managers to create outstanding web experiences together.
</p>

<h3 className="text-yellow-500 text-center font-semibold text-xl py-2">How We Can Work Together</h3>
<ul className="my-2 list-disc max-w-4/5 mx-auto text-base leading-relaxed">
  <li><span className="font-semibold">Collaborative Ideation:</span> Brainstorm and innovate together.</li>
  <li><span className="font-semibold">Skill Sharing:</span> Exchange expertise and grow as a team.</li>
  <li><span className="font-semibold">Clear Communication:</span> Keep ideas flowing smoothly.</li>
</ul>

<h3 className="text-green-500 text-center font-semibold text-xl py-1">Get in Touch</h3>
<p className="indent-6 max-w-2xl mx-auto text-justify leading-relaxed text-base">
  Ready to collaborate? Reach out via the contact form below.
</p>
<p className="max-w-2xl pt-2 text-right leading-relaxed text-base">
  <em>Let&apos;s build something amazing together!</em>
</p></div>
<div className='mx-4'>
  <h1 className="text-[#0ef] text-center text-2xl font-semibold my-4 tracking-wider">We&apos;d Love to Hear From You!</h1>
  <p className="text-white text-center tracking-wider py-2">
    Have suggestions, feedback, or inquiries? Reach out by clicking on the options below.
  </p>
  <h4 className='text-center text-lg font-semibold text-white mt-4' id='contact'>Contact Us</h4>
  <div className="text-center flex flex-row justify-center items-center gap-6">
    <a href="https://m.me/mdaismail.it" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2 text-xl text-blue-400 underline hover:text-blue-500 transition duration-300'>
    <FaFacebookMessenger size='25' className='text-white'/>
  Message Us
    </a>
    <a href="mailto:dismailait@gmail.com?subject=From: Myanmar School Books" className='flex flex-row gap-2 text-xl text-blue-400 underline hover:text-blue-500 transition duration-300'>
    <MdEmail size='25' className='text-white'/>
      Email Us
    </a>
  </div>
</div>
      
    </div>
  );
};

export default Contact;
