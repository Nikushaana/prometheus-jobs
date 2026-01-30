import Link from "next/link";
import VacancyCard from "../cards/vacancyCard";

export default function VacanciesList() {
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
