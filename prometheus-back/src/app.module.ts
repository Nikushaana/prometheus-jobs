import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacanciesModule } from './vacancies/vacancies.module';
import { CompaniesModule } from './companies/companies.module';
import { CityModule } from './city/city.module';
import { CategoryModule } from './category/category.module';
import { WorkTypeModule } from './work-type/work-type.module';
import { SalaryTypeModule } from './salary-type/salary-type.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isProduction = process.env.NODE_ENV === 'production';

        if (isProduction) {
          return {
            type: 'postgres',
            url: config.get<string>('DATABASE_URL'),
            ssl: {
              rejectUnauthorized: false,
            },
            autoLoadEntities: true,
            synchronize: true,
          };
        } else {
          return {
            type: 'postgres',
            host: config.get<string>('DB_HOST'),
            port: config.get<number>('DB_PORT'),
            username: config.get<string>('DB_USER'),
            password: config.get<string>('DB_PASSWORD'),
            database: config.get<string>('DB_NAME'),
            autoLoadEntities: true,
            synchronize: true,
          };
        }
      },
    }),

    VacanciesModule,

    CompaniesModule,

    CityModule,

    CategoryModule,

    WorkTypeModule,

    SalaryTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
