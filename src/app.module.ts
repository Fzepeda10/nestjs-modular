import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { DatabaseModule } from './database/database.module';
import { environments } from './environments';
import config from './config';
/* 
$env:NODE_ENV = 'prod'; npm run start:dev
*/
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UsersModule,
    ProductsModule,
    DatabaseModule,
  ],
})
export class AppModule {}
