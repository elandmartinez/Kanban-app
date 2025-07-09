import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import "./index.css"

function App() {
  //insert and observer here that detects when screen is thinner than sm breakpoint so DiaologSidebar mounts
  const minusSmScreenSize = "(max-width: 640px)"
  const [isUnderSmScreen, setIsUnderSmScreen] = useState(() => window.matchMedia(minusSmScreenSize).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(minusSmScreenSize)

    const mediaQueryListener = (event: MediaQueryListEvent) => {
      setIsUnderSmScreen(event.matches)
    }

    mediaQueryList.addEventListener("change", mediaQueryListener)

    return () => {
      mediaQueryList.removeEventListener("change", mediaQueryListener)
    }
  }, [])

  return (
    <div className="App h-screen">
      <Header isUnderSmScreen={isUnderSmScreen} />
      <MainSection isUnderSmScreen={isUnderSmScreen} />
    </div>
  );
}

export default App;
