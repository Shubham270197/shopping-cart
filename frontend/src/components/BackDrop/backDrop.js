// import React from 'react'
import './backDrop.css'

const Backdrop = ({ show, click }) => {
    return (
        show && <div className="backDrop" onClick={click}></div>
    )
}

export default Backdrop;