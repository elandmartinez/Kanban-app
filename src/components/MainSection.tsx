import SideBar from "./Sidebar";

export default function MainSection () {
  return (
    <main className="w-screen h-[92vh] bg-veryDarkGrey text-[#828fa3] flex">
      <SideBar />

      <div className="w-full text-center p-6 flex flex-col justify-center items-center transition-all duration-200">
        <p className="font-bold" >This board is empty. Create a new column to get started.</p>
        <button className="interactable mt-4 bg-mainPurple text-white border-none px-4 py-2 rounded-[20px] cursor-pointer hover:bg-mainPurpleHover">
          + Add New Column
        </button>
      </div>
    </main>
  )
}