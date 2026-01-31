import { Category } from 'src/category/entity/category.entity';
import { City } from 'src/city/entity/city.entity';
import { Company } from 'src/companies/entity/company.entity';
import { SalaryType } from 'src/salary-type/entity/salary-type.entity';
import { WorkType } from 'src/work-type/entity/work-type.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class Vacancy {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text' })
    address: string;

    @Column({ type: 'time' })
    endTime: string;

    @Column({ type: 'time' })
    startTime: string;

    @Column({ type: 'text' })
    facebookUrl: string;

    @Column({ type: 'text' })
    linkedinUrl: string;

    @Column({ length: 100 })
    salary: string;

    @Column({ type: 'int', default: 0 })
    premium: number;

    @ManyToOne(() => City, (city) => city.vacancies, {
        onDelete: 'CASCADE',
        eager: true,
    })
    city: City;

    @ManyToOne(() => Category, (category) => category.vacancies, {
        onDelete: 'CASCADE',
        eager: true,
    })
    category: Category;

    @ManyToOne(() => Company, (company) => company.vacancies, {
        onDelete: 'CASCADE',
        eager: true,
    })
    company: Company;

    @ManyToOne(() => WorkType, (workType) => workType.vacancies, {
        onDelete: 'CASCADE',
        eager: true,
    })
    workType: WorkType;

    @ManyToOne(() => SalaryType, (salaryType) => salaryType.vacancies, {
        onDelete: 'CASCADE',
        eager: true,
    })
    salaryType: SalaryType;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
