import Navbar from "./components/Navbar";
import BookStoreForm from "./components/BookStoreForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
//import AdsHandler from "./components/AdsHandler"; // Import AdsHandler
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  const api_endpoint = import.meta.env.VITE_APP_API_ENDPOINT;

  return (
    <BrowserRouter>
      <Navbar />
      {/*<AdsHandler /> This will refresh ads when route changes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={api_endpoint} element={<BookStoreForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;