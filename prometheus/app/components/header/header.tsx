"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const routes = [
    {
      id: 1,
      name: "მთავარი",
      url: "/",
    },
    {
      id: 2,
      name: "ვაკანსიები",
      url: "/vacancies",
    }, 
  ];

  return (
    <div
      className={`flex items-center justify-between max-sm:flex-col gap-2.5 px-15 max-xl:px-10 max-md:px-4 py-5 w-full ${
        !pathname.split("/")[1]
          ? "absolute z-10 text-white"
          : "bg-white shadow-md"
      }`}
    >
      <Link href={"/"} className="w-36.25 h-12.5">
        <img
          src="/images/prometheusLogo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </Link>
      <ul className="flex items-center gap-5">
        {routes.map((r) => (
          <li key={r.id}>
            <Link href={r.url}>
              <h1>{r.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
