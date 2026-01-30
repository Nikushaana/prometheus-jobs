"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function CompaniesGrid() {
  const companies = [
    {
      id: 1,
      companyName: "რედბერი",
    },
    {
      id: 2,
      companyName: "TNET",
    },
    {
      id: 3,
      companyName: "Silk net",
    },
    {
      id: 4,
      companyName: "ავერსი",
    },
    {
      id: 5,
      companyName: "თეგეტა",
    },
    {
      id: 6,
      companyName: "გვირილა",
    },
    {
      id: 7,
      companyName: "ბიმარტი",
    },
    {
      id: 8,
      companyName: "ავტობანი",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-7.5 w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] max-sm:text-[22px]">კომპანიები</h1>
      </div>
      <div className="w-full grid grid-cols-4 max-md:grid-cols-2 gap-7.5 max-lg:gap-5">
        {companies.map((item: any) => (
          <Link
            href={`/employee/1`}
            key={item.id}
            className={`flex flex-col items-center gap-5 rounded-lg py-7.5 max-tiny:py-5 border border-gray-200 relative bg-white
            `}
          >
            <div className="w-17.5 h-17.5 flex items-center justify-center rounded-full overflow-hidden bg-[#E8E8E8]">
              {false ? ( 
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${item.profileImg}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <MdOutlineBusinessCenter className="text-[30px]" />
              )}
            </div>
            <p>{item.companyName}</p>
            <div
              className={`flex items-center gap-1.25 cursor-pointer ${
                item.type !== "premium" &&
                item.type !== "silver" &&
                "text-[#3E7C7F]"
              }`}
            >
              <BsFileEarmarkArrowUp className="text-[20px]" />
              <p className="text-[15px]">დატოვეთ CV</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href={`/employee`}
        className="flex items-center text-[#3E7C7F] cursor-pointer"
      >
        <h1 className=" max-sm:text-[15px]">ყველას ნახვა</h1>
        <IoIosArrowForward />
      </Link>
    </div>
  );
}
