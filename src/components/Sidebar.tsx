import { ReactComponent as moonIcon } from "../assets/icons/moon.svg"
import { ReactComponent as greyBoardIcon } from "../assets/icons/kanban-board.svg"
import { ReactComponent as sunIcon } from "../assets/icons/sun.svg"
import { ReactComponent as eyeIcon } from "../assets/icons/eye.svg"
import { Switch } from "./ui/switch"
import Icon from "./Icon"
import { useRef } from "react"

const boards = ["Platform Launch", "Marketing Plan", "Roadmap"]

export default function SideBar () {
  const showSidebarClassname = "show-sidebar"

  const sidebarRef = useRef<HTMLElement>(null)

  function toggleDisplaySidebar () {
    if(sidebarRef.current) {

      if(sidebarRef.current.classList.contains(showSidebarClassname)) {
        sidebarRef.current.classList.remove(showSidebarClassname)
      } else {
        sidebarRef.current.classList.add(showSidebarClassname)
      }
    }
  }

  return (
    <aside ref={sidebarRef} className="hidden relative w-0 rounded-xl bg-darkGrey text-mediumGrey text-[0.85rem] font-bold flex-col justify-between items-center py-4 transition-all duration-200
      sm:h-[92vh] sm:flex sm:rounded-none">
      <nav className="absolute w-full text-start p-4 pl-0">
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

        <button className="add-board-button mt-6 w-full bg-none border-none text-mainPurple rounded-r-3xl cursor-pointer text-left pl-6 py-4 flex items-center transition-all duration-300 hover:bg-mainPurple hover:text-white">
          <Icon SvgComponent={greyBoardIcon} classname="add-board-icon w-4 h-4 mr-2" />
          + Create New Board
        </button>
      </nav>
      <div className="absolute w-[90%] mb-4 justify-between bg-veryDarkGrey rounded-lg align-middle gap-[0.5rem] p-3">
        <Icon SvgComponent={sunIcon} classname="w-6 h-6" />
          <Switch className="mx-4" />
        <Icon SvgComponent={moonIcon} classname="w-6 h-6" />
      </div>
      <button onClick={() => {toggleDisplaySidebar()}} className="display-sidebar-button absolute w-10 h-10 bottom-[36px] -right-[39px] bg-darkGrey rounded-r-3xl flex items-center pl-[6px]">
          <Icon SvgComponent={eyeIcon}  classname="eye-icon eye-icon w-6 h-6" />
      </button>
    </aside>
  )
}