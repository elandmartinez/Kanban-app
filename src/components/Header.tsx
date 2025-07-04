import logo from  "../assets/logo.png"
import plusIcon from "../assets/icons/plus.svg"
import dotsIcon from "../assets/icons/dots.svg"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./ui/dialog"
import DialogSidebar from "./DialogSidebar"

export default function Header () {
  return (
    <header className="flex justify-between items-center bg-[#2b2c37] p-4 text-white border-b border-[#3e3f4b]">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center gap-1 hover:cursor-pointer">
            <button>
              <img src={logo} alt="App logo" className="w-8 h-8" />
            </button>
            <h1 className="text-[1.6rem] font-black hidden sm:block">Kanban</h1>
          </div>
        </DialogTrigger>
        <div className="flex gap-[0.5rem]">
          <button className="
            bg-mainPurple text-white border-none px-4 py-2 flex items-center rounded-[20px] cursor-pointer transition-all duration-200
            hover:bg-mainPurpleHover hover:scale-105"
          >
            <img src={plusIcon} alt="Add icon" className="w-[12px] h-[12px] sm:mr-2" />
            <p className="hidden sm:block">
              Add New Task
            </p>
          </button>
          <button className="p-1 rounded-lg cursor-pointer hover:bg-white/80">
            <img src={dotsIcon} alt="Menu dots icon" className="w-4 h-8" />
          </button>
        </div>

        <DialogContent className="border-0 w-[250px] h-[450px] p-0 rounded-xl bg-darkGrey text-mediumGrey text-[0.85rem] font-bold flex flex-col justify-between items-center py-4">
          <DialogSidebar />
        </DialogContent>

      </Dialog>
    </header>
  )
}