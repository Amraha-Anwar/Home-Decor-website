function Hero(){
    return (
    <div className="mt-0 w-full h-[750px] flex flex-col sm:flex-row justify-evenly bg-[url('/images/heropic.jpg')] bg-cover">
        <div className="basis-1/2 mr-[600px]">
          <h1 className="text-5xl text-black text-left px-16 pt-16 pb-4 font-bold">
            Transform Your Home <br/>
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500 sm:text-6xl">
              into a Haven of Style
            </span>
          </h1>
        </div>
      </div>
    )
}
export default Hero
