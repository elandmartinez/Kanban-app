import Sidebar from "./Sidebar";

export default function MainSection () {
  return (
    <main className="w-screen relative h-[92vh] bg-veryDarkGrey text-mediumGrey flex justify-end">

      <Sidebar />

      <div className="main-section right-0 bottom-0 bg-veryDarkGrey w-[100%] text-center p-6 flex flex-col justify-center items-center transition-all duration-300">
        <p className="font-bold" >This board is empty. Create a new column to get started.</p>
        <button className="interactable mt-4 bg-mainPurple text-white border-none px-4 py-2 rounded-[20px] cursor-pointer hover:bg-mainPurpleHover">
          + Add New Column
        </button>
      </div>

    </main>
  )
}