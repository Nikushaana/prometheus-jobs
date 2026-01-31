export interface City {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface SalaryType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface Vacancy {
  id: string;
  description: string;
  address: string;
  startTime: string;
  endTime: string;
  facebookUrl: string;
  linkedinUrl: string;
  salary: string;
  premium: number;
  city: City;
  category: Category;
  company: Company;
  workType: WorkType;
  salaryType: SalaryType;
  createdAt: string;
  updatedAt: string;
}