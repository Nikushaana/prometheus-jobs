import CompaniesGrid from "./components/companies grid/companiesGrid";
import MainBanner from "./components/main banner/mainBanner";
import PartnersSlider from "./components/sliders/partnersSlider";
import VacanciesList from "./components/vacancies list/vacanciesList";

export default function Home() {
  return (
    <div className="flex flex-col gap-47.5 max-md:gap-0 overflow-hidden">
      {/* main banner */}
      <MainBanner />
      <div className="px-[17%] max-lg:px-12.5 max-sm:px-4 flex flex-col gap-25 max-md:-mt-25">
        {/* companies grid */}
        <CompaniesGrid />
        {/* vacancies list */}
        <VacanciesList />
      </div>
      {/* partners */}
      <PartnersSlider /> 
    </div>
  );
}
