import SideBar from "./Siderbar";

export default function MainSection () {
  return (
    <main className="w-screen h-[92vh] relative bg-[#20212c] text-[#828fa3] flex justify-center items-center">
      <SideBar />

      <div className="w-full text-center">
        <p>This board is empty. Create a new column to get started.</p>
        <button className="mt-4 bg-[#635fc7] text-white border-none px-4 py-2 rounded-[20px] cursor-pointer">
          + Add New Column
        </button>
      </div>
    </main>
  )
}