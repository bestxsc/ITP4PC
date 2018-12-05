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
import { RankPageComponent } from './rank-page/rank-page.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMainPageComponent } from './admin/admin-main-page/admin-main-page.component';
import { AdminClassManagementComponent } from './admin/admin-class-management/admin-class-management.component';
import { AdminPersonalDataComponent } from './admin/admin-personal-data/admin-personal-data.component';
import { AdminTestComponent } from './admin/admin-test/admin-test.component';
import { AdminTestLibraryComponent } from './admin/admin-test-library/admin-test-library.component';

registerLocaleData(zh);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'problems', component: ProblemsPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'problem', component: SingleProblemPageComponent},
  { path: 'register', component: RegisterComponent}
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
    AdminTestLibraryComponent
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
