import {Search, AddBtnIcon,Bell } from "./Icons";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between border border-b border-[#898fa026] bg-[#F0F3F7] px-6 py-3 ">
      {/* Left: Welcome & Date */}
     <div className="flex items-center gap-4">
       <div className="flex flex-col">
        <p className="font-normal text-[13px] text-[#253053]">Welcome Demo</p>
        <h5 className="font-bold text-base leading-[1]  ">
          17/09/2025 12:38:38 AM
        </h5>
      </div>
   <div className="relative w-[280px] search">
    <span className="absolute top-3 left-2 translate-y-0 text-gray-400 w-4 h-4">  <Search  /> </span>
         
          <input
            type="text"
            placeholder="Global Search"
            className="w-full rounded-full border border-gray-200 bg-white pl-8 pr-3 py-2 text-sm "
          />
        </div>
      </div>
      

      {/* Right: Actions + Profile */}
      <div className="flex items-center gap-3">

        {/* Round Buttons */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0878AC] text-white hover:opacity-90">
          <AddBtnIcon  />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
          <Bell />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-gray-200 rounded-full px-1 py-1 cursor-pointer hover:bg-gray-300">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-gray-800">Demo</span>
            <span className="text-xs text-gray-500 truncate w-[100px]">
              Esse qui tempore d
            </span>
          </div>
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
}
