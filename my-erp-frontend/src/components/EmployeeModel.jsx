import { XMarkIcon, PhotoIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import {useState, useRef} from "react";
import swal from "sweetalert2";

function EmployeeModel({ onClose }) {
  const fileInputImage = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  function handleFileInput(){
    fileInputImage.current.click();
  }

  function handleInputChange(e){
    const file = e.target.files[0];
    if(!(file.type === "image/jpeg") && !(file.type === "image/png") ){
      console.error("not an image"+ file.type);
      swal.fire({
        title:" Type Mismatch",
        text: "Please upload an image",
        icon: "warning",
      })
    }
    if(file.size > 5*1024*1024){
      swal.fire({
        title:"Large File",
        text:"please use less than 5MB file size",
        icon: "error",
      })
    }
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setPreviewImage(objectURL);
      console.log(file);
      console.log(file.name);
    }
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

        {/* Profile Photo */}
        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-5 mt-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex-shrink-0">
            {previewImage ? (
                    <img src={previewImage} alt="Selected Image" className={`rounded-full object-cover w-full h-full`}/>
            ):(<PhotoIcon className="w-6 h-6" />)}

          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-700">Profile Photo</p>
            <p className="text-xs text-gray-400 leading-snug">
              PNG, JPG or WEBP up to 5MB. Square aspect ratio recommended.
            </p>
          </div>
          <button onClick={handleFileInput} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors bg-white flex-shrink-0">
            <ArrowUpTrayIcon className="w-3.5 h-3.5" />
            Upload
            <input ref={fileInputImage} onChange={handleInputChange} type="file" className={`hidden`} />
          </button>
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
              placeholder="e.g. Alex"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="e.g. Morgan"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Work Email</label>
            <input
              type="email"
              placeholder="e.g. a.morgan@corporp.com"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. +1 (555) 234-5678"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">NIC No</label>
            <input
                type="text"
                placeholder="e.g. 9912034995V"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Date Of Birth</label>
            <input
                type="date"
                placeholder="e.g. +1 (555) 234-5678"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
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
                  className="text-sm bg-white "
              />
              <label className="text-xs font-medium text-gray-600 mb-1" htmlFor="female">Female</label>
              <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="text-sm bg-white "
              />
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
                  className="text-sm bg-white "
              />
              <label className="text-xs font-medium text-gray-600 mb-1" htmlFor="single">Single</label>
              <input
                  type="radio"
                  id="single"
                  name="maritalstatus"
                  className="text-sm bg-white "
              />
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
                  placeholder="e.g. Alex"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Contact No</label>
              <input
                  type="tel"
                  placeholder="e.g. +94 70 1234567"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
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
              <select className="w-full appearance-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-8">
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
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Employment Status</label>
            <div className="relative">
              <select className="w-full appearance-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-8">
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
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-md shadow-blue-200 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Employee
          </button>
        </div>

      </div>
    </div>
  );
}

export default EmployeeModel;