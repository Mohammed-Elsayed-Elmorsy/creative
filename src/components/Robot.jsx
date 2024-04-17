import { FaEnvelope, FaHome, FaIdCard, FaPlusSquare, FaSearch } from 'react-icons/fa'
import { robot } from '../assets'

const Robot = () => {

    return (
        <div className='relative md:w-[55%]  w-full  p-[1px] mx-auto robot'>
            <div className=' absolute top-[2px] left-[-20%]  h-[50%] bg-mine1 bg-mine'></div>
            <div className=' absolute top-[7%]  left-[-20%] h-[1px] bg-mine2 '></div>
            <div className=' absolute top-[13%] left-[-20%] h-[1px] bg-mine2 '></div>
            <div className=' absolute top-[19%] left-[-20%] h-[1px] bg-mine2 '></div>
            <div className=' absolute top-[25%] left-[-20%] h-[1px] bg-mine2 '></div>
            <div className=' absolute top-[50.2%] left-[-20%] h-[1px] bg-mine2 '></div>
            <img src={robot} alt="robot" className='w-full relative z-40 object-cover h-[500px] ' />
            <div style={{ backgroundColor: 'rgb(20,21,40)' }}
                className='robot-div transition-all h-[30px] shadow-md items-center text-white absolute left-[1%] top-[50%] translate-y-[-50%] flex gap-4 z-40 p-2'>
                <FaHome />
                <FaEnvelope />
                <FaIdCard />
                <FaPlusSquare />
            </div>
            <div style={{ backgroundColor: 'rgb(20,21,40)' }}
                className='robot-div2 w-[30px]  shadow-md items-center text-white absolute right-[4px] top-[4px] flex-col  flex gap-4 z-40 p-2'>
                <FaSearch />
                <FaEnvelope />
                <FaIdCard />
                <FaPlusSquare />
            </div>
            <div style={{ backgroundColor: 'rgb(20,21,50,0.8)' }} className=' 
            absolute text-white text-center flex items-center gap-2 justify-center p-1 bottom-[30px] z-[40] rounded-full  w-[80%] left-[50%] translate-x-[-50%] '>
                <span className="loader"></span>
                Ai is Generating
            </div>
            {/* <p className=' text-black text-center'>Helping people Making good content at </p> */}
        </div>
    )
}

export default Robot