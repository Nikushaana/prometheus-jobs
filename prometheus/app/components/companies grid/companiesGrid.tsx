"use client";

import { Company } from "@/types";
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function CompaniesGrid({ companies }: { companies: Company[] }) {
  return (
    <div className="flex flex-col items-center gap-y-7.5 w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] max-sm:text-[22px]">კომპანიები</h1>
      </div>
      <div className="w-full grid grid-cols-4 max-md:grid-cols-2 gap-7.5 max-lg:gap-5">
        {companies.map((item: any) => (
          <div
            key={item.id}
            className={`flex flex-col items-center gap-5 rounded-lg py-7.5 max-tiny:py-5 border border-gray-200 relative bg-white
            `}
          >
            <div className="w-17.5 h-17.5 flex items-center justify-center rounded-full overflow-hidden bg-[#E8E8E8]">
              <MdOutlineBusinessCenter className="text-[30px]" />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
