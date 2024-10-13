function Products(){
    return(
        <>
        <main className="bg-slate-100">
          <div className="text-4xl text-black font-bold pt-11 ml-[500px]">Best Selling Products</div>
          {/* products */}
          <div className="flex justify-around">
        <img className="h-72 w-80 mt-28" src="/images/pic1.jpg" alt="Armchair and Ottoman"/>
        <img className="h-72 w-80 mt-28" src="/images/pic2.jpg" alt="abc"/>
        <img className="h-72 w-80 mt-28" src="/images/pic3.jpg" alt="abc"/>
        </div>
        <div className="flex justify-around">
        <img className="h-72 w-80 mt-10" src="/images/pic4.jpg" alt="abc"/>
        <img className="h-72 w-80 mt-10" src="/images/pic5.jpg" alt="abc"/>
        <img className="h-72 w-80 mt-10" src="/images/pic6.jpg" alt="abc"/>
        </div>
        <div className="flex justify-around mb-20">
        <img className="h-72 w-80 mt-10" src="/images/pic7.jpg" alt="abc"/>
        <img className="h-72 w-80 mt-10" src="/images/pic8.jpg" alt="abc"/>
        <img className="h-72 w-80 mt-10" src="/images/pic9.jpg" alt="abc"/>
        </div>
        </main>
    </>
    )
}

export default Products