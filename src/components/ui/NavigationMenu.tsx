"use client"

import CloseBtn from "./CloseBtn"
import MenuList from "./MenuList"

const NavigationMenu = () => {
  return (
    <nav id="navigation-menu" className="bg-black w-0 h-full fixed top-0 overflow-hidden transition-all ease-in-out duration-200">
      <CloseBtn/>
      <div className="h-10 w-full bg-white bg-opacity-20 mt-12"></div>
      <MenuList/>
    </nav>
  )
}

export default NavigationMenu