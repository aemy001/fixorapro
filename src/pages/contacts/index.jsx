// ContactsList.jsx
import {
  PageIcon3,
  SortIcon,
  FilterIcon,
  DatePickrIcon,
  AddBtnIcon,
  MoreVerticalIcon,
} from "@/components/Icons";
import React, { useMemo, useState } from "react";

const sampleContacts = [
  {
    id: 1,
    name: "sana khalid",
    city: "N/A",
    email: "sana@yahoo.com",
    phone: "N/A",
    tag: "Personal",
    avatarType: "person",
  },
  {
    id: 2,
    name: "Camden Regan",
    city: "Holmes Kaden",
    email: "nolan@yahoo.com",
    phone: "+48 +1 (376) 474-3151",
    tag: "Personal",
    avatarType: "person",
  },
  {
    id: 3,
    name: "Samson Heidi",
    city: "Brent Zeph",
    email: "doxelipura@mailinator.com",
    phone: "+48 +1 (347) 342-8213",
    tag: "Personal",
    avatarType: "person",
  },
  {
    id: 4,
    name: "jane doe",
    city: "N/A",
    email: "ummeaimonjawed@gmail.com",
    phone: "N/A",
    tag: "Personal",
    avatarType: "person",
  },
  {
    id: 5,
    name: "feticosy@mailinator.com",
    city: "N/A",
    email: "fuzizo@mailinator.com",
    phone: "+48 +1 (443) 373-8341",
    tag: "Supplier",
    avatarType: "building",
  },
  {
    id: 6,
    name: "jane doe",
    city: "N/A",
    email: "ummeaimonjawed@gmail.com",
    phone: "N/A",
    tag: "Personal",
    avatarType: "person",
  },
  {
    id: 7,
    name: "a b",
    city: "N/A",
    email: "sd@gmail.com",
    phone: "N/A",
    tag: "Personal",
    avatarType: "person",
  },
];

function Avatar({ name, type = "person" }) {
  //   const initials = (name || "?")
  //     .split(" ")
  //     .map((n) => n[0])
  //     .slice(0, 2)
  //     .join("")
  //     .toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 21h18M9 21V9a2 2 0 012-2h6a2 2 0 012 2v12"
        />
      </svg>
    </div>
  );
  if (type === "building") {
    return (
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21h18M9 21V9a2 2 0 012-2h6a2 2 0 012 2v12"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-white text-xs font-medium">
      {children}
    </span>
  );
}

function ContactRow({ contact }) {
  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-lg px-3 py-2">
      <div className="flex items-center gap-4 w-1/6 min-w-[160px]">
        <Avatar name={contact.name} type={contact.avatarType} />
        <div className="text-sm">
          <div className="text-xs text-slate-500">Name</div>
          <div className="font-medium text-slate-900">{contact.name}</div>
        </div>
      </div>

      <div className="w-1/6 min-w-[140px] pl-2 border-l border-slate-800">
        <div className="text-xs text-slate-500">PLZ, City</div>
        <div className="text-sm text-slate-700">{contact.city}</div>
      </div>

      <div className="w-1/3 min-w-[220px]">
        <div className="text-xs text-slate-500">E-Mail</div>
        <div className="text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-sky-600 hover:underline"
          >
            {contact.email}
          </a>
        </div>
      </div>

      <div className="w-1/6 min-w-[140px]">
        <div className="text-xs text-slate-500">Telephone</div>
        <div className="text-sm text-slate-700">{contact.phone}</div>
      </div>

      <div className="flex-1 flex items-center justify-end gap-3 min-w-[160px]">
        <Tag>{contact.tag}</Tag>
        <button
          aria-label="more"
          className="p-2 rounded-full hover:bg-slate-200"
          title="More"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-slate-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ContactsList() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleContacts;
    return sampleContacts.filter((c) => {
      return (
        (c.name || "").toLowerCase().includes(q) ||
        (c.email || "").toLowerCase().includes(q) ||
        (c.city || "").toLowerCase().includes(q) ||
        (c.phone || "").toLowerCase().includes(q)
      );
    });
  }, [query]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageItems = filtered.slice(start, end);

  return (
    <div className="min-h-screen p-6">
      <div className="contactspage mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <PageIcon3 />
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4h-6a4 4 0 00-4 4v2h5" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9a4 4 0 118 0 4 4 0 01-8 0z" />
          </svg> */}
          <h2 className="text-2xl font-semibold text-slate-800">Contacts</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          {/* top controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* icons: sort / filter / calendar (visual only) */}
              <button
                className="p-2 rounded-md hover:bg-slate-100"
                title="View"
              >
                <SortIcon />
              </button>
              <button
                className="p-2 rounded-md hover:bg-slate-100"
                title="Filter"
              >
                <FilterIcon />
              </button>
              <button
                className="p-2 rounded-md hover:bg-slate-100"
                title="Calendar"
              >
                <DatePickrIcon />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search by Name, City,"
                  className="pl-10 pr-4 py-2.5 bg-[#edeef1] rounded-full text-xs border border-[#dee3e8] w-60 "
                />
                <span className="absolute left-1 top-1 p-2 bg-white rounded-full">
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="w-4 h-4 "
                >
                  <path
                    d="M5.28701 9.17212C7.65466 9.17212 9.57401 7.34273 9.57401 5.08606C9.57401 2.82939 7.65466 1 5.28701 1C2.91936 1 1 2.82939 1 5.08606C1 7.34273 2.91936 9.17212 5.28701 9.17212Z"
                    stroke="#253053"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.9997 12.4405L8.28394 7.9458"
                    stroke="#253053"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                </span>
                
              </div>
              <button
                className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow"
                title="Add contact"
              >
                <AddBtnIcon />
              </button>
              <button>
                <MoreVerticalIcon/>
              </button>
            </div>
          </div>

          {/* rows */}
          <div className="space-y-3">
            {pageItems.map((c) => (
              <ContactRow key={c.id} contact={c} />
            ))}
          </div>

          {/* footer with pagination */}
          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span>View</span>
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setPage(1);
                }}
                className="border rounded px-2 py-1"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span>entries per page</span>
            </div>

            <div className="flex items-center gap-4">
              <div>
                Showing {start + 1} to {Math.min(end, total)} of {total} entries
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded hover:bg-slate-100 disabled:opacity-40"
                >
                  &laquo;
                </button>
                <div className="px-3 py-1 rounded bg-white shadow text-slate-700">
                  {page}
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded hover:bg-slate-100 disabled:opacity-40"
                >
                  &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
