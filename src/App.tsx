import { useEffect, useState } from "react";
import Header from "./components/main/Header";
import MainSection from "./components/main/MainSection";
import "./index.css"
import { useSelector } from "react-redux";
import { RootState } from "./appState/store";

function App() {
  //this code is for handling the dark mode state update and change in the body html element
  const { checked: darkModeState } = useSelector((state: RootState) => state.darkMode)

  if(darkModeState) document.getElementsByTagName("body")[0].classList.add("dark")
  if(!darkModeState) document.getElementsByTagName("body")[0].classList.remove("dark")

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
