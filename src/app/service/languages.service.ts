import { Injectable } from '@angular/core';

@Injectable()
export class LanguagesService {
  get() {
    return ['en', 'de', 'fr'];
  }
}
