import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const BookStoreForm = () => {
  const api_url = import.meta.env.VITE_APP_API_URL;
  const [formData, setFormData] = useState({
    grade: "",
    subject: "",
    pdfType: "",
    categories: "",
    specificBookName: "",
    pdfUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      //.post(`${import.meta.env.VITE_APP_LOCAL_HOST_URL}/upload`, formData) // for development
      .post(`${api_url}/upload`, formData) //for deployment
      .then((response) => {
        toast.success(response.data);
      // Handle success (e.g., show a success message)
      setFormData({
        grade: "",
        subject: "",
        pdfType: "",
        categories: "",
        specificBookName: "",
        pdfUrl: ""
      })
      })
      .catch((error) => {
        toast.error(error.message);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div className="font-sans bg-gray-100 p-5">
    <ToastContainer />
      <h1 className="text-center text-2xl font-bold mb-6">Book Store Form</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 border border-gray-300 rounded-lg shadow-md"
      >
        <label htmlFor="grade" className="block mb-2 font-semibold">
          Grade:
        </label>
        <select
          name="grade"
          id="grade"
          value={formData.grade}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300">
          <option value="">Select Grade</option>
          <option value="Grade_1">Grade 1</option>
          <option value="Grade_2">Grade 2</option>
          <option value="Grade_3">Grade 3</option>
          <option value="Grade_4">Grade 4</option>
          <option value="Grade_5">Grade 5</option>
          <option value="Grade_6">Grade 6</option>
          <option value="Grade_7">Grade 7</option>
          <option value="Grade_8">Grade 8</option>
          <option value="Grade_9">Grade 9</option>
          <option value="Grade_10">Grade 10</option>
          <option value="Grade_11">Grade 11</option>
          <option value="Grade_12">Grade 12</option>
          <option value="General">General</option>
          <option value="Islamic_Book">Islamic Book</option>
        </select>

        <label htmlFor="subject" className="block mb-2 font-semibold">
          Subject:
        </label>
        <input
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder='Subject name'
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"/>

        <label htmlFor="pdfType" className="block mb-2 font-semibold">
          PDF Type:
        </label>
        <select
          name="pdfType"
          id="pdfType"
          value={formData.pdfType}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300">
  <option value="">Select PDF Category</option>
    <option value="Textbook">Textbook</option>
    <option value="Answers">Answers</option>
    <option value="Answer_Key">Answer Key</option>
    <option value="Guide">Guide</option>
    <option value="Notes">Notes</option>
    <option value="Worksheet">Worksheet</option>
    <option value="Exam_Paper">Exam Paper</option>
    <option value="Reference">Reference</option>
    <option value="Presentation">Presentation</option>
    <option value="Research_Paper">Research Paper</option>
    <option value="Tutorial">Tutorial</option>
    <option value="Self_Study">Self Study</option>
    <option value="Vocational_Training">Vocational Training</option>
    <option value="Skill_Development">Skill Development</option>
    <option value="Adult_Education">Adult Education</option>
    <option value="Short_Course">Short Course</option>
    <option value="Workshop_Material">Workshop Material</option>
    <option value="Community_Learning">Community Learning</option>
    <option value="Extracurricular">Extracurricular</option>
    <option value="Lifelong_Learning">Lifelong Learning</option>
  </select>
  
  <label htmlFor="categories" className="block mb-2 font-semibold">
          Category
  </label>
  <select
          name="categories"
          id="categories"
          value={formData.categories}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300">
          <option value="">Select Category</option>
<option value="Formal_Education">Formal Education</option>
<option value="Non_Formal_Education">Non-Formal Education</option>
   </select>
  
  <label htmlFor="specificBookName" className="block mb-2 font-semibold">
  Specific Book Name (if any):
</label>
<input
  type="text"
  name="specificBookName"
  id="specificBookName"
  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
  placeholder="Enter the name of the specific book (if any)"
  value={formData.specificBookName}
  onChange={handleChange}
/>

        <label htmlFor="pdfUrl" className="block mb-2 font-semibold">
          PDF URL
        </label>
        <input
        type="text"
        name='pdfUrl'
        id='pdfUrl'
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
        placeholder='PDF URL'
        value={formData.pdfUrl}
        onChange={handleChange}
        autoComplete='off'/>

        <input
          type="submit"
          value="Submit"
          className="w-full p-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
        />
      </form>
    </div>
  );
};

export default BookStoreForm;
