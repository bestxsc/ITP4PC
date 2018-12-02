import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { SingleProblemPageComponent } from './single-problem-page/single-problem-page.component';
import { ProblemsPageComponent } from './problems-page/problems-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(zh);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'problems', component: ProblemsPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'problem', component: SingleProblemPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SingleProblemPageComponent,
    ProblemsPageComponent,
    MainPageComponent,
    AboutPageComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
