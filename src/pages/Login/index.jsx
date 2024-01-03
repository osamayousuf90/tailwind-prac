import React from 'react'

const Login = () => {

    const handleLogin = () => {
        window.localStorage.setItem("token", true)
        window.location.reload()
    }

    return (
        <div className='h-screen bg-black w-full flex flex-col justify-center items-center'>
            <div className='bg-white rounded-2xl px-10 py-5 md:px-5'>
                <p className="text-center text-lg">Welcome User</p>

                <div className="grid md:grid-cols-2 grid-col-1 items-center gap-x-4 gap-y-4 mt-5">
                    <input type="text" placeholder="Enter name" className="placeholder: black-red-500 outline-none border-2 border-gray-200 px-4 py-2 focus:border-black" />

                    <input type="text" placeholder="Enter email" className="placeholder: black-red-500 outline-none border-2 border-gray-200 px-4 py-2 2 focus:border-black" />

                    {/* <input type="text" placeholder="Enter phone" className="placeholder: black-red-500 outline-none border-2 border-gray-200 px-4 py-2 2 focus:border-black" /> */}

                    {/* <input type="text" placeholder="Enter address" className="placeholder: black-red-500 outline-none border-2 border-gray-200 px-4 py-2 2 focus:border-black" /> */}
                </div>
                <button onClick={handleLogin} className="flex justify-center w-56 mx-auto items-center flex-col bg-green-400 py-2 px-2 mt-5 text-white font-semibold rounded-xl hover:bg-green-500 transition-all duration-200 ease-in-out">Login</button>
            </div>
        </div>
    )
}

export default Login