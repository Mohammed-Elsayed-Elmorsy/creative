import { Link } from 'react-router-dom'
import { navLinks } from '../utils/data'
import { whiteLogo } from '../assets'
import Nav from './Nav'
import Btn from './Btn'
import { useState } from 'react'
import NavInSmall from './NavInSmall'
import { FaBars } from 'react-icons/fa'
const Header = () => {
    const [active, setActive] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const activatelink = (id) => {
        setActive(id)
        setShowMenu(false)
    }
    return (
        <header
            className='p-3 text-gray-300 flex justify-between items-center mmmm
             absolute z-50 top-0 left-0 w-full h-[90px]  border-gray-700'>
            <Link
                to={'/'}
                className='w-[170px] lg:w-[300px]'>
                <img className='w-full' src={whiteLogo} alt="logo" />
            </Link>
            <Nav
                navLinks={navLinks}
                Link={Link}
                active={active}
                activatelink={(id) => activatelink(id)}
            />
            <NavInSmall
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                navLinks={navLinks}
                Link={Link}
                active={active}
                activatelink={(id) => activatelink(id)} />
            <div className=' hidden  gap-3 md:flex'>
                <Btn secondary={true}>
                    <Link to={'/new-account'} className=' block w-full'>
                        <span>
                            Register
                        </span>
                    </Link>
                </Btn>
                <Btn primary={true}>
                    <Link to={'/login'} className=' block w-full'>
                        <span>
                            Sign in
                        </span>
                    </Link>
                </Btn>
            </div>
            <span
                onClick={() => setShowMenu(!showMenu)}
                className='md:hidden cursor-pointer hover:text-white'>
                <FaBars size={22} />
            </span>
        </header>
    )
}

export default Header