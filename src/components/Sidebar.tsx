import { ReactComponent as moonIcon } from "../assets/icons/moon.svg"
import { ReactComponent as greyBoardIcon } from "../assets/icons/kanban-board.svg"
import { ReactComponent as sunIcon } from "../assets/icons/sun.svg"
import { Switch } from "./ui/switch"
import Icon from "./Icon"

const boards = ["Platform Launch", "Marketing Plan", "Roadmap"]

export default function SideBar () {
  
  return (
    <aside className="hidden min-w-[250px] w-[250px] rounded-xl bg-darkGrey text-mediumGrey text-[0.85rem] font-bold flex-col justify-between items-center py-4
      sm:h-[92vh] sm:flex sm:rounded-none ">
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

        <button className="add-board-button mt-6 w-full bg-none border-none text-mainPurple rounded-r-3xl cursor-pointer text-left pl-6 py-4 flex items-center transition-all duration-300 hover:bg-mainPurple hover:text-white">
          <Icon SvgComponent={greyBoardIcon} classname="add-board-icon w-4 h-4 mr-2" />
          + Create New Board
        </button>
      </nav>
      <div className="w-[90%] flex justify-between bg-veryDarkGrey rounded-lg align-middle gap-[0.5rem] p-3">
        <Icon SvgComponent={sunIcon} classname="w-6 h-6" />
          <Switch className="mx-4" />
        <Icon SvgComponent={moonIcon} classname="w-6 h-6" />
      </div>
    </aside>
  )
}