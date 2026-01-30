import Link from "next/link";
import VacancyCard from "../cards/vacancyCard";
import { Vacancy } from "@/types";

export default function VacanciesList({ vacancies }: { vacancies: Vacancy[] }) {

  return (
    <div className="flex flex-col gap-y-7.5">
      <div className="flex items-center justify-center">
        <h1 className="text-[30px] max-sm:text-[22px]">ვაკანსიები</h1>
      </div>
      <div className="flex flex-col">
        <div className="rounded-lg shadow-md max-md:shadow-none flex flex-col max-md:gap-y-5 p-1.25 border border-gray-200">
          {vacancies.map((item: any, index: number) => (
            <VacancyCard key={item.id} index={index} item={item} />
          ))}
        </div>

        <Link
          href={`/vacancies`}
          className="flex items-center self-center h-10 mt-5 px-3.75 rounded-lg bg-[#3E7C7F] text-white hover:text-[#3E7C7F] hover:bg-gray-100 duration-150"
        >
          <p className="text-[14px]">ყველა ვაკანსიის ნახვა</p>
        </Link>
      </div>
    </div>
  );
}
