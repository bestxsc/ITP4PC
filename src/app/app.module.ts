import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RankPageComponent } from './rank-page/rank-page.component';
import { AdminComponent } from './admin/admin.component';

import { AdminMainPageComponent } from './app-admin/admin-main-page/admin-main-page.component';
import {AdminTestLibraryComponent} from './app-admin/admin-test-library/admin-test-library.component';
import {AdminPersonalDataComponent} from './app-admin/admin-personal-data/admin-personal-data.component';
import {AdminPersonalComponent} from './app-admin/admin-personal-data/admin-personal-data.component';
import {AdminPersonalSafeComponent} from './app-admin/admin-personal-data/admin-personal-data.component';
import {AdminClassManagementComponent} from './app-admin/admin-class-management/admin-class-management.component';
import {AdminTestComponent} from './app-admin/admin-test/admin-test.component';
import {AdminCreateClassComponent} from './app-admin/admin-class-management/admin-class-management.component';
import { TextPageComponent } from './text-page/text-page.component';
import { SingleSelectQuestionComponent } from './single-select-question/single-select-question.component';


registerLocaleData(zh);

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'problems', component: ProblemsPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'problem', component: SingleProblemPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'text', component: TextPageComponent},


  // admin
  {path: 'admin-main-page', component: AdminMainPageComponent, children : [
      {path: 'admin-test-library', component: AdminTestLibraryComponent},
      {path: 'admin-class-management', component: AdminClassManagementComponent, children: [
          {path: 'admin-create-class', component: AdminCreateClassComponent},
        ]},
      {path: 'admin-test', component: AdminTestComponent},
      {path: 'admin-personal-data', component: AdminPersonalDataComponent, children: [
          {path: 'admin-personal-data-1', component: AdminPersonalComponent},
          {path: 'admin-personal-data-2', component: AdminPersonalSafeComponent}
        ]},
    ]
  }


];

@NgModule({
  declarations: [
    AppComponent,
    SingleProblemPageComponent,
    ProblemsPageComponent,
    MainPageComponent,
    AboutPageComponent,
    NavigationComponent,
    FooterComponent,
    RegisterComponent,
    RankPageComponent,
    AdminComponent,
    AdminMainPageComponent,
    AdminClassManagementComponent,
    AdminPersonalDataComponent,
    AdminTestComponent,
    AdminTestLibraryComponent,

    AdminMainPageComponent,
    AdminTestLibraryComponent,
    AdminPersonalDataComponent,
    AdminPersonalComponent,
    AdminPersonalSafeComponent,
    AdminClassManagementComponent,
    AdminTestComponent,
    AdminCreateClassComponent,
    LoginComponent,
    TextPageComponent,
    SingleSelectQuestionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
