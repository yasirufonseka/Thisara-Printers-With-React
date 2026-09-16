import { XMarkIcon, PhotoIcon, ArrowUpTrayIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import {format} from "date-fns";
import swal from "sweetalert2";

function EmployeeModel({ onClose }) {
  const fileInputImage = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nic: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    department: "",
    jobTitle: "",
    employmentStatus: "",
    startDate: "",
  });
  const [isTouched, setIsTouched] = useState(false);
  const [errors, setErrors] = useState({});

  function handleFileInput() {
    fileInputImage.current.click();
  }

  function handleInputChange(e) {
    e.preventDefault();

    const { name, value, type, files } = e.target;
    //validate image file type and size
    if (type === "file") {
      const file = files && files[0];

      if (!file) {
        return;
      }

      if (!(file.type === "image/jpeg") && !(file.type === "image/png")) {
        console.error("not an image: " + file.type);
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: "Please select a valid image file (JPEG or PNG).",
        }));
        setPreviewImage(null);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: "File size exceeds the 5MB limit.",
        }));
        setPreviewImage(null);
        return;
      }

      const objectURL = URL.createObjectURL(file);
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: "",
      }));
      setPreviewImage(objectURL);
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: file,
      }));
      return;
    }
    //validate input values 
    if (name === "firstName") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: "First name is required.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: "",
        }));
      }
    }

    if(name ==="lastName"){
      if(value.trim() === ""){
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: "Last name is required.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: "",
        }));
      }
    }

    //validate email
    if(name ==="email"){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(value)){
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
    //validate phone number
    if(name ==="phone"){
      const phoneRegex = /^\+?\d{10}$/;
      if(!phoneRegex.test(value)){  
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Please enter a valid phone number.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "",
        }));
      }
    }

    //validate NIC number
    if(name === "nic"){
      const regex = /^(?:[0-9]{9}[VvXx]|[0-9]{12})$/;
      if(!(regex.test(value))){
        console.log(value) ;
        setErrors((prevErrors) => ({
          ...prevErrors,
          nic: "Please enter a valid NIC number.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          nic: "",
        }));
          calBirthday(value);
      }
    }

   
  

    //set birthday using nic
    function calBirthday(nic){
    
    if(nic.length === 12){
      console.log(nic.length);

      const year = parseInt(nic.substring(0, 4), 10);
      const dayOfYear = parseInt(nic.substring(4, 7), 10);

      if (dayOfYear < 500){
      const date = new Date(year, 0); // January 1st of the given year
      date.setDate(dayOfYear); // Set the day of the year
      const formattedDate = format(date, "yyyy-MM-dd");
      console.log("Date of Birth:", formattedDate);
      console.log("Date of Birth:", date);
      setFormData((prevFormData) => ({
        ...prevFormData,
        dateOfBirth: formattedDate,
        gender: "male"
      }));

      }else{
        const date = new Date(year, 0);
        date.setDate(dayOfYear - 500); // Set the day of the year
        const formattedDate = format(date, "yyyy-MM-dd");
        console.log("Date of Birth:", formattedDate);
        console.log("Date of Birth:", date);
        setFormData((prevFormData) => ({
          ...prevFormData,
          dateOfBirth: formattedDate,
          gender: "female"
        }));
      }
  
      return
    }else if(nic.length === 10){
      
      const year = parseInt("19" + nic.substring(0, 2), 10);
      const dayOfYear = parseInt(nic.substring(2, 5), 10);

      if(dayOfYear < 500){
      const date = new Date(year, 0); // January 1st of the given year
      date.setDate(dayOfYear); // Set the day of the year
      const formattedDate = format(date, "yyyy-MM-dd");
      console.log("Date of Birth:", formattedDate);
      console.log("Date of Birth:", date);
      setFormData((prevFormData) => ({
        ...prevFormData,
        dateOfBirth: formattedDate,
        gender: "male"
      }));
    }else{
      const date = new Date(year, 0);
      date.setDate(dayOfYear - 500);
      const formattedDate = format(date, "yyyy-MM-dd");
      console.log("Date of Birth:", formattedDate);
      console.log("Date of Birth:", date);
      setFormData((prevFormData) => ({
        ...prevFormData,
        dateOfBirth: formattedDate,
        gender: "female"
      }));
    }
    }

    }

    
   


    //update normal input values
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted employee form:", formData);
  }
  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm ">
      {/* Modal Card */}
      <div className="relative h-[80%] min-w-[60%] max-w-md bg-white rounded-2xl shadow-2xl p-6 mx-4 overflow-y-scroll">

        {/* Header */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Add New Employee</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Fill in the details to create a new employee profile.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 ml-4 mt-0.5"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <form className="mb-5" onSubmit={handleSubmit}>
          {/* Profile Photo */}
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-2 mt-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex-shrink-0">
              {previewImage ? (
                <img src={previewImage} alt="Selected Image" className={`rounded-full object-cover w-full h-full`} />
              ) : (<PhotoIcon className="w-6 h-6" />)}

            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700">Profile Photo</p>
              <p className="text-xs text-gray-400 leading-snug">
                PNG, JPG or WEBP up to 5MB. Square aspect ratio recommended.
              </p>
            </div>
            <button onClick={handleFileInput} type="button" className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors bg-white flex-shrink-0">
              <ArrowUpTrayIcon className="w-3.5 h-3.5" />
              Upload
              <input ref={fileInputImage} value={formData.image} onChange={handleInputChange} type="file" className={`hidden`} />
            </button>

          </div>
          <div className="mb-5 text-red-600 font-extralight font-mono text-sm error">{errors.image}
          </div>



          {/* Personal Information */}
          <p className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
            Personal Information
          </p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="e.g. Alex"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.firstName}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="e.g. Morgan"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.lastName}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. a.morgan@corporp.com"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
               <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.email}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g. +1 (555) 234-5678"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.phone}
              </div>
            </div>
              
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">NIC No</label>
              <input
                type="text"
                name="nic"
                value={formData.nic}
                onChange={handleInputChange}
                placeholder="e.g. 9912034995V"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
               <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.nic}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Date Of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                placeholder="e.g. +1 (555) 234-5678"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
               <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.dateOfBirth}
              </div>
            </div>
            {/*gender*/}
            <div>
              <label className=" text-xs font-medium text-gray-600 mb-2">Gender</label>
              <div className={`flex flex-row gap-3 `}>
                <label className="text-xs font-medium text-gray-600 mb-1" htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                  className="text-sm bg-white "
                />
                <label className="text-xs font-medium text-gray-600 mb-1" htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                  className="text-sm bg-white "
                />
                 <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.gender}
              </div>
              </div>
            </div>
            {/*  marital status*/}
            <div>
              <label className=" text-xs font-medium text-gray-600 mb-2">Marital Status</label>
              <div className={`flex flex-row gap-3 `}>
                <label className="text-xs font-medium text-gray-600 mb-1" htmlFor="Married">Married</label>
                <input
                  type="radio"
                  id="married"
                  name="maritalstatus"
                  value="married"
                  onChange={handleInputChange}
                  className="text-sm bg-white "
                />
                <label className="text-xs font-medium text-gray-600 mb-1" htmlFor="single">Single</label>
                <input
                  type="radio"
                  id="single"
                  name="maritalstatus"
                  value="single"
                  onChange={handleInputChange}
                  className="text-sm bg-white "
                />
                 <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.maritalstatus}
              </div>
              </div>
            </div>

          </div>
          {/*Emergency contact*/}
          <p className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
            Emergency Contact Details
          </p>
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Contact Person's Name</label>
                <input
                  type="text"
                  name="emergencyContactName"
                  placeholder="e.g. Alex"
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                 <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.emergencyContactName}
              </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Contact No</label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  value={formData.emergencyContactPhone}
                  onChange={handleInputChange}
                  placeholder="e.g. +94 70 1234567"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                 <div className="mb-5 mt-1 text-red-600 font-extralight font-mono text-sm error">
                {errors.emergencyContactPhone}
              </div>
              </div>
            </div>

          </div>

          {/* Employment Details */}
          <p className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
            Employment Details
          </p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Department</label>
              <div className="relative">
                <select name="department" value={formData.department} onChange={handleInputChange} className="w-full appearance-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-8">
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>HR</option>
                  <option>Finance</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Job Title / Role</label>
              <input
                type="text"
                placeholder="e.g. Senior Software Engineer"
                value={formData.jobTitle}
                name="jobTitle"
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Employment Status</label>
              <div className="relative">
                <select name="employmentStatus" value={formData.employmentStatus} onChange={handleInputChange} className="w-full appearance-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-8">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Intern</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-gray-600 rounded-lg border hover:scale-105  border-gray-200 bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-in"
            >
              Cancel
            </button>
            <button type="submit" className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white  bg-blue-600 hover:bg-blue-700 hover:scale-105 active:bg-blue-800 rounded-lg shadow-md shadow-blue-200 transition-all duration-200 ease-in">
              <PlusIcon className="size-4" />
              Add Employee
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default EmployeeModel;