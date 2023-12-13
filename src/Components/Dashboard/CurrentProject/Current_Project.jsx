import { React, useState } from "react";
import "./Current_Project.css";
import axios from 'axios';

const Current_Project = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [imageSrcList, setImageSrcList] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [amountRequired, setAmountRequired] = useState("");
  const [collectedAmount, setCollectedAmount] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedFiles, setSelectedFiles] = useState(null);
  const pictureImageTxt = "Choose an image";

  const handleInputChange = (e) => {
    const files = e.target.files;
  
    if (files && files.length > 0) {
      const newImageSrcList = Array.from(files).map((file) => URL.createObjectURL(file));
      setImageSrcList(newImageSrcList);

      // Assuming you want to store an array of files
      setSelectedFiles(files);
      // If you want to display the first image
      setImageSrc(files[0]);
  
      // If you want to display multiple images, you may need to loop through the files
      // and render them in your UI
    } else {
      setImageSrcList([]);
      setSelectedFiles(null);
      setImageSrc(null);
    }
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
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
    formData.append('projectName', projectName);
    formData.append('amountRequired', amountRequired);
    formData.append('collectedAmount', collectedAmount);
    formData.append('projectDescription', projectDescription);
    formData.append('projectCategory', selectedCity);

    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        console.log(selectedFiles[i])
        formData.append(`image${i + 1}`, selectedFiles[i]);
      }
    }
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
   setImageSrcList([])
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

      <div   className="mb-4" >
      <label className="font-bold" htmlFor="citySelect ">Select a Project Category:</label>
      <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        <option value="Sukkur">Sukkur</option>
        <option value="Jacobabad">Jacobabad</option>
        <option value="Badin">Badin</option>
        <option value="Thar">Thar</option>
        <option value="Larkana">Larkana</option>
        <option value="Dadu">Dadu</option>
        <option value="Rohri">Rohri</option>
        <option value="Salehpat">Salehpat</option>
        <option value="Khairpur">Khairpur</option>
        <option value="Khanpur">Khanpur</option>
        <option value="Shikarpur">Shikarpur</option>
        <option value="Nawabshah">Nawabshah</option>
        <option value="Gambat">Gambat</option>
        <option value="Ghotki">Ghotki</option>
        <option value="Qumbar">Qumbar</option>
        <option value="Shahdatkot">Shahdatkot</option>
        <option value="Rato Dero">Rato Dero</option>
      </select>

  
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
          Amount Collected 
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

      <div className="flex" >
        {imageSrcList.map((imageSrc, index) => (
          <label key={index} className="picture" tabIndex="0">
            <span className="picture__image">
              <img src={imageSrc} alt={`Uploaded ${index + 1}`} className="picture__img" />
            </span>
          </label>
        ))}
      </div>
      <input
        type="file"
        name="picture__input"
        id="picture__input"
        onChange={handleInputChange}
        multiple
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
