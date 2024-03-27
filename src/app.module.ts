import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: ' ',
      database: 'postgres',
      entities: [],
      synchronize: true,
    }),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
