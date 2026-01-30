import { Suspense } from "react";
import VacanciesClient from "./VacanciesClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div>იტვირთება...</div>}>
      <VacanciesClient />
    </Suspense>
  );
}
