import SideBar from "./Siderbar";

export default function MainSection () {
  return (
    <main className="kanban-main">

      <SideBar />

      <div className="empty-board">
        <p>This board is empty. Create a new column to get started.</p>
        <button className="add-column-btn">+ Add New Column</button>
      </div>
    </main>
  )
}