import CompaniesGrid from "./components/companies grid/companiesGrid";
import MainBanner from "./components/main banner/mainBanner";
import PartnersSlider from "./components/sliders/partnersSlider";
import VacanciesList from "./components/vacancies list/vacanciesList";

export default async function Home() {
  let companies = [];
  let vacancies = [];

  try {
    const companiesRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/companies`,
      { cache: "no-store" },
    );
    if (!companiesRes.ok) throw new Error("Failed to fetch companies");
    companies = await companiesRes.json();
  } catch (err) {
    console.error("Companies fetch error:", err);
  }

  try {
    const vacanciesRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vacancies`,
      { cache: "no-store" },
    );
    if (!vacanciesRes.ok) throw new Error("Failed to fetch vacancies");
    vacancies = await vacanciesRes.json();
  } catch (err) {
    console.error("Vacancies fetch error:", err);
  }

  return (
    <div className="flex flex-col gap-47.5 max-md:gap-0 overflow-hidden">
      {/* main banner */}
      <MainBanner />
      <div className="px-[17%] max-lg:px-12.5 max-sm:px-4 flex flex-col gap-25 max-md:-mt-25">
        {/* companies grid */}
        <CompaniesGrid companies={companies} />
        {/* vacancies list */}
        <VacanciesList vacancies={vacancies} />
      </div>
      {/* partners */}
      <PartnersSlider />
    </div>
  );
}
