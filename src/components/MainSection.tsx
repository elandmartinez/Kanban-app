import Sidebar from "./Sidebar";

interface mainSectionProps {
  isUnderSmScreen: boolean
}

export default function MainSection ({ isUnderSmScreen }: mainSectionProps ) {

  return (
    <main className="w-screen relative h-[90vh] bg-veryDarkGrey text-mediumGrey flex justify-end">

      {
        isUnderSmScreen ?
        null
        :
        <Sidebar />
      }


      <div className="main-section bg-linesLight w-[100%] text-center p-6 flex flex-col justify-center items-center transition-all duration-300">
        <p className="font-bold" >This board is empty. Create a new column to get started.</p>
        <button className="interactable mt-4 bg-mainPurple text-white border-none px-4 py-2 rounded-[20px] cursor-pointer hover:bg-mainPurpleHover">
          + Add New Column
        </button>
      </div>

    </main>
  )
}