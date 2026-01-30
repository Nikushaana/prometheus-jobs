import { Company } from 'src/companies/entity/company.entity';
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

    @Column({ length: 255 })
    position: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ length: 100 })
    city: string;

    @Column({ type: 'text' })
    address: string;

    @Column({ length: 50 })
    workType: string;

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

    @ManyToOne(() => Company, (company) => company.vacancies, {
        onDelete: 'CASCADE',
        eager: true,
    })
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
