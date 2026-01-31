import CompaniesGrid from "./components/companies grid/companiesGrid";
import MainBanner from "./components/main banner/mainBanner";
import PartnersSlider from "./components/sliders/partnersSlider";
import VacanciesList from "./components/vacancies list/vacanciesList";
import Reveal from "./providers/reveal";

export default async function Home() {
  let companies = [];
  let vacancies = [];
  let cities = [];
  let categories = [];

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

  try {
    const citiesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city`, {
      cache: "no-store",
    });
    if (!citiesRes.ok) throw new Error("Failed to fetch cities");
    cities = await citiesRes.json();
  } catch (err) {
    console.error("Cities fetch error:", err);
  }

  try {
    const categoriesRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category`,
      { cache: "no-store" },
    );
    if (!categoriesRes.ok) throw new Error("Failed to fetch categories");
    categories = await categoriesRes.json();
  } catch (err) {
    console.error("Categories fetch error:", err);
  }

  return (
    <div className="flex flex-col gap-47.5 max-md:gap-0 overflow-hidden">
      {/* main banner */}
      <MainBanner cities={cities} categories={categories} />
      <div className="px-[17%] max-lg:px-12.5 max-sm:px-4 flex flex-col gap-25 max-md:-mt-25">
        {/* companies grid */}
        <Reveal>
          <CompaniesGrid companies={companies} />
        </Reveal>
        {/* vacancies list */}
        <Reveal>
          <VacanciesList vacancies={vacancies} />
        </Reveal>
      </div>
      {/* partners */}
      <Reveal>
        <PartnersSlider />
      </Reveal>
    </div>
  );
}
