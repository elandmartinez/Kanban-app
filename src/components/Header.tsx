import { Dialog, DialogTrigger, DialogContent, DialogOverlay } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"

import DialogSidebar from "./DialogSidebar"
import logo from  "../assets/logo.png"
import Icon from "./Icon"
import {ReactComponent as dotsIcon} from "../assets/icons/dots.svg"
import {ReactComponent as plusIcon} from "../assets/icons/plus.svg"

interface HeaderProps {
  isUnderSmScreen: boolean
}

export default function Header ({ isUnderSmScreen }: HeaderProps) {
  return (
    <header className="flex justify-between h-[10vh] items-center bg-background px-4 text-mainTextColor border-b border-linesColor">
      <Dialog>
      <DialogOverlay className="w-screen h-screen fixed inset-0 bg-checkInputBg" />

        {/* minus sm screen sizes header logo */}
        <DialogTrigger asChild>

            <button className="interactable flex items-center gap-1 h-full sm:hidden">
              <img src={logo} alt="App logo" className="w-8 h-8" />
            </button>

        </DialogTrigger>

        
        {/* plus sm screen sizes header logo */}
        <div className="hidden sm:flex items-center gap-1 h-full border-r-[1px] border-linesColor w-[234px]">
          <button className="hover:cursor-default" >
            <img src={logo} alt="App logo" className="w-8 h-8" />
          </button>
          <h1 className="text-[1.6rem] font-black block">Kanban</h1>
        </div>

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
            <DialogContent aria-describedby="Menu modal" className="border-0 w-[85%] max-w-[350px] h-[400px] p-0 bg-background rounded-xl text-secondaryTextColor text-[0.85rem] font-bold py-6">
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