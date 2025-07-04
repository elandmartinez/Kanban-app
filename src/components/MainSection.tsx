import DialogSidebar from "./DialogSidebar";

export default function MainSection () {
  return (
    <main className="w-screen h-[92vh] bg-veryDarkGrey p-6 text-[#828fa3] flex justify-center items-center">
      {/* <DialogSidebar /> */}

      <div className="w-full text-center">
        <p className="font-bold" >This board is empty. Create a new column to get started.</p>
        <button className="interactable mt-4 bg-mainPurple text-white border-none px-4 py-2 rounded-[20px] cursor-pointer hover:bg-mainPurpleHover">
          + Add New Column
        </button>
      </div>
    </main>
  )
}