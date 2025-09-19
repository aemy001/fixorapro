import React, { useState, useRef, useEffect } from "react";
import { FilterArrow } from "./Icons";

export default function ContactsFilter({
  filters,
  setFilters,
  sections,
  onClose,
}) {
  const [localFilters, setLocalFilters] = useState(filters);
  const [openSection, setOpenSection] = useState(null);
  const ref = useRef();

  // Close if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose?.();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const toggleValue = (type, value) => {
    setLocalFilters((prev) => {
      const values = new Set(prev[type] || []);
      if (values.has(value)) values.delete(value);
      else values.add(value);
      return { ...prev, [type]: Array.from(values) };
    });
  };

  const applyFilters = () => {
    setFilters(localFilters);
    onClose?.();
  };

  const clearFilters = () => {
    const cleared = sections.reduce((acc, s) => ({ ...acc, [s.name]: [] }), {});
    setLocalFilters(cleared);
    setFilters(cleared);
    onClose?.();
  };

  const Section = ({ title, name, items }) => (
    <div className="border-b border-[#f4f5f6] last:border-b-0">
      <button
        onClick={() => setOpenSection(openSection === name ? null : name)}
        className="w-full flex justify-between items-center py-2 text-xs font-semibold text-slate-700"
      >
        {title}
        <span
          className={`text-slate-500 transform transition-transform duration-200 ${
            openSection === name ? "rotate-180" : "rotate-0"
          }`}
        >
          <FilterArrow />
        </span>
      </button>
      {openSection === name && (
        <div className="pl-1 pb-2 space-y-1">
          {items.map((item) => (
            <label key={item} className="flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={localFilters[name]?.includes(item)}
                onChange={() => toggleValue(name, item)}
                className="accent-[bg-[#0878AC]] border-[bg-[#0878AC] rounded-md"
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      ref={ref}
      className="
    absolute top-full -left-[3.6rem] mt-2
    w-50 sm:w-58 max-w-[90vw]
    z-[299]
    rounded-md bg-white
    shadow-[0_0_10px_0_#0000001a]
    animate-fade
    px-4 py-3
  "
    >
      <span className="absolute left-[4.2rem] -top-[9px] z-[999]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          class="filter__dropdown__contain__arrow__top"
        >
          <path
            d="M6.96284 0L13.9257 9.78667L0 9.78667L6.96284 0Z"
            fill="#fff"
          ></path>
        </svg>
      </span>

      {sections.map((s) => (
        <Section key={s.name} {...s} />
      ))}

      <div className="flex justify-between gap-3 px-2 py-2 border-t border-[#f4f5f6]">
        <button
          onClick={clearFilters}
          className="flex-1 px-2 py-1 text-xs border rounded text-[#0878AC] border-[#0878AC] hover:bg-sky-50"
        >
          Clear Filters
        </button>
        <button
          onClick={applyFilters}
          className="flex-1 px-3 py-1 text-xs bg-[#0878AC] text-white rounded hover:bg-[#0d71a0]"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
