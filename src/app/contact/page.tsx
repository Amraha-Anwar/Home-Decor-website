import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"

function  ContactPage(){
    return (
        <>
    {/* Navbar section */}
       <Navbar/>
       
    <div className="bg-slate-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      {/* Contact Form */}
      <form action="/submit-contact" method="POST" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Phone (optional)</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="col-span-1">
            <label htmlFor="message" className="block text-sm font-medium"> Message</label>
            <textarea
             id="message" name="message" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" flex-row="4"></textarea>
          </div>
        </div>
        <button className="mt-4 bg-slate-900 text-white rounded-md px-4 py-2">Send Message</button>
      </form>

      {/* Contact Information */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p> Email:{" "} <a href="mailto:support@havenhues.com" className="text-blue-500"> support@havenhues.com</a>
        </p>
        <p>Phone:{" "} <a href="tel:+1800HAVEN" className="text-blue-500"> +1-800-HAVEN (42836) </a>
        </p>
        <p>Business Hours: Mon-Fri | 9 AM - 6 PM</p>
      </div>

      {/* Social Media Links */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
        <a href="#" className="text-blue-500 mx-2">Facebook</a>
        <a href="#" className="text-blue-500 mx-2">Instagram</a>
        <a href="#" className="text-blue-500 mx-2">
     Pinterest</a>
        <a href="#" className="text-blue-500 mx-2">
          Twitter
        </a>
      </div>

      {/* Privacy Policy */}
      <p className="text-center text-gray-600">
        We value your privacy. Please read our{" "}
        <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a>.
      </p>
    </div>

    {/* Footer Section */}
        <Footer/>
    </>
    )
}
export default ContactPage