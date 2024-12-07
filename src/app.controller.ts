import { Controller, Get, Post, Body, Param, Redirect } from '@nestjs/common';
import { UrlShortenerService } from './app.service'

@Controller('url')
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post('shorten')
  shortenUrl(@Body('url') url: string): string {
    return this.urlShortenerService.shortenUrl(url);
  }

  @Get(':shortCode')
  @Redirect()
  redirectToUrl(@Param('shortCode') shortCode: string) {
    const originalUrl = this.urlShortenerService.redirectToOriginal(shortCode);
    if (originalUrl) {
      return { url: originalUrl };
    }
    return { url: 'http://localhost:3000/404' }; 
  }
}
