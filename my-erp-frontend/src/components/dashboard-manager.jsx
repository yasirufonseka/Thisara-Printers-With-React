import {DocumentTextIcon, PlusIcon} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"


function DashBoard() {
    const user = "Yasiru"

    return (
        <div className="dashboard flex flex-col w-full h-full bg-transparent">
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-2xl pt-5 ps-5 font-bold ">Welcome Back! {user}</h1>
                <p className="text-md text-gray-600 ps-5">These are the trends until today.</p>
            </div>
            {/* CARD SECTION */}
            <div className="stat-cards flex flex-row justify-between gap-2 p-2 ">
                <div className="flex flex-col items-center justify-start w-60 h-40 border-2 border-purple-500 bg-white shadow-lg rounded-3xl card">
                    <div className="flex flex-row w-full items-center justify-start gap-2 pt-7 pl-5">
                        <span className="p-1.5 border-0 bg-indigo-200  rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4F46E5"><path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-117.5-77.5Q700-455 700-480t-17.5-42.5Q665-540 640-540t-42.5 17.5Q580-505 580-480t17.5 42.5Q615-420 640-420t42.5-17.5Z" /></svg>
                        </span>
                        <h4 className="text-left text-lg text-gray-700 font-bold">TOTAL INCOME</h4>
                    </div>
                    <div className="card-footer flex flex-col items-start justify-start text-left w-full gap-1 pt-2 pl-3">
                        <div className="flex flex-col items-start justify-start gap-2 pl-2">
                            <p className="text-lg font-semibold  text-black ps-3 pt-2 ">Rs. 1,000,000</p>
                            <span className="ml-3 bg-emerald-200 float-left text-white text-sm p-1 rounded"> <p className="text-gray-600 text-sm font-semibold ">+12% from last month</p></span>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-start w-60 h-40 bg-white shadow-lg rounded-3xl border-2 border-amber-500 card">
                    <div className="flex flex-row w-full items-center justify-start gap-2 pt-7 pl-5">
                        <span className="p-1.5 border-0 bg-indigo-200  rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4F46E5"><path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-117.5-77.5Q700-455 700-480t-17.5-42.5Q665-540 640-540t-42.5 17.5Q580-505 580-480t17.5 42.5Q615-420 640-420t42.5-17.5Z" /></svg>
                        </span>
                        <h4 className="text-left text-lg text-gray-700 font-bold">TOTAL INCOME</h4>
                    </div>
                    <div className="card-footer flex flex-col items-start justify-start text-left w-full gap-2 pt-2 pl-3">
                        <div className="flex flex-col items-start justify-start gap-2 pl-2">
                            <p className="text-lg font-semibold  text-black ps-3 pt-2 ">Rs. 1,000,000</p>
                            <span className="ml-2 bg-emerald-200 float-left text-white p-1 rounded"> <p className="text-gray-800 text-sm font-semibold ">+12% from last month</p></span>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-start w-60 h-40 bg-white shadow-lg rounded-3xl border-2 border-amber-500 card">
                    <div className="flex flex-row w-full items-center justify-start gap-2 pt-7 pl-5">
                        <span className="p-1.5 border-0 bg-indigo-200  rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4F46E5"><path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-117.5-77.5Q700-455 700-480t-17.5-42.5Q665-540 640-540t-42.5 17.5Q580-505 580-480t17.5 42.5Q615-420 640-420t42.5-17.5Z" /></svg>
                        </span>
                        <h4 className="text-left text-lg text-gray-700 font-bold">TOTAL INCOME</h4>
                    </div>
                    <div className="card-footer flex flex-col items-start justify-start text-left w-full gap-2 pt-2 pl-3">
                        <div className="flex flex-col items-start justify-start gap-2 pl-2">
                            <p className="text-lg font-semibold  text-black ps-3 pt-2 ">Rs. 1,000,000</p>
                            <span className="ml-2 bg-emerald-200 float-left text-white p-1 rounded"> <p className="text-gray-800 text-sm font-semibold ">+12% from last month</p></span>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-start w-60 h-40 bg-white shadow-lg rounded-3xl border-2 border-amber-500 card">
                    <div className="flex flex-row w-full items-center justify-start gap-2 pt-7 pl-5">
                        <span className="p-1.5 border-0 bg-indigo-200  rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4F46E5"><path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-117.5-77.5Q700-455 700-480t-17.5-42.5Q665-540 640-540t-42.5 17.5Q580-505 580-480t17.5 42.5Q615-420 640-420t42.5-17.5Z" /></svg>
                        </span>
                        <h4 className="text-left text-lg text-gray-700 font-bold">TOTAL INCOME</h4>
                    </div>
                    <div className="card-footer flex flex-col items-start justify-start text-left w-full gap-2 pt-2 pl-3">
                        <div className="flex flex-col items-start justify-start gap-2 pl-2">
                            <p className="text-lg font-semibold  text-black ps-3 pt-2 ">Rs. 1,000,000</p>
                            <span className="ml-2 bg-emerald-200 float-left text-white p-1 rounded"> <p className="text-gray-800 text-sm font-semibold ">+12% from last month</p></span>

                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-row  justify-between p-4 ">
            {/* daily orders as a chart  */}
            <div className=" mt-2 w-120 h-60  flex-1">hello</div>
            {/*    quick access*/}
            <div className="quick-action gap-3 flex flex-row flex-1 items-center justify-center ">
                <Link to="/orders" >
                <button className="flex flex-row items-center justify-center h-12 gap-2 border-2 hover:border-0 hover:ring-0 border-purple-500 bg-white min-w-60  text-purple-500 font-bold rounded-2xl  hover:bg-purple-500  hover:text-white hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 ease-in-out text-sm">Generate Quotation<DocumentTextIcon className="size-6"></DocumentTextIcon></button>
                </Link>
                
                <button className=" flex flex-row w-60 h-12 items-center justify-center  bg-indigo-500  rounded-2xl hover:bg-blue-800 font-bold hover:scale-105 transition-all duration-300 ease-in-out gap-2 text-sm text-white ">Add New Employee<PlusIcon className="size-6 "></PlusIcon ></button>
            </div>
            </div>
            
        </div >

    )
}

export default DashBoard