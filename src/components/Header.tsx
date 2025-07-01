import logo from  "../assets/logo.png"
import plusIcon from "../assets/icons/plus.svg"

export default function Header () {
  return (
    <header className="flex justify-between items-center bg-[#2b2c37] p-4 text-white border-b border-[#3e3f4b]">
      <div className="flex items-center gap-1">
        <img src={logo} alt="App logo" className="w-8 h-8" />
        <h1 className="text-[1.6rem] font-black hidden sm:block">Kanban</h1>
      </div>
      <div className="flex gap-[0.5rem]">
        <button className="bg-[#635fc7] text-white border-none px-[20px] py-1 rounded-[20px] cursor-pointer">
          <p className="hidden sm:block">+ Add New Task</p>
          <img src={plusIcon} alt="addicon" className="w-[12px] h-[12px] sm:hidden" />
        </button>
        <button className="bg-none border-none text-[#828fa3] text-[1.5rem] cursor-pointer">
          &#8942;
        </button>
      </div>
    </header>
  )
}