import { IsOptional, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class CreateVacancyDto {
    @IsString()
    description: string;

    @IsString()
    address: string;
    
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
    
    @IsUUID()
    cityId: string;
    
    @IsUUID()
    categoryId: string;
    
    @IsUUID()
    workTypeId: string;
    
    @IsUUID()
    salaryTypeId: string;
}
