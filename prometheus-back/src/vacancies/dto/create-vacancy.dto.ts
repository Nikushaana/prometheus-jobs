import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class CreateVacancyDto {
    @IsString()
    @IsNotEmpty()
    position: string;

    @IsString()
    description: string;

    @IsString()
    city: string;

    @IsString()
    address: string;

    @IsString()
    workType: string;

    @IsString()
    endTime: string;

    @IsString()
    startTime: string;

    @IsString()
    facebookUrl: string;

    @IsString()
    linkedinUrl: string;

    @IsString()
    salary: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    premium?: number;

    @IsUUID()
    companyId: string;
}
