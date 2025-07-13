import Sidebar from "./Sidebar";
import Board from "./Board";

interface mainSectionProps {
  isUnderSmScreen: boolean
}

export default function MainSection ({ isUnderSmScreen }: mainSectionProps ) {
  return (
    <main className="w-screen relative h-[90vh] text-secondaryTextColor bg-background flex justify-end">
      { !isUnderSmScreen ? <Sidebar /> : null }
      <Board />
    </main>
  )
}