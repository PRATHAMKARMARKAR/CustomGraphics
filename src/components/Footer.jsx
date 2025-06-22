import React from 'react'
import "./components.css"
const Footer = ({ height,margin }) => {
  return (
    <>
    <div className="overlay   w-full" style={{ height: `${height}%`, marginTop: `${margin}px` }}></div>
    
    </>
  )
}

export default Footer