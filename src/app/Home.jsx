const HomeScreen = () => {
  return (
    <>
      <main className=" min-h-screen overflow-hidden w-full">
        
        <div className="relative z-10 px-2 flex min-h-screen items-center justify-center ">
          <div className="rounded-2xl bg-white/80 md:px-10 py-8 shadow-xl backdrop-blur-md border border-white text-center flex flex-col gap-5">
          
            <h1 className="text-3xl font-bold text-gray-900 ">
              Hey, I'm <span className="rounded-lg bg-purple-200 px-2">Juned Shaikh</span>
            </h1>
            <h1 className="text-3xl font-bold text-gray-900 ">
              I'm a <span className="rounded-lg bg-green-200 px-2">Software Developer,</span>
            </h1>
            <h1 className="text-3xl font-bold text-gray-900 ">
              & <span className="rounded-lg bg-orange-200 px-2">Frontend Developer</span> mastery
            </h1>
          </div>
          
        </div>
      </main>
    </>
  )
}

export default HomeScreen