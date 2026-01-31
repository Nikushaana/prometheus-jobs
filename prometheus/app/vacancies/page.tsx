import { Suspense } from "react";
import VacanciesClient from "./VacanciesClient";

export const dynamic = "force-dynamic";

export default async function Page() {
  let cities = [];
  let categories = [];
  let salaryTypes = [];
  let workTypes = [];

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

  try {
    const salaryTypesRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/salary-type`,
      { cache: "no-store" },
    );
    if (!salaryTypesRes.ok) throw new Error("Failed to fetch salaryTypes");
    salaryTypes = await salaryTypesRes.json();
  } catch (err) {
    console.error("SalaryTypes fetch error:", err);
  }

  try {
    const WorkTypesRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/work-type`,
      { cache: "no-store" },
    );
    if (!WorkTypesRes.ok) throw new Error("Failed to fetch WorkTypes");
    workTypes = await WorkTypesRes.json();
  } catch (err) {
    console.error("WorkTypes fetch error:", err);
  }

  return (
    <Suspense fallback={<div>იტვირთება...</div>}>
      <VacanciesClient
        cities={cities}
        categories={categories}
        salaryTypes={salaryTypes}
        workTypes={workTypes}
      />
    </Suspense>
  );
}
