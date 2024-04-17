/* eslint-disable */
import './btn.css'
const Btn = ({ children, primary, secondary }) => {
    if (primary) return <button className="">{children}</button>
    if (secondary) return <button className="">{children}</button>
}

export default Btn