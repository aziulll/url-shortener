import { Module } from '@nestjs/common';
import { UrlShortenerController } from './app.controller';
import { UrlShortenerService } from './app.service';

@Module({
  imports: [],
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService],
})
export class AppModule {}
