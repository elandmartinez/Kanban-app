import logo from  "../assets/logo.png"
import {ReactComponent as plusIcon} from "../assets/icons/plus.svg"
import {ReactComponent as dotsIcon} from "../assets/icons/dots.svg"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog"
import DialogSidebar from "./DialogSidebar"
import Icon from "./Icon"

interface HeaderProps {
  isUnderSmScreen: boolean
}

export default function Header ({ isUnderSmScreen }: HeaderProps) {
  return (
    <header className="flex justify-between h-[10vh] items-center bg-darkGrey px-4 text-white border-b border-linesDark">
      <Dialog>

        <DialogTrigger asChild>

          <div className="interactable flex items-center gap-1 w-[234px] h-full border-r-[1px] border-linesDark">
            <button>
              <img src={logo} alt="App logo" className="w-8 h-8" />
            </button>
            <h1 className="text-[1.6rem] font-black hidden sm:block hover:cursor-pointer">Kanban</h1>
          </div>

        </DialogTrigger>

        <div className="flex items-center gap-[0.5rem]">
          <button className="
            interactable bg-mainPurple h-[28px] text-white border-none px-4 flex items-center rounded-[20px] cursor-pointer
            hover:bg-mainPurpleHover hover:text-white sm:py-1 sm:h-[36px]"
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

        {
          isUnderSmScreen ?
          (<DialogContent className="border-0 w-[85%] max-w-[350px] h-[450px] p-0 rounded-xl bg-darkGrey text-mediumGrey text-[0.85rem] font-bold flex flex-col justify-between items-center py-4">
            <DialogSidebar />
          </DialogContent>) :
          null
        }
      </Dialog>
    </header>
  )
}