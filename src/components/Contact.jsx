import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-[2rem] mt-4 rounded-lg mb-3 bg-gradient-to-tr px-4 from-[#412] to-[#213] shadow-lg">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h1 className="text-[#00bcd4] text-3xl font-semibold mb-4">We&apos;d Love to Hear From You!</h1>
        <p className="text-base tracking-wider mb-6">
          Have suggestions, feedback, or inquiries? Reach out by clicking on the options below.
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-8">
            <a
              aria-label="Message us on Messenger"
              href="https://m.me/mdaismail.it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-md bg-blue-600 hover:bg-blue-700 transition duration-300 text-white w-32"
            >
              <FaFacebookMessenger size="30" />
              <span className="text-sm font-semibold">Message Us</span>
            </a>
            <a
              aria-label="Email us via email"
              href="mailto:dismailait@gmail.com?subject=From: Myanmar School Books"
              className="flex flex-col items-center gap-2 p-4 rounded-md bg-green-700 hover:bg-green-800 transition duration-300 text-white w-32"
            >
              <MdEmail size="30" />
              <span className="text-sm font-semibold">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;