import Hero from "@/components/Hero"
import Header from "@/components/Header"

export default function Home() {
  return (
    <div id="layout" className="h-screen w-screen overflow-hidden dark:text-white text-black dark:bg-slate-900 bg-slate-300 transition duration-500 dark:transition dark:duration-500">
      <div className="m-auto max-w-7xl h-full">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
