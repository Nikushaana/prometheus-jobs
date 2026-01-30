"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function MultyDropDown({
  icon,
  placeholder,
  data,
  name,
  values = [],
  setValue,
}: any) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [drop, setDrop] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      targetRef.current && 
      !targetRef.current.contains(event.target as Node)
    ) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleItem = (item: any) => {
    let updated: string[] = [];
    if (values.includes(String(item.id))) {
      // remove if already selected
      updated = values.filter((val: string) => val !== String(item.id));
    } else {
      // add if not selected
      updated = [...values, String(item.id)];
    }

    // update parent state
    setValue((prev: any) => ({
      ...prev,
      [name]: updated,
    }));
  };

  return (
    <div ref={targetRef} className="relative w-full h-full text-[#696969]">
      <div
        onClick={() => setDrop((pre) => !pre)}
        className="rounded-lg w-full h-full flex items-center cursor-pointer justify-between"
      >
        <div className="flex items-center gap-2.5 flex-1">
          {icon && (
            <div className="w-5 h-10 flex items-center justify-center text-[20px] cursor-pointer">
              {icon}
            </div>
          )}

          <div
            className={`flex items-center gap-2.5 ${
              icon ? "flex-1" : "w-full"
            }`}
          >
            <p className="text-[14px]">
              {placeholder + " (" + values.length + ")"}
            </p>
          </div>
        </div>
        <div className="w-5 h-10 flex items-center justify-center text-[20px] cursor-pointer">
          <IoIosArrowDown
            className={`duration-200 ${drop ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <div
        style={{
          height: `${drop ? (data?.length > 6 ? 190 : data?.length * 30 + 10) : 0}px`,
        }}
        className={`absolute rounded-lg w-full bg-[white] shadow border border-gray-200 duration-100 ${
          data?.length > 6 && "overflow-y-scroll showScrollVert"
        } ${drop ? `top-12.5 z-10 py-1.25` : "top-10 z-[-1] py-0 overflow-hidden"}`}
      >
        {data?.map((item: any, index: number) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item)}
            className={`px-2.5 gap-2.5 flex items-center w-full h-7.5 text-[13px] truncate hover:bg-gray-100 cursor-pointer duration-100 select-none ${
              index % 2 === 0 ? "bg-[#F5F7FC]" : ""
            }`}
          >
            <div
              className={`w-5 h-5 flex items-center justify-center text-[10px] rounded-lg border shadow text-white duration-100 shrink-0 ${
                values.includes(String(item.id)) ? "bg-[#58c558]" : "bg-white"
              }`}
            >
              <FaCheck />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
