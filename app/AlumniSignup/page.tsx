import Image from 'next/image';
import MouseEffect from "../components/MouseEffect";

export default function StudentSignUp() {
  return (
    <div className="bg-[#131619] text-white min-h-screen flex items-center justify-center relative">
      <div className="flex flex-col md:flex-row items-start md:space-x-12 w-full max-w-6xl">
        
      
        <div className="text-left mt-16 md:w-1/2 w-full px-4">
          <h1 className="text-4xl font-bold mb-8">Hi Alums👋</h1>
          <p className="text-xl mb-12">Get Started with your details...</p>
          <form className="w-full max-w-md">
           

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="college-email">
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 bg-[#1A1D21] text-white leading-tight focus:outline-none focus:shadow-outline"
                id="college-email"
                type="email"
                placeholder="youremail@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-3 bg-[#1A1D21] text-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="w-full px-4 py-3 bg-[#1A1D21] text-white leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-[#24AE7C] hover:bg-green-700 text-white font-bold w-full px-4 py-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>

      
        
        </div>
      </div>
   
  );
}
