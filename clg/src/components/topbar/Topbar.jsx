import React from 'react'

const Topbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-custom-gray-1">
      <div className="flex items-center">
        <img src={`${process.env.PUBLIC_URL}/assets/icon_aesthetic.svg`} alt="Icon" />
      </div>
      <div className="flex items-center">
        <a href="https://github.com/luthfimaajid/create-kuproy"><img src={`${process.env.PUBLIC_URL}/assets/github.svg`} alt="GitHub" className="h-8 mx-4" /></a>
        <a href="https://www.youtube.com/@kuproyspg"><img src={`${process.env.PUBLIC_URL}/assets/youtube.svg`} alt="YouTube" className="h-8 mx-4" /></a>
        <a href="https://www.instagram.com/kuproy.spg/"><img src={`${process.env.PUBLIC_URL}/assets/instagram.svg`} alt="Instagram" className="h-8 mx-4" /></a>
      </div>
    </nav> 
  )
}

export default Topbar