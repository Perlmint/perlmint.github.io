import { Injectable } from '@angular/core';
import { Experience } from './experiences';
import * as _ from "lodash";
import * as urljoin from "url-join";

@Injectable()
export class ExperienceService {
  public async *getExperiences() {
    const base = "/assets/resume/experiences/";
    const projectBase = "/assets/resume/projects/";
    let url: string | undefined = urljoin(base, "0001.json");
    while(url !== undefined) {
      const exp: Experience = await fetch(url).then(r => r.json());
      exp.projects = await Promise.all(_.map(
        exp.projects,
        project => fetch(urljoin(projectBase, `${project.id}.md`)).then(r => r.text()).then(t => _.assign(project, {
          desc: t
        }))
      ));
      yield exp;
      if (exp.next === undefined) {
        break;
      }
      url = urljoin(base, exp.next);
    }
  }
}
