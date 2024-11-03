import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-[#f0f8ff] text-black py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          <div className="flex-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Location:</h4>
                <p className="text-gray-600">Lubuk Pakam, Sumatera Utara, Indonesia</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaEnvelope className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Email:</h4>
                <p className="text-gray-600">robertaritonang@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPhoneAlt className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Call:</h4>
                <p className="text-gray-600">+628123467890</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full mt-8 md:mt-0">
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2">Your Name</label>
                    <input type="text" 
                    className="w-full p-2 rounded bg-gray-200 border border-gray-300 focus:outline-none
                    focus:border-green-400"
                    placeholder="Enter Your Name"/>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="text" 
                    className="w-full p-2 rounded bg-gray-200 border border-gray-300 focus:outline-none
                    focus:border-green-400"
                    placeholder="Enter Your Email"/>
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea 
                    className="w-full p-2 rounded bg-gray-200 border border-gray-300 focus:outline-none
                    focus:border-green-400"
                    rows="5"
                    placeholder="Enter Your Message"/>
                </div>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform 
                transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
