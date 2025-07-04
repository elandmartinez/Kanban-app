import moonIcon from "../assets/icons/moon.svg"
import sunIcon from "../assets/icons/sun.svg"
import {ReactComponent as greyBoardIcon} from "../assets/icons/kanban-board.svg"
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
              <li key={index} className="board-item flex max-w-[300px] rounded-r-3xl pl-6 py-4 cursor-pointer content-start items-center transition-all duration-300 board hover:bg-mainPurple hover:text-white">
                {/* <img src={greyBoardIcon} alt="boardIcon" className="w-4 h-4 mr-2" /> */}
                <Icon SvgComponent={greyBoardIcon} classname="board-icon w-4 h-4 mr-2" />
                {board}
              </li>
            )
          })}
        </ul>

        <button className="add-board-button w-full rounded-r-3xl max-w-[300px] bg-none border-none text-mainPurple cursor-pointer text-left pl-6 py-4 mt-4 flex items-center transition-all duration-300 hover:bg-mainPurple hover:text-white">
          <Icon SvgComponent={greyBoardIcon} classname="add-board-icon w-4 h-4 mr-2 purple-board-icon" />
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