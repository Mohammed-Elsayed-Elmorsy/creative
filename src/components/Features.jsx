import { FaAngleRight } from "react-icons/fa"
import { feataures } from "../utils/data"
import { image } from '../assets'
const Features = () => {
    return (
        <div className="p-10">
            <h2 className=" text-[45px] text-center mt-[100px] mb-[50px]   text-white ">
                Chat Smarter Not Harder with Brainwave
            </h2>
            <div className="grid-container">
                {feataures && feataures.length > 0 ? feataures.map(item => {
                    return (
                        <div key={item.id} className=" relative z-40">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.desc}</p>
                            <div className=" flex items-center justify-between">
                                {item.icon}
                                <button className=" w-fit">
                                    <span className="flex items-center gap-1 text-white">Read More <FaAngleRight /></span>
                                </button>
                            </div>
                            <img src={image} alt="" className=" object-cover hover:opacity-20 absolute w-full h-full left-0 top-0 z-[-10] opacity-0" />
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Features