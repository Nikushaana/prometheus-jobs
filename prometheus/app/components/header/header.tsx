"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
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

  const [hidden, setHidden] = useState(false);
  let lastY = 0;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 100);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10 bg-white shadow-md flex items-center justify-between max-sm:flex-col gap-2.5 px-15 max-xl:px-10 max-md:px-4 duration-300 overflow-hidden 
        ${hidden ? "h-0" : "h-22.5"}`}
    >
      <Link href={"/"} className="w-36.25 h-full">
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
