import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { getMongoDBConfig } from './config/mongo.config';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoDBConfig,
    }),
    AuthModule,
    UserModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
