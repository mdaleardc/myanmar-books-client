import Navbar from "./components/Navbar";
import BookStoreForm from "./components/BookStoreForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router";


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/upload" element={<BookStoreForm />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
