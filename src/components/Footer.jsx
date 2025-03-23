const Footer = () => {
  
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
  <p className="text-sm">
    © {new Date().getFullYear()} Myanmar Books Hub. All rights reserved.
  </p>
  <p className="text-sm">
    Created with ❤️ by{" "}
    <a
      href="https://ismaildevcode.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 font-semibold hover:underline"
    >
      Mohammed Ismail
    </a>
  </p>
</footer>
    )
}


export default Footer;