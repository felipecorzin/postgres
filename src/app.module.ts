import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ActivitiesModule } from './activities/activities.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      username: 'postgres',
      password: 'postgres',
      database: 'hostal_postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
