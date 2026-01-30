"use client";

import { IoSearchOutline } from "react-icons/io5";
import MultyDropDown from "../components/inputs/multyDropDown";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBusinessCenter } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import VacancyCard from "../components/cards/vacancyCard";

type FilterValues = {
  search_text: string;
  cities: string[];
  categories: string[];
  work_types: string[];
  salary_types: string[];
};

export default function VacanciesClient() {
  const cities = [
    {
      id: 1,
      name: "თელავი",
    },
    {
      id: 2,
      name: "თბილისი",
    },
    {
      id: 3,
      name: "რუსთავი",
    },
    {
      id: 4,
      name: "ყვარელი",
    },
    {
      id: 5,
      name: "ქუთაისი",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "გაყიდვები",
    },
    {
      id: 2,
      name: "კვება",
    },
    {
      id: 3,
      name: "IT",
    },
    {
      id: 4,
      name: "განათლება",
    },
    {
      id: 5,
      name: "სამართალი",
    },
    {
      id: 6,
      name: "მშენებლობა",
    },
    {
      id: 7,
      name: "სილამაზე",
    },
  ];

  const workType = [
    {
      id: 1,
      name: "თავისუფალი",
    },
    {
      id: 2,
      name: "სრული განაკვეთი",
    },
    {
      id: 3,
      name: "ჰიბრიდული",
    },
    {
      id: 4,
      name: "ნახევარი განაკვეთი",
    },
    {
      id: 5,
      name: "ცვლა",
    },
  ];

  const salaryType = [
    {
      id: 1,
      name: "ფიქსირებული",
    },
    {
      id: 2,
      name: "პროცენტი",
    },
    {
      id: 3,
      name: "ფიქს. + პროცენტი",
    },
  ];

  const vacancies = [
    {
      id: 1,
      companyName: "რედბერი",
      position: "Front-end დეველოპერი",
      loaction: "თბილისი",
      salary: "5000",
      workType: "დისტანციური",
    },
    {
      id: 2,
      companyName: "TNET", 
      position: "Senior Front-end დეველოპერი",
      loaction: "თბილისი",
      salary: "8000",
      workType: "ჰიბრიდული",
    },
    {
      id: 3,
      companyName: "Silk net",
      position: "IT",
      loaction: "თელავი",
      salary: "2000",
      workType: "ოფისში",
    },
    {
      id: 4,
      companyName: "ავერსი",
      position: "მოლარე ოპერატორი",
      loaction: "ყვარელი",
      salary: "1500",
      workType: "ოფისში",
    },
    {
      id: 5,
      companyName: "თეგეტა",
      position: "ძრავის მექანიკოსი",
      loaction: "თბილისი",
      salary: "4000",
      workType: "ოფისში",
    },
  ];

  const searchParams = useSearchParams();

  const search_text = searchParams.get("search_text") || "";
  const defaultCities = searchParams.get("cities")?.split(",") || [];
  const defaultCategories = searchParams.get("categories")?.split(",") || [];
  const defaultWorkTypes = searchParams.get("work_types")?.split(",") || [];
  const defaultSalaryTypes = searchParams.get("salary_types")?.split(",") || [];

  const [filterValues, setFilterValues] = useState<FilterValues>({
    search_text: search_text ?? "",
    cities: defaultCities ?? [],
    categories: defaultCategories ?? [],
    work_types: defaultWorkTypes ?? [],
    salary_types: defaultSalaryTypes ?? [],
  });

  const params = new URLSearchParams();

  if (filterValues.search_text) {
    params.append("search_text", filterValues.search_text);
  }

  if (filterValues.cities.length > 0) {
    params.append("cities", filterValues.cities.join(","));
  }

  if (filterValues.categories.length > 0) {
    params.append("categories", filterValues.categories.join(","));
  }

  if (filterValues.work_types.length > 0) {
    params.append("work_types", filterValues.work_types.join(","));
  }

  if (filterValues.salary_types.length > 0) {
    params.append("salary_types", filterValues.salary_types.join(","));
  }

  const searchLink = params.toString()
    ? `/vacancies?${params.toString()}`
    : "/vacancies";

  return (
    <div>
      <div className="text-center bg-[#F5F7FC] pt-10 pb-10 px-[17%] max-lg:px-5">
        <div className="h-17.5 max-lg:h-auto p-2.5 rounded-lg bg-white w-full flex max-lg:flex-col items-center gap-2.5 self-start shadow-md border border-gray-200">
          <div className="rounded-lg flex items-center text-[#696969] w-75 max-xl:w-50 max-lg:w-full max-lg:border-b border-gray-200">
            <div className="w-10 h-10 flex items-center justify-center text-[20px] cursor-pointer">
              <IoSearchOutline />
            </div>
            <input
              type="text"
              placeholder="მოიძიე ვაკანსია.."
              value={filterValues.search_text}
              onChange={(e) =>
                setFilterValues((prev) => ({
                  ...prev,
                  search_text: e.target.value,
                }))
              }
              className="outline-none text-[14px] flex-1"
            />
          </div>
          <div className="h-full border-l border-gray-200 max-lg:hidden"></div>
          <div className="flex max-sm:flex-col items-center gap-2.5 w-[calc(100%-321px)] max-xl:w-[calc(100%-221px)] max-lg:w-full h-full justify-between">
            <div className="w-[calc((100%-151px)/2)] max-sm:w-full max-sm:border-b border-gray-200">
              <MultyDropDown
                icon={<CiLocationOn />}
                placeholder="მდებარეობა"
                data={cities}
                name="cities"
                values={filterValues.cities}
                setValue={setFilterValues}
              />
            </div>
            <div className="h-full border-l border-gray-200"></div>
            <div className="w-[calc((100%-151px)/2)] max-sm:w-full max-sm:border-b border-gray-200">
              <MultyDropDown
                icon={<MdOutlineBusinessCenter />}
                placeholder="ინდუსტრია"
                data={categories}
                name="categories"
                values={filterValues.categories}
                setValue={setFilterValues}
              />
            </div>
            <Link
              href={searchLink}
              className="text-white bg-[#3E7C7F] select-none w-30 max-sm:w-full h-12.5 flex items-center justify-center rounded-lg cursor-pointer"
            >
              ფილტრი
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          <div className="rounded-lg py-1.25 px-3.75 flex items-center justify-between bg-[#3e7c7f15] text-[#3E7C7F]">
            <MultyDropDown
              placeholder="სამუშაო განაკვეთი"
              data={workType}
              name="work_types"
              values={filterValues.work_types}
              setValue={setFilterValues}
            />
          </div>
          <div className="rounded-lg py-1.25 px-3.75 flex items-center justify-between bg-[#3e7c7f15] text-[#3E7C7F]">
            <MultyDropDown
              placeholder="ანაზღაურების ტიპი"
              data={salaryType}
              name="salary_types"
              values={filterValues.salary_types}
              setValue={setFilterValues}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-7.5 max-lg:gap-5 pt-12.5 max-lg:pt-5 pb-20 px-[17%] max-xl:px-5 relative">
        <div className={`w-full`}>
          <p className="text-[14px] text-[#696969] mb-7.5 max-lg:mt-5">
            {vacancies?.length} განცხადება
          </p>
          <div className="flex flex-col gap-5 items-center w-full">
            {false ? (
              [1, 2, 3].map((item: any) => (
                <div
                  key={item}
                  className="h-27.5 bg-gray-200 rounded-lg w-full animate-pulse"
                ></div>
              ))
            ) : (
              <>
                {vacancies.map((item: any, index: number) => (
                  <VacancyCard key={item.id} index={index} item={item} />
                ))}
                <div
                  onClick={() => {}}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <p className="text-[#3E7C7F] h-7.5">მეტის ნახვა</p>
                  <hr className="w-10 group-hover:w-20 duration-150 border-b-2 border-[#3E7C7F] rounded-full" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
