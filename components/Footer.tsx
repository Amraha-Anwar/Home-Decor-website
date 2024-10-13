import Link from "next/link"

function Footer(){
    return ( 
    <>
    <footer className="bg-slate-900 py-20">
        <div className="container mx-auto px-2 text-white">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-8">Customer Support</h2>
                        <p className="mb-4">
                            Email:<Link href="mailto:support@havenhues.com" className="text-slate-600 hover:underline">support@havenhues.com</Link></p>
                            <p className="mb-4">Phone: +1-800-HAVEN (42836)</p>
                                <p>Working Hours: Mon-Fri | 9 AM - 6 PM</p>
                            </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Stay Connected</h2>
                            <button><img className="hover:underline" src="/images/insta.png" alt="instagram" width={50} height={50}/></button>
                            <button><img className="hover:underline" src="/images/pinterest.png" alt="pinterest" width={50} height={50}/></button>
                            <button><img className="hover:underline" src="/images/x.png" alt="twitter" width={50} height={50}/></button>
                            <button><img className="hover:underline" src="/images/facebook.png" alt="facebook" width={50} height={50}/></button>
                </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Payment Method</h2>
                                <p>Visa | DebitCard | PayPal | EasyPaisa</p>
                    </div>
                </div>
            <div className="border-t border-gray-300 mt-8 pt-4 text-center">
                <p className="text-gray-500 text-sm">
                 &copy; 2024 Haven & Hues. All rights reserved.</p>
            </div>
        </div>
    </footer>

    </> 
      
      
    )
}
export default Footer