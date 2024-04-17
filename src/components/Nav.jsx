/* eslint-disable */
const Nav = ({ navLinks, Link, active, activatelink }) => {
    return (
        <nav className=" hidden md:flex">
            <ul className=" flex lg:gap-6 gap-4">
                {navLinks && navLinks.length > 0
                    ?
                    navLinks.map((link) => {
                        return (
                            <li>
                                <Link
                                    onClick={() => activatelink(link.id)}
                                    className={` hover:text-white ${link.id === active ? 'text-white' : ''}`}
                                    key={link.id}
                                    to={link.path}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )
                    }) :
                    null}
            </ul>
        </nav>
    )
}

export default Nav