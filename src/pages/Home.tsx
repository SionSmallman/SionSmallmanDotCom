import Hero from "@/components/Hero"
import Header from "@/components/Header"

export default function Home() {
  return (
    <div id="layout" className="h-screen w-screen overflow-hidden bg-gradient-to-b dark:from-[#300171] from-[#ffffff] to-gray-900 transition">
      <div className="m-auto max-w-7xl h-full">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
