import { FaXTwitter } from "react-icons/fa6";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handSubmit = (e) => {
    e.preventDefault();
    if (value.fullName.trim() === "") {
      alert("Please enter your full name!");
    } else if (value.email.trim() === "" || !validateEmail(value.email)) {
      alert("Please enter a valid email address!");
    } else if (value.message.trim() === "") {
      alert("Please enter your message!");
    } else {
      emailjs
        .sendForm(
          "service_itpl5lq",
          "template_j9png0o",
          form.current, {
            publicKey: "FkRzi5LjkTcvvEnnp",
          })
        .then(() => {
          alert("Email sent successfully!");
          setValue({ fullName: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Failed to send email", error.text);
          alert("An error occurred while sending the email. Please try again later.");
        });
    }
  };

  return (
    <div className="py-[1rem] mt-4 rounded-md mb-3 bg-gradient-to-tr px-2 from-[#523] to-[#325]">
    
    <div className='text-white text-xl font-normal tracking-wider px-4 flex flex-col gap-2'>
<div className="max-w-4xl mx-auto text-center">
  <h2 className="text-[#0ef] text-3xl font-semibold py-[1rem]">
    Support or Collaborate
  </h2>
  <p className="indent-8 text-lg leading-relaxed text-justify">
    This platform is a result of hard work and dedication to making education accessible. If you find it helpful, support my journey by sharing it with others, providing feedback, or collaborating with me on future projects.
  </p>
  <p className="indent-8 text-lg mt-4 text-justify leading-relaxed">
    Are you passionate about web development and looking for an opportunity to collaborate with a dedicated and skilled developer? Let’s make education accessible to everyone, together!
  </p>
</div>
    <h3 className='text-yellow-500 text-center font-semibold text-2xl py-[0.5rem]'>What I'm Looking For:</h3>
    <p className='indent-8 max-w-2xl mx-auto text-justify leading-relaxed'>I'm seeking like-minded individuals who are enthusiastic about creating stunning websites and web applications. Whether you're a designer, developer, or have skills in project management, I believe that collaboration is key to delivering exceptional results.</p>
    <h3 className='text-yellow-500 text-center font-semibold text-2xl py-[0.5rem]'>How We Can Work Together?</h3>
    <p className='indent-8 max-w-2xl mx-auto text-justify leading-relaxed'>If you're interested in teaming up with me for web development projects, here's what you can expect:</p>
    <ul className='my-[1.5rem] list-disc max-w-4/5 mx-auto'>
    <li className='max-w-2xl mx-auto text-justify leading-relaxed'><span className='text-2xl font-semibold'>Collaborative Ideation:</span> We'll brainstorm ideas and come up with innovative solutions together.</li>
    <li className='max-w-2xl mx-auto text-justify leading-relaxed'><span className='text-2xl font-semibold'>Skill Sharing:</span> Share your expertise, and I'll do the same, fostering a learning environment for both of us.</li>
    <li className='max-w-2xl mx-auto text-justify leading-relaxed'><span className='text-2xl font-semibold'>Timely Communication:</span> Clear and open communication is crucial for project success, and I'm committed to keeping the lines of communication open throughout our collaboration.</li>
    </ul>
    <h3 className='text-green-500 text-center font-semibold text-2xl py-[0.5rem]'>Get in Touch</h3>
    <p className='indent-8 max-w-2xl mx-auto text-justify leading-relaxed'>If you're ready to embark on an exciting journey of web development collaboration, I'd love to hear from you! Feel free to reach out to me via the contact form below.</p>
    <p className='max-w-2xl pt-4 text-right leading-relaxed'><em>Let's build something amazing together!</em></p>
    </div>
      <div className='mx-2'>
      <h1 className="text-[#0ef] text-center text-2xl font-semibold my-1 tracking-wider">What is on Your Mind?</h1>
      <p className="text-white text-center tracking-wider py-1">Report or Give Feedback</p>
      </div>
      <div className="mx-[5px] sm:mx-auto max-w-2xl py-[1rem] border-2 border-white rounded">
        <form
          className="flex flex-col gap-y-2 justify-center items-center"
          onSubmit={handSubmit}
          ref={form}
          method="post"
        >
          <div className="w-5/6">
            <label htmlFor="fullName" className="sr-only">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full name"
              value={value.fullName}
              onChange={handleChange}
              className="outline-none w-full h-[2rem] rounded-md p-[5px] text-white border-[1px] border-white bg-transparent tracking-wider focus:border-[#0ef] focus:shadow-md"
            />
          </div>
          <div className="w-5/6">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email address"
              value={value.email}
              onChange={handleChange}
              className="outline-none w-full h-[2rem] rounded-md p-[5px] text-white border-[1px] border-white bg-transparent tracking-wider focus:border-[#0ef] focus:shadow-md"
            />
          </div>
          <div className="w-5/6">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message"
              value={value.message}
              onChange={handleChange}
              className="outline-none w-full rounded-md p-[5px] text-white border-[1px] border-white bg-transparent tracking-wider focus:border-[#0ef] focus:shadow-md"
            ></textarea>
          </div>
          <div className="w-3/6">
          <input
            type="submit"
            value="Send"
            className="w-full rounded-md uppercase text-white border-2 border-zinc-400 p-2 py-1 tracking-wider cursor-pointer bg-[#0090FF] hover:bg-[#0ef] hover:text-black"
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;