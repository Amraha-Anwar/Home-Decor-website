import Image from "next/image"

function Products(){
    return(
        <>
        <main className="bg-slate-100">
          <div className="text-4xl text-black font-bold pt-11 ml-[500px]">Best Selling Products</div>
          {/* products */}
          <div className="flex justify-around">
        <Image className="mt-28 w-96 h-80" src="/images/pic1.jpg" alt="abc" width={300} height={350}/>
        <Image className="mt-28 w-96 h-80" src="/images/pic2.jpg" alt="abc"  width={300} height={350}/>
        <Image className="mt-28 w-96 h-80" src="/images/pic3.jpg" alt="abc"  width={300} height={350}/>
        </div>
        <div className="flex justify-around">
        <Image className="mt-10 w-96 h-80" src="/images/pic4.jpg" alt="abc"  width={300} height={350}/>
        <Image className="mt-10 w-96 h-80" src="/images/pic5.jpg" alt="abc"  width={300} height={350}/>
        <Image className="mt-10 w-96 h-80" src="/images/pic6.jpg" alt="abc"  width={300} height={350}/>
        </div>
        <div className="flex justify-around mb-20">
        <Image className="mt-10 w-96 h-80" src="/images/pic7.jpg" alt="abc" width={300} height={300}/>
        <Image className="mt-10 w-96 h-80" src="/images/pic8.jpg" alt="abc" width={250} height={300}/>
        <Image className="mt-10 w-96 h-80" src="/images/pic9.jpg" alt="abc" width={250} height={300}/>
        </div>
        </main>
    </>
    )
}

export default Products