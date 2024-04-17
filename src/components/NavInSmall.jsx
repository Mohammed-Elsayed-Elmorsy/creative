/* eslint-disable */
import { FaAngleRight, FaTimes } from "react-icons/fa"
import Circles from './Circles'
const NavInSmall = ({ navLinks, Link, active, activatelink, showMenu, setShowMenu }) => {
    return (
        <nav style={{ backgroundColor: ' rgb(14, 14, 14,0.4)' }}
            className={` backdrop-blur-md
            absolute right-0 flex justify-center gap-6 items-center flex-col  transition-[500ms] 
            top-0  w-full ${showMenu ? 'h-[100vh] opacity-100' : ' opacity-0 h-0'}  
            overflow-hidden z-50 bg-black md:h-0`}>
            <ul className=" flex gap-6 flex-col">
                {navLinks && navLinks.length > 0
                    ?
                    navLinks.map((link) => {
                        return (
                            <li>
                                <Link
                                    onClick={() => activatelink(link.id)}
                                    className={`flex items-center gap-1 hover:text-white ${link.id === active ? 'text-white' : ''}`}
                                    key={link.id}
                                    to={link.path}
                                >
                                    {link.id === active ? <FaAngleRight /> : null}
                                    {link.title}
                                </Link>
                            </li>
                        )
                    }) :
                    null}
            </ul>
            <div className=" flex gap-6 flex-col">
                <button onClick={() => setShowMenu(false)}>
                    <Link to={'/new-account'} className={' block w-full'}>
                        <span>Register</span>
                    </Link>
                </button>
                <button onClick={() => setShowMenu(false)}>
                    <Link to={'/login'} className={' block w-full'}>
                        <span>Sign in</span>
                    </Link>
                </button>
            </div>
            <span
                className="hover:text-white absolute top-5 right-5 cursor-pointer block p-1"
                onClick={() => setShowMenu(false)}>
                <FaTimes size={22} />
            </span>
            {/* <Circles /> */}
        </nav>
    )
}

export default NavInSmall