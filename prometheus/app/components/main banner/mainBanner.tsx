"use client";

import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import MultyDropDown from "../inputs/multyDropDown";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Category, City } from "@/types";

export default function MainBanner({ cities, categories }: { cities: City, categories: Category }) {
  const [filterValues, setFilterValues] = useState({
    search_text: "",
    cities: [],
    categories: [],
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

  const searchLink = params.toString()
    ? `/vacancies?${params.toString()}`
    : "/";

  return (
    <div className="h-[70vh] max-tiny:h-screen flex relative">
      <div className="w-full h-full max-lg:pt-0 max-tiny:pt-0 z-1 flex flex-col gap-y-2.5 justify-center px-[17%] max-lg:px-12.5 max-sm:px-4">
        <h1 className="text-[45px] max-tiny:text-[30px] max-md:text-white">
          მოძებნეთ ვაკანსია
        </h1>
        <p className="text-[18px] text-gray-600 max-md:text-white">
          იპოვეთ სასურველი ვაკანსია მარტივად, მოძებნეთ კომპანიები
        </p>
        <div className="mt-5 p-2.5 rounded-lg bg-white flex max-lg:flex-col w-[80%] max-lg:w-full items-center gap-2.5 self-start shadow-md border border-gray-200">
          <div className="rounded-lg flex items-center text-[#696969] max-lg:border-b w-[25%] max-lg:w-full">
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
          <div className="flex max-sm:flex-col items-center gap-2.5 h-full w-[calc(75%-21px)] max-lg:w-full justify-between">
            <div className="w-[calc((75%-31px)/2)] max-sm:w-full max-sm:border-b h-full max-sm:h-auto">
              <MultyDropDown
                icon={<CiLocationOn />}
                placeholder="მდებარეობა"
                data={cities}
                name="cities"
                values={filterValues.cities}
                setValue={setFilterValues}
              />
            </div>
            <div className="h-full border-l border-gray-200 max-sm:hidden"></div>
            <div className="w-[calc((75%-31px)/2)] max-sm:w-full max-sm:border-b h-full max-sm:h-auto">
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
              className="text-white bg-[#3E7C7F] select-none w-[25%] max-sm:w-full h-12.5 flex items-center justify-center rounded-lg"
            >
              <p>ძებნა</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="justify-end flex w-full h-full absolute">
        <div className="h-[calc(100%+90px)] max-lg:h-[calc(100%+40px)] max-md:w-full max-md:h-[65%] max-sm:h-[58%] max-md:mr-0 max-md:rounded-bl-none w-[50%] max-xl:w-[70%] rounded-bl-[100px] -mr-25 skew-x-12 max-md:skew-x-0 overflow-hidden">
          <div className="w-full h-full bg-[#00000049] max-md:bg-[#000000b1] z-1 absolute"></div>
          <img
            src="/images/banner.jpg"
            alt=""
            className="-skew-x-12 -ml-25 max-md:ml-0 max-md:skew-x-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
