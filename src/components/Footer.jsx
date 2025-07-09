import React from 'react'
import "./components.css"
const Footer = ({ height }) => {
  return (
    <>

    <div className="overlay md:mt-30 mt-52 px-10   w-full" style={{ height: `${height}%`,position: "fixed" }}></div>

    </>
  )
}

export default Footer