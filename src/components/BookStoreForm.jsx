import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const BookStoreForm = () => {
  const api_url = import.meta.env.VITE_APP_API_URL;
  const [formData, setFormData] = useState({
    grade: "",
    subject: "",
    pdfType: "",
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
      .post(`${import.meta.env.VITE_APP_LOCAL_HOST_URL}/upload`, formData) // for development
      //.post(`${api_url}/upload`, formData) //for deployment
      .then((response) => {
        toast.success(response.data);
      // Handle success (e.g., show a success message)
      setFormData({
        grade: "",
        subject: "",
        pdfType: "",
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
        </select>

        <label htmlFor="subject" className="block mb-2 font-semibold">
          Subject:
        </label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
        >
          <option value="">Select Subject</option>
          <option value="Myanmar">Myanmar</option>
          <option value="English">English</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Social_Studies">Social Studies</option>
          <option value="Life_Skills">Life Skills</option>
          <option value="Physics">Physics</option>
          <option value="Economics">Economics</option>
          <option value="Biology">Biology</option>
          <option value="Geometry">Geometry</option>
          <option value="Art">Art</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Grammar">Grammar</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
        </select>

        <label htmlFor="pdfType" className="block mb-2 font-semibold">
          PDF Type:
        </label>
        <select
          name="pdfType"
          id="pdfType"
          value={formData.pdfType}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
        >
          <option value="">Select PDF Type</option>
          <option value="Textbook">Textbook</option>
          <option value="Answers">Answers</option>
        </select>

        <label htmlFor="pdfUrl" className="block mb-2 font-semibold">
          PDF URL
        </label>
        <input
        type="text"
        name='pdfUrl'
        id='pdfUrl'
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
        placeholder='PDF URL (if has)'
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
