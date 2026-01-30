export interface Vacancy {
  id: string;
  salary: string;
  city: string;
  address: string;
  workType: string;
  position: string;
  premium: number;
  description: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  startTime: string;
  endTime: string;
  company: Company;
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
  vacancies: Vacancy[];
  createdAt: string;
  updatedAt: string;
}
