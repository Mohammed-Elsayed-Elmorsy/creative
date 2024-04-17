import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Login = () => {
    const [showPassward, setShowPassward] = useState(false)
    return (
        <div className=" flex justify-center items-center p-3">
            <form action=""
                className=" flex flex-col gap-5 bg-my mt-[135px] relative z-40 
            w-full
            md:w-[60%] 
            lg:w-[40%] md:mx-auto p-4">
                <h2 className=" text-white text-center text-[24px] font-bold">Login</h2>
                <div className=" flex flex-col gap-5">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="EX:Mohammed@gmail.com" />
                    </div>
                    <div className=' relative'>
                        {showPassward
                            ?
                            <FaEyeSlash className=' absolute right-2 top-[60%] cursor-pointer text-blue-400'
                                onClick={() => setShowPassward(false)} />
                            :
                            <FaEye className=' absolute right-2 top-[60%] cursor-pointer text-blue-400'
                                onClick={() => setShowPassward(true)} />}
                        <label htmlFor="passward">Passward</label>
                        <input type={showPassward ? 'text' : 'password'} id="passward" placeholder="Ex:MOhaMed!12*" />
                    </div>
                    <button className="rounded-lg w-full bg-2 py-2 px-3 block ">Login</button>
                    <p className='text-center text-gray-400'>Have No Account ? <Link className=' text-sky-600' to={'/new-account'}>Register</Link></p>
                </div>

            </form>
        </div>
    )
}

export default Login