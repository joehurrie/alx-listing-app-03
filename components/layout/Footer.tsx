import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 py-6">
      <div className="container mx-auto text-left">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-lg font-semibold">Logo</div>
          <div className="text-sm text-gray-400">Alx is a plarform where travelers can discover and book unique
            accommodations around the world.</div>


        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex justify-left mt-2 space-x-4">
                <h3 className="text-lg font-semibold">Explore</h3>
                <a href="#" className="text-gray-400 hover:text-white">Apartments in Dubai</a>
                <a href="#" className="text-gray-400 hover:text-white">Hotels in New Yrk</a>
                <a href="#" className="text-gray-400 hover:text-white">Villa in Spain</a>
                <a href="#" className="text-gray-400 hover:text-white">Mansion in Indonesia</a>
            </div>
        
            <div className="flex justify-left mt-2 space-x-4">
                <h3 className="text-lg font-semibold">Company</h3>
                <a href="#" className="text-gray-400 hover:text-white">About</a>
                <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                <a href="#" className="text-gray-400 hover:text-white">Career</a>
                <a href="#" className="text-gray-400 hover:text-white">Customers</a>
                <a href="#" className="text-gray-400 hover:text-white">Brand</a>
            </div>

            <div className="flex justify-left mt-2 space-x-4">
                <h3 className="text-lg font-semibold">Help</h3>
                <a href="#" className="text-gray-400 hover:text-white">Support</a>
                <a href="#" className="text-gray-400 hover:text-white">Cancel Booking</a>
                <a href="#" className="text-gray-400 hover:text-white">Refunds Process</a>
            </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">

          some hotels requires you to cancel more than 24 hours before check in Details here
          </div>
        
        
      </div>
    </footer>
  );
}
export default Footer;