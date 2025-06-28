export default function SideBar () {
  return (
    <aside className="kanban-sidebar">
      <h2 className="sidebar-logo">kanban</h2>
      <nav className="boards-list">
        <p>ALL BOARDS (3)</p>
        <ul>
          <li className="active">📋 Platform Launch</li>
          <li>📋 Marketing Plan</li>
          <li>📋 Roadmap</li>
        </ul>
        <button className="create-board-btn">+ Create New Board</button>
      </nav>
      <div className="sidebar-footer">
        <button className="theme-toggle">
          🌙
        </button>
        <button className="hide-sidebar-btn">
          Hide Sidebar
        </button>
      </div>
    </aside>
  )
}