import moonIcon from "../assets/icons/moon.svg"
import sunIcon from "../assets/icons/sun.svg"
import {ReactComponent as greyBoardIcon} from "../assets/icons/kanban-board-grey.svg"
import whiteBoardIcon from "../assets/icons/kanban-board-white.svg"
import purpleBoardIcon from "../assets/icons/kanban-board-purple.svg"
import { Switch } from "./ui/switch"
import Icon from "./Icon"

const boards = ["Platform Launch", "Marketing Plan", "Roadmap"]

export default function DialogSidebar () {
  
  return (
    <aside className="w-full h-full flex flex-col justify-between items-center py-4">
      <nav className="w-full text-start p-4 pl-0">
        <h3 className="text-[0.75rem] tracking-wider font-bold mb-4 pl-6">
          ALL BOARDS (3)
        </h3>

        <ul className="list-none p-0 m-0">
          {boards.map((board, index) => {
            return (
              <li key={index} className="flex rounded-r-xl pl-6 py-3 mt-2 cursor-pointer content-start items-center transition-all duration-300 board hover:bg-mainPurpleHover">
                {/* <img src={greyBoardIcon} alt="boardIcon" className="w-4 h-4 mr-2" /> */}
                <Icon SvgComponent={greyBoardIcon} className="w-4 h-4 mr-2" />
                {board}
              </li>
            )
          })}
        </ul>

        <button className="w-full bg-none border-none text-mainPurple cursor-pointer text-left pl-6 py-2 flex items-center transition-all duration-300">
          <img src={purpleBoardIcon} alt="boardIcon" className="w-4 h-4 mr-2 purple-board-icon" />
          + Create New Board
        </button>
      </nav>
      <div className="w-[90%] flex justify-between bg-veryDarkGrey rounded-lg align-middle gap-[0.5rem] p-3">
        <img src={sunIcon} className="w-6 h-6" alt="Daylight icon" />
          <Switch className="mx-4" />
        <img src={moonIcon} className="w-6 h-6" alt="nocturne icon" />
      </div>
    </aside>
  )
}