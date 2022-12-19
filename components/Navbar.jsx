import Image from 'next/image'
import profilePic from '../public/erwin.jpg'

export const Navbar = () => {
  return ( 
    <div className="fixed w-full flex items-center justify-between h-14 z-10">
       
        <div className="flex items-center justify-start pl-3 w-14 md:w-64 h-14 bg-gray-600 border-none">         
        <Image src={profilePic} 
        alt="Picture of the author" 
        className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-full overflow-hidden" />
          <span className="text-white hidden md:block">ErwinAgpasa <small className="hidden md:block">Administrator</small></span>
          
        </div>

        <div className="pl-4 flex justify-between items-center h-14 bg-gray-200 header-right">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
          </div>
          <ul className="flex items-center">
            <li>
                
                <svg
                  x-show="!isDark"
                  width="24"
                  height="24"
                  className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke=""
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
            </li>
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400"></div>
            </li>
            <li>
              <a href="#" className="flex items-center mr-4 hover:text-blue-100">
                <span className="inline-flex mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}
 
