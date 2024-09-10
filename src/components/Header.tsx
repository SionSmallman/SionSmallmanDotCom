import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Button } from "./ui/button";

export default function Header() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeToggleHandler = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark");
  }

  return (
    <header className="absolute top-0 h-[60px] md:h-[80px] w-full max-w-7xl flex items-center justify-center bg-transparent text-white">
        <div className="w-1/2 items-start pl-12">
            <h1 className="font-semibold tracking-tight text-3xl md:text-5xl text-sky-400">
              SS
            </h1>
        </div>
        <div className={`w-1/2 flex gap-5 text-2xl items-end justify-end pr-12 ${isDarkMode ? "text-white" : "text-black"} transition`}>
            <Button onClick={themeToggleHandler}>{isDarkMode ? <MdLightMode size={30} /> : <MdDarkMode size={30}/>}</Button>
        </div>
    </header>
  );
}