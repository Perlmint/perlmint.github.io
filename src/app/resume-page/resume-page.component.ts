import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { PersonalService } from '../personal.service';
import { LanguagesService } from '../languages.service';
import { SkillsService } from '../skills.service';
import { OpensourcesService } from '../opensources.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
  providers: [
    ExperienceService, PersonalService,
    LanguagesService, SkillsService,
    OpensourcesService
  ]
})
export class ResumePageComponent implements OnInit {
  experiences = [];
  info = [];
  skills = [];
  languages = [];
  opensources = [];

  constructor(
    private experienceService: ExperienceService,
    private personalService: PersonalService,
    private skillsService: SkillsService,
    private languagesService: LanguagesService,
    private opensourcesServices: OpensourcesService,
    private _cdf: ChangeDetectorRef
  ) { }

  async getExperiences() {
    for await (const exp of this.experienceService.getExperiences()) {
      this.experiences = this.experiences.concat(exp);
      this._cdf.detectChanges();
    }
  }

  async getPersonalInfo() {
    this.info = await this.personalService.getPersonalInfo();
    this._cdf.detectChanges();
  }

  async getSkills() {
    this.skills = await this.skillsService.getSkills();
  }

  async getLanguages() {
    this.languages = await this.languagesService.getLanguages();
  }

  async getOpensources() {
    this.opensources = await this.opensourcesServices.getContributions();
  }

  ngOnInit() {
    this.getExperiences();
    this.getPersonalInfo();
    this.getSkills();
    this.getLanguages();
    this.getOpensources();
  }
}
