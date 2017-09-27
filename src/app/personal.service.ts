import { Injectable } from '@angular/core';
import { Personal } from './personal';

@Injectable()
export class PersonalService {
  async getPersonalInfo() {
    const url = "/assets/resume/personal.json";
    const resp = await fetch(url);
    const data: Personal[] = await resp.json();
    return data;
  }
}
