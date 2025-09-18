import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  SideIcon1,
  SideIcon2,
  SideIcon3,
  SideIcon4,
  SideIcon5,
  SideIcon6,
  SideIcon7,
  SideIcon8
} from "./Icons";

const navItems = [
  { label: "Dashboard", href: "/", icon: SideIcon1 },
  { label: "Jobs", href: "/job", icon: SideIcon2 },
  { label: "Contacts", href: "/contacts", icon: SideIcon3 },
  {
    label: "Stock",
    icon: SideIcon4,
    children: [
      { label: "Items", href: "/stock/items" },
      { label: "Goods Reception", href: "/stock/goods-reception" },
    ],
  },
  { label: "Services", href: "/services", icon: SideIcon5 },
  { label: "Invoices", href: "/invoices", icon: SideIcon6 },
  { label: "Settings", href: "/settings", icon: SideIcon7 },
];

export default function Sidebar() {
  const router = useRouter();
  const [openStock, setOpenStock] = useState(false);
  const [submenuTop, setSubmenuTop] = useState(0);
  const stockBtnRef = useRef(null);

  useEffect(() => {
    if (router.pathname.startsWith("/stock")) {
      setOpenStock(true);
      if (stockBtnRef.current) {
        const rect = stockBtnRef.current.getBoundingClientRect();
        setSubmenuTop(rect.top);
      }
    } else {
      setOpenStock(false);
    }
  }, [router.pathname]);

  const toggleStock = () => {
    if (stockBtnRef.current) {
      const rect = stockBtnRef.current.getBoundingClientRect();
      setSubmenuTop(rect.top);
    }
    setOpenStock(!openStock);
  };

  return (
    <>
      <aside className="fixed left-0 top-0 w-[100px] bg-[#343655] gap-[0.25rem] px-1 flex flex-col items-center pb-3 pt-5 h-screen">
        {/* Logo */}
        <Link href="/" className="mb-2">
          <div className="text-white font-bold">Logo</div>
        </Link>
        <hr className="h-[1px] sidehr bg-[#a0adb3] my-[6px] w-[73px]" />

        {/* Links */}
        {navItems.map(({ label, href, icon: Icon, children }) => {
          const isActive = href ? router.pathname === href : router.pathname.startsWith("/stock");
          if (children) {
            return (
              <button
                key={label}
                ref={stockBtnRef}
                onClick={toggleStock}
                className={`flex flex-col items-center justify-center w-full h-[58px] rounded-[0.625rem]   ${
                  isActive ? "bg-[#2589f6] text-white" : "text-[#A0ADB3] hover:bg-[#2589f6] hover:text-white"
                }`}
              >
                <Icon className="w-6 h-6 text-white" />
                <span className="text-xs">{label}</span>
              </button>
            );
          }
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center w-full gap-[0.25rem] h-[58px] rounded-[0.625rem]  ${
                isActive ? "bg-[#2589f6] text-white " : "text-[#A0ADB3] hover:bg-[#2589f6] hover:text-white"
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
              <span className="text-xs">{label}</span>
            </Link>
          );
        })}

        <hr className="h-[1px] sidehr bg-[#a0adb3] my-[6px] w-[73px] mt-auto" />
        <Link
          href="/invite"
          className="flex items-center gap-2 border border-[#A0ADB3] rounded-[10px] py-1 px-1.5 text-xs font-medium text-[#A0ADB3]  hover:text-white transition"
        >
<SideIcon8/>{" "}
          Invite
        </Link>
      </aside>

      {/* Off-side Submenu stock */}
      {openStock && (
        <div
          className="fixed left-[100px] w-[220px] bg-[#072a2f] rounded-md shadow-lg z-50"
          style={{ top: submenuTop }}
        >
          <Link
            href="/stock/items"
            className={`block px-4 py-3 text-sm ${
              router.pathname === "/stock/items"
                ? "bg-[#0f4e73] text-white"
                : "text-white hover:bg-[#0f4e73]"
            }`}
          >
            Items
          </Link>
          <Link
            href="/stock/goods-reception"
            className={`block px-4 py-3 text-sm ${
              router.pathname === "/stock/goods-reception"
                ? "bg-[#0f4e73] text-white"
                : "text-white hover:bg-[#0f4e73]"
            }`}
          >
            Goods Reception
          </Link>
        </div>
      )}
    </>
  );
}
