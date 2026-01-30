"use client";

import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Footer() {
  const footerRoutes = [
    {
      id: 1,
      title: "რატომ ჩვენ?",
      routes: [
        {
          id: 1, 
          name: "ყველა ვაკანსია ერთ პლატფორმაზე",
          url: "/",
        },
        {
          id: 2,
          name: "პერსონალიზებული რეკომენდაციები",
          url: "/",
        },
        {
          id: 3,
          name: "გამჭვირვალე ინფორმაცია",
          url: "/",
        },
        {
          id: 4,
          name: "მარტივი და ინტუიციური ძებნა",
          url: "/",
        },
        {
          id: 5,
          name: "აქტუალური და ხარისხიანი ვაკანსიები",
          url: "/",
        },
      ],
    },
    {
      id: 2,
      title: "კომპანიებისთის",
      routes: [
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
      ],
    },
  ];

  return (
    <div className={`flex flex-col`}>
      <div className="border-y border-[#ECEDF2] py-25 max-tiny:py-10 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 px-37.5 max-xl:px-10 max-md:px-4 max-xl:gap-y-7.5 gap-5">
        <div className="flex flex-col gap-5 max-sm:items-start">
          <Link href={"/"} className="w-36.25 h-12.5">
            <img
              src="/images/prometheusLogo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>
          <div className="">
            <h1 className="text-[18px]">დაგვიკავშირდით</h1>
            <h1 className="text-[#FF395C]">+995 599 550 015</h1>
            <p className="max-sm:text-start text-[#696969] text-[14px]">
              info@prometheus.jobs.ge
            </p>
          </div>
          <p className="max-sm:text-start text-[#696969] text-[14px]">
            საქართველო, თბილისი, პეკინი N57
          </p>
        </div>
        {footerRoutes.map((routes) => (
          <div
            key={routes.id}
            className="flex flex-col gap-5 max-sm:items-start justify-start"
          >
            <h1 className="">{routes.title}</h1>
            <div className="w-full flex flex-col max-sm:items-start  gap-2.5 text-[#696969]">
              {routes.routes.map((r) => (
                <Link key={r.id} href={r.url}>
                  <p className="hover:text-[#3E7C7F] relative before:content-[''] hover:before:content-['-'] before:mr-1">
                    {r.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="py-3.75 grid grid-cols-2 max-sm:grid-cols-1 gap-2.5 items-center justify-between px-37.5 max-xl:px-10 max-md:px-4">
        <div className="flex items-center gap-1.25 max-sm:justify-center">
          <AiOutlineCopyrightCircle className="text-[20px]" />
          <p className="text-[14px]">
            {dayjs(Date()).year()} პრომეთე. ყველა უფლება დაცულია.
          </p>
        </div>

        <div className="flex items-center gap-9.25 justify-end max-sm:justify-center">
          <a href="https://www.facebook.com/prometheus">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/prometheus">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
