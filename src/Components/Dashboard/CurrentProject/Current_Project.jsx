import { React, useState } from "react";
import "./Current_Project.css";
import axios from 'axios';

const Current_Project = () => {
  const [projectName, setProjectName] = useState("");
  const [amountRemain , setAmountRemain] = useState("");
  const [amountRequired, setAmountRequired] = useState("");
  const [collectedAmount, setCollectedAmount] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedFiles, setSelectedFiles] = useState(null);
  const pictureImageTxt = "Choose an image";

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(file);
    } else {
      setImageSrc(null);
    }
  };

  const handleAddProject = async () => {
    // Reset validation errors
    setValidationErrors({});

    // Check if any field is empty
    if (!projectName || !amountRequired || !collectedAmount || !projectDescription || !imageSrc) {
      setValidationErrors({ message: 'Please fill in all fields' });
      return;
    }

    const formData = new FormData();
    formData.append('amountRemain', amountRemain);
    formData.append('projectName', projectName);
    formData.append('amountRequired', amountRequired);
    formData.append('collectedAmount', collectedAmount);
    formData.append('projectDescription', projectDescription);
    formData.append('image', imageSrc);

    try {
      const response = await axios.post('https://busy-tan-dhole-wig.cyclic.app/api/v1/AddProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    alert("Added Succefully")
  setProjectName('')
  setAmountRequired('')
   setCollectedAmount('')
   setProjectDescription('')
   setImageSrc('')
   setAmountRemain('')
      console.log(response);
      // Handle response from backend if needed
    } catch (error) {
      console.error('Error uploading data:', error);
      setValidationErrors({ message: 'Error uploading data. Please try again later.' });
    }
  };

  return (
    <div>

      <h1 className="text-4xl text-center">Add Current Project </h1>
      {/* Display validation errors */}
      {validationErrors.message && (
        <div className="text-red-500 mb-4">{validationErrors.message}</div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="projectName"
        >
          Project Name
        </label>
        <input
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="projectName"
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="amountRequired"
        >
          Amount Required
        </label>
        <input
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amountRequired"
          type="text"
          placeholder="Amount Required"
          value={amountRequired}
          onChange={(e) => setAmountRequired(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="collectedAmount"
        >
          Collected Amount
        </label>
        <input
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="collectedAmount"
          type="text"
          placeholder="Collected Amount"
          value={collectedAmount}
          onChange={(e) => setCollectedAmount(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="collectedAmount"
        >
           Amount Remain 
        </label>
        <input
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="collectedAmount"
          type="text"
          placeholder="Amout Remain"
          value={amountRemain}
          onChange={(e) => setAmountRemain(e.target.value)}
        />
      </div>
      <label className="picture" htmlFor="picture__input" tabIndex="0">
        <span className="picture__image ">
          {imageSrc ? (
            <img src={URL.createObjectURL(imageSrc)} alt="Uploaded" className="picture__img" />
          ) : (
            pictureImageTxt
          )}
        </span>
      </label>
      <input
        type="file"
        name="picture__input"
        id="picture__input"
        onChange={handleInputChange}
      />

      <label
        htmlFor="message"
        className="mt-6 font-bold block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Project Description
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your Project Description..."
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      ></textarea>

      <button
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddProject}
      >
        Add a Project
      </button>
    </div>
  );
};

export default Current_Project;
