export default function Header () {
  return (
    <header className="kanban-header">
      <div className="header-left">
        <button className="menu-icon">
          &#9776;
        </button>
        <h1 className="board-title">Platform Launch</h1>
      </div>
      <div className="header-right">
        <button className="add-task-btn">+ Add New Task</button>
        <button className="more-options-btn">&#8942;</button>
      </div>
    </header>
  )
}