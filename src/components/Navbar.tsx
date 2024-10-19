import Image from "next/image"
import Link from "next/link"

function Navbar(){
    return (
        <nav className="bg-slate-900 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link href="#" className="text-white text-3xl font-extrabold">
                        Haven & Hues
                        </Link>
                    </div>
                </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                    <Link href="/" className="text-white font-bold hover:bg-white hover:text-black rounded-lg p-2 ">Home</Link>
                    <Link href="/shop" className="text-white font-bold hover:bg-white hover:text-black rounded-lg p-2 ">Shop</Link>
                    <Link href="/about" className="text-white font-bold hover:bg-white hover:text-black rounded-lg p-2">About Us</Link>
                    <Link href="/contact" className="text-white font-bold hover:bg-white hover:text-black rounded-lg p-2">Contact</Link>
                    <div className=" pl-11 bg-slate-900 ">
                    <Image
                        src="/images/cart.png" alt="cart" width={40} height={40}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
    )
}
export default Navbar