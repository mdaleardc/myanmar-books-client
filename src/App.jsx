import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const BookStoreForm = lazy(() => import("./components/BookStoreForm"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const api_endpoint = import.meta.env.VITE_APP_API_ENDPOINT;

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={api_endpoint} element={<BookStoreForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;