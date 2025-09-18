// ContactsList.jsx
import {
  PageIcon3,
  SortIcon,
  FilterIcon,
  DatePickrIcon,
  AddBtnIcon,
  MoreVerticalIcon,
  PersonIcon,
  BuildingIcon,
  NoResultsIcon,
  SearchIcon,
  MoreHorizontalIcon,
} from "@/components/Icons";
import React, { useMemo, useState } from "react";
import sampleContacts from './sampleContacts'


function Avatar({ name, tag }) {
  const initials = (name || "?")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (tag === "Personal") {
    return (
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">
        <PersonIcon />
      </div>
    );
  }

  if (tag === "Supplier" || tag === "Business") {
    return (
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">
        <BuildingIcon />
      </div>
    );
  }

  // fallback: initials
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
    <div className="flex items-center gap-4 bg-gray-100 rounded-lg cursor-pointer px-3 py-2">
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 flex-[2] min-w-[200px]">
        <div className="flex-shrink-0">
          <Avatar name={contact.name} tag={contact.tag} />
        </div>
        <div className="text-sm">
          <div className="text-[10px] text-slate-500">Name</div>
          <h6 className="font-semibold text-xs contactname whitespace-normal">
            {contact.name}
          </h6>
        </div>
      </div>

      {/* City */}
      <div className="flex-[1] min-w-[140px] pl-2 border-l border-slate-800">
        <div className="text-[10px] text-slate-500">PLZ, City</div>
        <div className="text-xs font-semibold text-slate-700">
          {contact.city}
        </div>
      </div>

      {/* Email */}
      <div className="flex-[2] min-w-[220px]">
        <div className="text-[10px] text-slate-500">E-Mail</div>
        <div className="text-xs">
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-500 font-semibold"
          >
            {contact.email}
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex-[1] min-w-[140px]">
        <div className="text-[10px] text-slate-500">Telephone</div>
        <div className="text-xs font-semibold text-slate-700">
          {contact.phone}
        </div>
      </div>

      {/* Tag + Actions */}
      <div className="flex-[1] flex items-center justify-end gap-3 min-w-[160px]">
        <Tag>{contact.tag}</Tag>
        <button aria-label="more" className="" title="More">
          <MoreHorizontalIcon />
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
    <div className="min-h-max py-2">
      <div className="contactspage mx-auto">
        <div className="mb-4 flex items-center gap-3">
          <PageIcon3 />
          <h2 className="text-2xl font-semibold text-slate-800">Contacts</h2>
        </div>

        <div className="bg-white rounded-xl shadow ">
          {/* top controls */}
          <div className="flex items-center justify-between p-4 mb-2">
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
                <DatePickerIcon />
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
                  <SearchIcon />
                </span>
              </div>
              <button
                className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow"
                title="Add contact"
              >
                <AddBtnIcon />
              </button>
              <button>
                <MoreVerticalIcon />
              </button>
            </div>
          </div>

          {/* rows */}
          <div className="px-4 tablebody space-y-3">
            {pageItems.length > 0 ? (
              pageItems.map((c) => <ContactRow key={c.id} contact={c} />)
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-slate-500">
                <NoResultsIcon className="w-16 h-16 mb-3" />
                <p className="text-2xl font-medium">No Results Found</p>
              </div>
            )}
          </div>

          {/* footer with pagination */}
          <div className="mt-3 py-3 border-t-2 border-[#ededed]  text-sm text-slate-600">
            <div className="px-4  flex items-center justify-between">
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
                  Showing {start + 1} to {Math.min(end, total)} of {total}{" "}
                  entries
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
    </div>
  );
}
