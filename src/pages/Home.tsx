import HomeButtonDrawer from "@/components/HomeButtonDrawer"

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-b from-[#300171] to-gray-900'>
        <h1>Siôn Smallman</h1>
        <h2 className="">Cardiff, UK</h2>
        <HomeButtonDrawer />
        <div className="absolute bottom-0 py-5">
            <h2>An actual website is coming soon...</h2>
        </div>
    </div>
  )
}
