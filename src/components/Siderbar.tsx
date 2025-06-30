import moonIcon from "../assets/icons/crescent-moon.png"

export default function SideBar () {
  const listItemActiveStyles = "bg-purple text-white"
  
  return (
    <aside className="w-[250px] h-full bg-[#2b2c37] text-[#828fa3] flex flex-col justify-between p-4 pl-0">
      <nav className="w-full text-start">
        <h3 className="text-[0.85rem] mb-4 pl-6">
          ALL BOARDS (3)
        </h3>
        <ul className="list-none p-0 m-0">
          <li className="flex rounded-[5px] pl-6 cursor-pointer content-start transition-all duration-300 board">
            Platform Launch
          </li>
          <li className="flex rounded-[5px] pl-6 cursor-pointer content-start transition-all duration-300 board">
            Marketing Plan
            </li>
            <li className="flex rounded-[5px] pl-6 cursor-pointer content-start transition-all duration-300 board">
            Roadmap
            </li>
        </ul>
        <button className="mt-4 w-full bg-none border-none text-[#635fc7] cursor-pointer text-left pl-6 py-2">
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
  )
}