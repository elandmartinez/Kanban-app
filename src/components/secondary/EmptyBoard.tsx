export default function EmptyBoard
 () {

  return (
    <>
      <p className="font-bold" >This board is empty. Create a new column to get started.</p>
      <button className="interactable mt-4 bg-mainPurple text-white border-none px-4 py-2 rounded-[20px] cursor-pointer hover:bg-mainPurpleLight">
        + Add New Column
      </button>
    </>
  )
}