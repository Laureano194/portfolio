import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between py-5">
        <p className="text-xl font-bold">Laureano Kronemberger</p>
        <ul className="flex gap-3">
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact Me</li>    
        </ul>
    </div>
  )
}

export default Navbar