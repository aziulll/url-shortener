import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlShortenerService {
  private urls: { [key: string]: string } = {};
  private baseUrl: string = 'http://encurt/'; 

  shortenUrl(originalUrl: string): string {
    const shortCode = Math.random().toString(36).substring(2, 8); 
    this.urls[shortCode] = originalUrl; 
    return `${this.baseUrl}${shortCode}`;
  }

  redirectToOriginal(shortCode: string): string | null {
    const originalUrl = this.urls[shortCode];
    if (originalUrl) {
      return originalUrl; 
    }
    return null;
  }
}
