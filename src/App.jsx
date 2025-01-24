import Navbar from "./components/Navbar";
import BookStoreForm from "./components/BookStoreForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router";

const App = () => {
  const api_endpoint = import.meta.env.VITE_APP_API_ENDPOINT;

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path={api_endpoint} element={<BookStoreForm />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
