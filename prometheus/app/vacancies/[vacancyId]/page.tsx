import Link from "next/link";
import { BsCashCoin } from "react-icons/bs";
import { CiCalendar, CiLocationOn, CiTimer } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { IoLocationOutline, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function page() {
  const vacancies = [
    {
      id: 1,
      companyName: "რედბერი",
      position: "Front-end დეველოპერი",
      location: "თბილისი",
    },
    {
      id: 2,
      companyName: "TNET",
      position: "Senior Front-end დეველოპერი",
      location: "თბილისი",
    },
    {
      id: 3,
      companyName: "Silk net",
      position: "IT",
      location: "თელავი",
    },
    {
      id: 4,
      companyName: "ავერსი",
      position: "მოლარე ოპერატორი",
      location: "ყვარელი",
    },
    {
      id: 5,
      companyName: "თეგეტა",
      position: "ძრავის მექანიკოსი",
      location: "თბილისი",
    },
    {
      id: 6,
      companyName: "რედბერი",
      position: "Front-end დეველოპერი",
      location: "თბილისი",
    },
    {
      id: 7,
      companyName: "TNET",
      position: "Senior Front-end დეველოპერი",
      location: "თბილისი",
    },
    {
      id: 8,
      companyName: "Silk net",
      position: "IT",
      location: "თელავი",
    },
  ];
  const vacancy = { 
    id: 1,
    companyName: "რედბერი",
    position: "Front-end დეველოპერი",
    location: "თბილისი",
    address: "აღმაშენებლის 67",
    salary: "5000",
    workType: "დისტანციური",
    premium: 1,
    description:
      "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.",
    facebook_url: "https://www.facebook.com/",
    linkedin_url: "https://www.linkedin.com/",
    date: Date(),
    term: Date(),
    start_time: "10:00",
    end_time: "19:00",
  };
  return (
    <div className="pt-10 pb-35 px-[17%] max-lg:px-10 max-sm:px-5">
      <div className="flex max-lg:flex-col gap-10">
        <div className="w-[calc(100%-340px)] max-lg:w-full flex flex-col gap-y-10">
          <div className="flex max-sm:flex-col items-start gap-5">
            <div className="w-25 h-25 flex items-center justify-center rounded-lg overflow-hidden relative bg-[#E8E8E8]">
              {false ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${vacancy}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <MdOutlineBusinessCenter className="text-[40px]" />
              )}
            </div>
            <div className="flex flex-col gap-y-1.25">
              <h1 className="text-[24px] max-sm:text-center">
                {vacancy?.position}
              </h1>
              <div className="flex flex-wrap justify-start items-center gap-2.5 text-[#696969]">
                <div className="flex items-center gap-1.25">
                  <MdOutlineBusinessCenter className="text-[18px]" />
                  <p className="text-[13px]">{vacancy?.companyName}</p>
                </div>
                <div className="flex items-center gap-1.25">
                  <IoLocationOutline className="text-[18px]" />
                  <p className="text-[13px]">{vacancy?.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 mt-2.5">
                <p className="px-3.75 py-1.25 rounded-full bg-[#3e7c7f23] text-[#3E7C7F] text-[13px] cursor-pointer">
                  {vacancy?.workType}
                </p>
                {vacancy?.premium && (
                  <p className="px-3.75 py-1.25 rounded-full bg-[#34a85323] text-[#34A853] text-[13px] cursor-pointer">
                    პრემიუმი
                  </p>
                )}
              </div>
            </div>
          </div>
          <p>{vacancy?.description}</p>
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="font-[20px]">გაზიარება:</p>
            <div className="flex flex-wrap items-center gap-2.5 text-[15px]">
              <a
                href={`${vacancy?.facebook_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.75 py-1.25 flex items-center gap-2.5 text-white bg-[#0866ff] rounded-lg cursor-pointer"
              >
                <FaFacebookF />
                <p className="text-[14px]">Facebook</p>
              </a>
              <a
                href={`${vacancy?.linkedin_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.75 py-1.25 flex items-center gap-2.5 text-white bg-[#0077b5] rounded-lg cursor-pointer"
              >
                <IoLogoLinkedin />
                <p className="text-[14px]">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-75 max-lg:w-full">
          <div className="flex flex-col gap-y-5 w-full">
            <h1 className="h-12.5 flex items-center w-full justify-center bg-[#3E7C7F] text-white cursor-pointer rounded-lg">
              გააგზავნეთ CV
            </h1>
            <div className="bg-[#F5F7FC] p-5 flex flex-col gap-y-5 w-full rounded-lg self-start">
              <h1 className="">ვაკანსიის დეტალები</h1>
              <div className="flex items-center gap-5">
                <div className="h-10 flex items-start justify-center text-[25px] text-[#3E7C7F]">
                  <CiLocationOn />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">ადგილმდებარეობა:</p>
                  <p className="text-[#696969] text-[14px]">
                    {vacancy?.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="h-10 flex items-start justify-center text-[25px] text-[#3E7C7F]">
                  <CiTimer />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">სამუშაო საათები:</p>
                  <p className="text-[#696969] text-[14px]">
                    {vacancy?.start_time} -{vacancy?.end_time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="h-10 flex items-start justify-center text-[25px] text-[#3E7C7F]">
                  <BsCashCoin />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">თანხა:</p>
                  <p className="text-[#696969] text-[14px]">
                    {vacancy?.salary}₾
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="h-10 flex items-start justify-center text-[25px] text-[#3E7C7F]">
                  <CiCalendar />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">გამოქვეყნდა:</p>
                  <p className="text-[#696969] text-[14px]">
                    {dayjs(vacancy?.date).format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="h-10 flex items-start justify-center text-[25px] text-[#3E7C7F]">
                  <GiSandsOfTime />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">ვაკანსია აქტიურია:</p>
                  <p className="text-[#696969] text-[14px]">
                    {dayjs(vacancy?.term).format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
            </div>
            <Link
              href={`/employee/1`}
              className="bg-[#F5F7FC] p-5 flex items-center gap-5 rounded-lg"
            >
              <div className="w-12.5 h-12.5 flex items-center justify-center rounded-lg overflow-hidden relative bg-[#E8E8E8]">
                {false ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${vacancy}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <MdOutlineBusinessCenter className="text-[40px]" />
                )}
              </div>
              <div className="flex flex-col">
                <p>{vacancy?.companyName}</p>
                <p className="text-[#3E7C7F] text-[14px]">კომპანიის პროფილი</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 mt-25 ">
        <h1 className="text-[26px] font-semibold">მსგავსი ვაკანსიები</h1>

        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-5 ">
          {vacancies.map((item: any) => (
            <Link
              href={`/vacancies/${item.id}`}
              key={item.id}
              className={`flex flex-col items-center gap-y-2.5 rounded-lg py-10 cursor-pointer max-sm:py-5 border border-gray-200 relative shadow-md hover:shadow-lg hover:scale-105 duration-150`}
            >
              <p
                className={`absolute z-1 top-2.5 left-0 px-3.75 max-sm:px-2.5 py-0.75 text-[14px] bg-[#34a85352] text-[#34A853] rounded-r-full`}
              >
                პრემიუმი
              </p>
              <div className="w-17.5 h-17.5 flex items-center justify-center rounded-full overflow-hidden relative bg-[#E8E8E8]">
                {item.company?.profileImg ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${vacancy}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <MdOutlineBusinessCenter className="text-[30px]" />
                )}
              </div>
              <p className="text-[14px] text-[#34A853]">{item.companyName}</p>
              <p className="font-semibold text-center">{item.position}</p>
              <div className="flex items-center gap-1.25 text-[#696969]">
                <CiLocationOn />
                <p className="text-[14px]">{item.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
