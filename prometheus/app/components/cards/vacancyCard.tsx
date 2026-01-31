import { Vacancy } from "@/types";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function VacancyCard({
  index,
  item,
}: {
  index: number;
  item: Vacancy;
}) {
  
  return (
    <div
      className={`flex items-center justify-between w-full p-6.25 max-md:p-4 gap-5 border-l-[3px] max-md:shadow-md max-md:border max-md:rounded-lg ${
        index % 2 === 1
          ? "bg-[#F6F6FB]  border-[#3E7C7F] "
          : "border-transparent max-md:border-gray-100"
      }`}
    >
      <div className="flex items-start gap-5 max-md:gap-4">
        <Link
          href={`/vacancies/${item.id}`}
          className={`w-15 h-15 max-md:w-10 max-md:h-10 flex items-center justify-center rounded-lg overflow-hidden bg-gray-200
                  `}
        >
          <MdOutlineBusinessCenter className="text-[30px] max-md:text-[20px]" />
        </Link>
         <div className="flex flex-col gap-1.25">
          <p className="text-gray-400 text-[14px]">{item.company.name}</p>
          <div className="flex max-md:flex-wrap items-center gap-10 max-md:gap-y-2.5 max-xl:gap-5 text-[#696969]">
            <div className="flex items-center gap-1.25">
              <MdOutlineBusinessCenter className="text-[18px]" />
              <p className="text-[14px]">{item.category.name}</p>
            </div>
            <div className="flex items-center gap-1.25">
              <IoLocationOutline className="text-[18px]" />
              <p className="text-[14px]">{item.city.name}</p>
            </div>
            <div className="flex items-center gap-1.25">
              <GiMoneyStack className="text-[18px]" />
              <p className="text-[14px]">{item.salary}</p>
            </div>
            <div className="flex items-center gap-1.25">
              <BiTime className="text-[18px]" />
              <p className="text-[14px]">{item.workType.name}</p>
            </div>
          </div>
        </div> 
      </div>

      <Link href={`/vacancies/${item.id}`} className="max-lg:hidden">
        <p
          className={`h-10 text-[14px] flex items-center px-5 cursor-pointer rounded-lg shrink-0 ${
            index % 2 === 1
              ? "bg-[#3E7C7F] text-white hover:text-[#3E7C7F] hover:bg-gray-100 duration-150"
              : "bg-[#F6F6FB] text-[#3E7C7F] hover:text-white hover:bg-[#3E7C7F] duration-150"
          }`}
        >
          სრულად ნახვა
        </p>
      </Link>
    </div>
  );
}
