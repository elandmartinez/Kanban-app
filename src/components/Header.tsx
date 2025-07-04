import logo from  "../assets/logo.png"
import {ReactComponent as plusIcon} from "../assets/icons/plus.svg"
import {ReactComponent as dotsIcon} from "../assets/icons/dots.svg"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./ui/dialog"
import DialogSidebar from "./DialogSidebar"
import Icon from "./Icon"

export default function Header () {
  return (
    <header className="flex justify-between items-center bg-darkGrey p-4 text-white border-b border-[#3e3f4b]">
      <Dialog>

        <DialogTrigger asChild>

          <div className="interactable flex items-center gap-1">
            <button>
              <img src={logo} alt="App logo" className="w-8 h-8" />
            </button>
            <h1 className="text-[1.6rem] font-black hidden sm:block">Kanban</h1>
          </div>

        </DialogTrigger>

        <div className="flex items-center gap-[0.5rem]">
          <button className="
            interactable bg-mainPurple h-[28px] text-white border-none px-4 flex items-center rounded-[20px] cursor-pointer
            hover:bg-mainPurpleHover hover:text-white"
          >
            <Icon SvgComponent={plusIcon} classname="w-[12px] h-[12px] sm:mr-2" />
            <p className="hidden sm:block">
              Add New Task
            </p>
          </button>
          <button className="interactable p-2 rounded-xl cursor-pointer hover:bg-bgWhiteHover">
            <Icon SvgComponent={dotsIcon} classname="w-4 h-4" />
          </button>
        </div>

        <DialogContent className="border-0 w-[85%] max-w-[350px] h-[450px] p-0 rounded-xl bg-darkGrey text-mediumGrey text-[0.85rem] font-bold flex flex-col justify-between items-center py-4">
          <DialogSidebar />
        </DialogContent>

      </Dialog>
    </header>
  )
}