import logo from  "../assets/logo.png"

export default function Header () {
  return (
    <header className="flex justify-between items-center bg-[#2b2c37] p-4 text-white border-b border-[#3e3f4b]">
      <div className="flex items-center gap-1">
        <img src={logo} alt="App logo" className="w-8 h-8" />
        <h1 className="text-[1.6rem] font-black">Kanban</h1>
      </div>
      <div className="flex gap-[0.5rem]">
        <button className="bg-[#635fc7] text-white border-none px-4 py-2 rounded-[20px] cursor-pointer">
          + Add New Task
        </button>
        <button className="bg-none border-none text-[#828fa3] text-[1.5rem] cursor-pointer">
          &#8942;
        </button>
      </div>
    </header>
  )
}