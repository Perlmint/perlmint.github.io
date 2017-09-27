import { Injectable } from '@angular/core';
import { Language } from './language';

@Injectable()
export class LanguagesService {
  async getLanguages() {
    const url = "/assets/resume/languages.json";
    const resp = await fetch(url);
    const data: Language[] = await resp.json();
    return data;
  }
}
