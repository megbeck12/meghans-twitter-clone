import React from 'react'
import "./SidebarHover.css"

function SidebarHover() {
    function changeBackgroundOnHover(t) {
        t.target.style.background = ".text-hover"
    }

  return (
    <div className='text'>
        <button onMouseOver={changeBackgroundOnHover}>Click Me</button>
    </div>
  )
}

export default SidebarHover