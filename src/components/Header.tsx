import logo from  "../assets/logo.png"
import {ReactComponent as plusIcon} from "../assets/icons/plus.svg"
import {ReactComponent as dotsIcon} from "../assets/icons/dots.svg"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog"
import DialogSidebar from "./DialogSidebar"
import Icon from "./Icon"
import { DialogTitle } from "@radix-ui/react-dialog"

interface HeaderProps {
  isUnderSmScreen: boolean
}

export default function Header ({ isUnderSmScreen }: HeaderProps) {
  return (
    <header className="flex justify-between h-[10vh] items-center bg-background px-4 text-mainTextColor border-b border-linesColor">
      <Dialog>

        <DialogTrigger asChild>

          <div className="interactable flex items-center gap-1 h-full sm:border-r-[1px] sm:border-linesColor sm:w-[234px]">
            <button>
              <img src={logo} alt="App logo" className="w-8 h-8" />
            </button>
            <h1 className="text-[1.6rem] font-black hidden sm:block hover:cursor-pointer">Kanban</h1>
          </div>

        </DialogTrigger>

        <div className="flex items-center gap-[0.5rem]">
          <button className="
            interactable bg-mainPurple h-[28px] text-white border-none px-4 flex items-center rounded-[20px] cursor-pointer
            hover:bg-mainPurpleLight hover:text-white sm:py-1 sm:h-[36px]"
          >
            <Icon SvgComponent={plusIcon} classname="w-[12px] h-[12px] sm:mr-2" />
            <p className="hidden sm:block">
              Add New Task
            </p>
          </button>
          <button className="interactable p-2 rounded-xl cursor-pointer hover:bg-bgHoverShadow">
            <Icon SvgComponent={dotsIcon} classname="w-4 h-4" />
          </button>
        </div>

        {
          isUnderSmScreen ?
          <>
            <DialogContent className="border-0 w-[85%] max-w-[350px] h-[400px] p-0 bg-background rounded-xl text-secondaryTextColor text-[0.85rem] font-bold py-6">
              <DialogTitle>
              <p className="text-[0.75rem] h-[20px] tracking-wider font-bold mt-4 pl-6">
                ALL BOARDS (3)
              </p>
            </DialogTitle>
              <DialogSidebar />
            </DialogContent>
          </>
          :
          null
        }
      </Dialog>
    </header>
  )
}