import { useState } from 'react'
import swal from 'sweetalert2'
import axios from 'axios'
//import withReactContent from 'sweetalert2-react-content'

 function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
  

    const handleSubmit = async (e) => {
       
        e.preventDefault();
        const formData = new FormData(e.target);
            const username = formData.get("username");
            const password = formData.get("password");
          try {
        const submitdata = await axios.post("http://localhost:8080/api/login",{
           username: username,
           password: password
        });
        console.log(submitdata.data);
                
            }catch (error) {
                console.error("Error during login:", error);
                swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'An error occurred during login. Please try again.',
                });
            }
        
      
    };

    return (

        <div className="min-w-full flex flex-row items-center justify-center h-screen  ">

            <div className="flex flex-col gap-2  items-center justify-center w-1/2 h-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-900 ">
                <div className="flex flex-col  items-center justify-center w-2/3 h-full ">
                    <span className="svg-icon svg-icon-2hx svg-icon-primary mb-24">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFFF55"><path d="M658-648v-132H302v132h-60v-192h476v192h-60Zm-518 60h680-680Zm599 95q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm-81 313v-192H302v192h356Zm60 60H242v-176H80v-246q0-45.05 30.5-75.53Q141-648 186-648h588q45.05 0 75.53 30.47Q880-587.05 880-542v246H718v176Zm102-236v-186.21Q820-562 806.78-575q-13.23-13-32.78-13H186q-19.55 0-32.77 13.22Q140-561.55 140-542v186h102v-76h476v76h102Z" /></svg>
                    </span>
                    <h1 className="tracking-wider pb-5 text-5xl font-bold text-amber-50 ">
                        Thisara Printers
                    </h1>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-18">
                        MANAGEMENT SYSTEM
                    </h3 >
                    <h6 className="text-gray-400 max-w-3xl mx-auto mt-12 text-center">Streamline your printing business with our comprehensive management solution. Manage employees, orders, inventory, and more — all in one place.</h6>
                </div>
            </div>

            <div className="flex flex-col text-center items-center justify-center w-1/2 h-screen bg-transparent">
                <div className="flex flex-col  items-center justify-center w-3/5 h-4/6 backdrop:blur-lg rounded-lg  shadow-lg">
                    <div className="flex flex-col gap-8  items-center justify-center w-4/5 h-5/6">
                       <div className="w-full max-w-md">
                        <h2 className="text-3xl font-extrabold text-left">
                           WELCOME BACK !
                        </h2>
                        <p className="text-left text-md text-gray-500">Sign in to your account to continue</p>
                        </div>
                        <form className="w-full pt-12" onSubmit={handleSubmit}>
                        <div className="w-full max-w-md mb-4">
                            
                            <label for="username" className="block mb-2 text-left text-lg font-medium text-black">
                                Username
                            </label>

                            <input
                                type="text"
                                value={userName}
                                name="username"
                                onChange={(e)=>{
                                    setUserName(e.target.value);}}
                                onBlur={() => setEmailTouched(true)}
                                placeholder="Enter your username"
                                className="w-full h-10 px-4 py-3 rounded-lg border-2 border-purple-500 focus:border-none text-black placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-purple-800"
                            />
                            <p className="text-red-500 text-sm mt-1 text-left">{emailTouched && userName.trim() === "" ? "Username is required" : ""}</p>
                        </div>
                        <div className="w-full max-w-md">
                            <label for="password" className="block mb-2 text-left text-lg font-medium text-gray-800">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                name="password"
                                onChange={(e)=>{
                                    setPassword(e.target.value);}}
                                onBlur={() => setPasswordTouched(true)}
                                placeholder="Enter your password"
                                className="w-full h-10 px-4 py-3 border-2 border-purple-500 rounded-lg text-black placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-none"
                            />
                            <p className="text-red-500 text-sm mt-1 text-left">{passwordTouched && (password.trim() === "" || password.length < 8) ? "Password is required" : ""}</p>
                        </div>


                        <button onClick={handleSubmit} className="max-w-md mt-5 bg-sky-500 hover:bg-sky-700 text-lg hover:-translate-y-0.5 w-full  text-white font-bold py-2 px-4 rounded-md">
                            Sign In
                        </button>
                    </form>
                    </div></div></div>

        </div>


    )
}

export default Login