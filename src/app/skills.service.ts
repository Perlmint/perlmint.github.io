import { Injectable } from '@angular/core';
import { Skill } from './skill';

@Injectable()
export class SkillsService {
  public async getSkills() {
    const url = "/assets/resume/skills.json";
    const resp = await fetch(url);
    const data: Skill[] = await resp.json();
    return data;
  }
}
