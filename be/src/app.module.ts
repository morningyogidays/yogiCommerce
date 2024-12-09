import { mongooseFactory } from './_utils/factory/mongoose.factory';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
// import { DashboardBannerModule } from './dashboard-banner/dashboard-banner.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    MongooseModule.forRootAsync(mongooseFactory),
    ProductModule,
    // DashboardBannerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
