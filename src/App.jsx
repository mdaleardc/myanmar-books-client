import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router"; // Fixed import
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookDetail from "./components/BookDetail"
// import AdsHandler from "./components/AdsHandler"; // Import AdsHandler if needed

// Lazy-loaded components
const BookStoreForm = lazy(() => import("./components/BookStoreForm"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const api_endpoint = import.meta.env.VITE_APP_API_ENDPOINT;

  return (
    <BrowserRouter>
      <Navbar />
      {/*<AdsHandler /> This will refresh ads when route changes */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={api_endpoint} element={<BookStoreForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-detail/:id" element={<BookDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;