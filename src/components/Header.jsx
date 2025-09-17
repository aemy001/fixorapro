import { Search, Bell, SlidersHorizontal, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between border border-b border-[#898fa026] bg-[#F0F3F7] px-6 py-4 ">
      {/* Left: Welcome & Date */}
     <div className="flex items-center gap-6">
       <div className="flex flex-col ">
        <h6 className="font-medium text-sm">Welcome Demo</h6>
        <h5 className="font-bold text-base">
          17/09/2025 12:38:38 AM
        </h5>
      </div>
   <div className="relative w-[280px] search">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Global Search"
            className="w-full rounded-full border border-gray-200 bg-white pl-9 pr-3 py-2 text-sm "
          />
        </div>
      </div>
      

      {/* Right: Actions + Profile */}
      <div className="flex items-center gap-3">
        {/* Purple Button */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#C084FC] text-white text-base font-medium shadow-sm hover:opacity-90 transition">
          ▶ How to start?
        </button>

        {/* Round Buttons */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2589f6] text-white hover:opacity-90">
          <Plus className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
          <SlidersHorizontal className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
          <Bell className="w-4 h-4" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-gray-200 rounded-full px-2 py-1 cursor-pointer hover:bg-gray-300">
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
