/* import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../@/components/ui/dialog"
import moonIcon from "../assets/icons/crescent-moon.png"
import greyBoardIcon from "../assets/icons/kanban-board-grey.svg"
import whiteBoardIcon from "../assets/icons/kanban-board-white.svg"
import purpleBoardIcon from "../assets/icons/kanban-board-purple.svg"

const boards = ["Platforma Launch", "Marketing Plan", "Roadmap"]

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Open Dialog</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <aside className="min-w-[250px] w-[250px] h-[320px] rounded-xl absolute bg-darkGrey text-mediumGrey text-[0.85rem] font-bold flex flex-col justify-between p-4 pl-0
          md:h-full">
          <nav className="w-full text-start">
            <h3 className="text-[0.75rem] tracking-wider font-bold mb-4 pl-6">
              ALL BOARDS (3)
            </h3>

            <ul className="list-none p-0 m-0">
              {boards.map((board, index) => {
                return (
                  <li key={index} className="flex rounded-[5px] p-2 pl-6 mt-2 cursor-pointer content-start items-center transition-all duration-300 board rounded-r-3xl hover:text-white hover:bg-mainPurple active:scale-[1.05]">
                    <img src={greyBoardIcon} alt="boardIcon" className="w-4 h-4 mr-2" />
                    {board}
                  </li>
                )
              })}
            </ul>

            <button className="mt-4 w-full bg-none border-none text-[#635fc7] cursor-pointer text-left pl-6 py-2 flex items-center transition-all duration-300">
              <img src={purpleBoardIcon} alt="boardIcon" className="w-4 h-4 mr-2 purple-board-icon" />
              + Create New Board
            </button>
          </nav>
          <div className="flex flex-col gap-[0.5rem] pl-4">
            <img src={moonIcon} className="w-6 h-6" alt="nocturne icon" />
            <button className="hide-sidebar-btn">
              Hide Sidebar
            </button>
          </div>
        </aside>
      </DialogContent>
    </Dialog>
  )
}
 */