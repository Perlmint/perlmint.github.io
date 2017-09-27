import { Injectable } from '@angular/core';
import { Opensource } from './opensource';

@Injectable()
export class OpensourcesService {
  public async getContributions() {
    const url = "/assets/resume/opensources.json";
    const resp = await fetch(url);
    const data: Opensource[] = await resp.json();
    return data;
  }
}
