import { ReactComponent as moonIcon } from "../assets/icons/moon.svg"
import { ReactComponent as greyBoardIcon } from "../assets/icons/kanban-board.svg"
import { ReactComponent as sunIcon } from "../assets/icons/sun.svg"
import { ReactComponent as eyeIcon } from "../assets/icons/eye.svg"
import { Switch } from "./ui/switch"
import Icon from "./Icon"
import { useEffect, useRef, useState } from "react"

const boards = ["Platform Launch", "Marketing Plan", "Roadmap"]

export default function Sidebar () {
  const showSidebarClassname = "show-sidebar"
  const [showSidebar, setShowSidebar] = useState(false)

  const sidebarRef = useRef<HTMLElement>(null)

  function toggleDisplaySidebar () {
    if(sidebarRef.current) {

      const shouldShowSidebar = !showSidebar

      if(shouldShowSidebar) {
        sidebarRef.current.classList.add(showSidebarClassname)
        setShowSidebar(true)
      } else {
        sidebarRef.current.classList.remove(showSidebarClassname)
      }

      setShowSidebar(shouldShowSidebar)
    }
  }

  /* useEffect(() => {
    setShowSidebar(false)
  }, []) */

  return (
    <aside ref={sidebarRef} className="min-w-[250px] w-[250px] border-r-[1px] h-[90.1vh] border-t-0 border-linesDark absolute -left-[250px] bottom-0 rounded-xl bg-darkGrey text-mediumGrey text-[0.85rem] font-bold flex-col justify-between items-center py-4 transition-all duration-300
      sm:flex sm:rounded-none">
      <nav className="w-full text-start p-4 pl-0">
        <h3 className="text-[0.82rem] tracking-[0.11em] font-bold mb-4 pl-6">
          ALL BOARDS (3)
        </h3>

        <ul className="list-none p-0 m-0">
          {boards.map((board, index) => {
            return (
              <li key={index} className="board-item flex rounded-[5px] max-w-[210px] p-4 pl-6 mt-2 cursor-pointer content-start items-center transition-all duration-300 board rounded-r-3xl hover:text-white hover:bg-mainPurple active:scale-[1.05]">
                <Icon SvgComponent={greyBoardIcon} classname="board-icon w-4 h-4 mr-2" />
                {board}
              </li>
            )
          })}
        </ul>

        <button className="add-board-button mt-6 w-full max-w-[210px] bg-none border-none text-mainPurple rounded-r-3xl cursor-pointer text-left pl-6 py-4 flex items-center transition-all duration-300 hover:bg-mainPurple hover:text-white">
          <Icon SvgComponent={greyBoardIcon} classname="add-board-icon w-4 h-4 mr-2" />
          + Create New Board
        </button>
      </nav>
      <div className="w-[80%] mb-4 flex justify-between bg-veryDarkGrey rounded-lg align-middle gap-[0.5rem] p-3">
        <Icon SvgComponent={sunIcon} classname="w-6 h-6" />
          <Switch className="mx-4" />
        <Icon SvgComponent={moonIcon} classname="w-6 h-6" />
      </div>
      <button onClick={() => {toggleDisplaySidebar()}} className="display-sidebar-button border-[1px] border-l-0 border-linesDark absolute w-10 h-10 bottom-[36px] left-[249px] bg-darkGrey rounded-r-3xl flex items-center pl-[6px] transition-all duration-300">
          <Icon SvgComponent={eyeIcon}  classname="eye-icon eye-icon w-6 h-6" />
      </button>
    </aside>
  )
}