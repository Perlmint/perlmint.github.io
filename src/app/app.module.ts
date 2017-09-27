import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatListModule, MatExpansionModule, MatChipsModule,
  MatGridListModule
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

const router: Route[] = [
  { path: 'resume', component: ResumePageComponent }
];

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(values?: any[]) {
    return values.slice().reverse();
  }
}

@Pipe({
  name: 'badge'
})
export class BadgePipe implements PipeTransform {
  transform(value: string) {
    return `/assets/badge/${value.toLowerCase()}.svg`
  }
}

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {
  transform(value: string | undefined, defaultValue: string) {
    return value == null ? defaultValue : value;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    ReversePipe,
    BadgePipe,
    DefaultPipe
  ],
  exports: [
    RouterModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatGridListModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
