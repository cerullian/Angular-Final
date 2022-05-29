import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListcountriesComponent } from './http/listcountries/listcountries.component';
import { CountryComponent } from './http/country/country.component';
import { AddtechComponent } from './tech/addtech/addtech.component';
import { CategsComponent } from './tech/categs/categs.component';
import { ListtechComponent } from './tech/listtech/listtech.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'addtech', component: AddtechComponent},
  {path:'categs', component: CategsComponent},
  {path:'listcountries', component: ListcountriesComponent},
  {path:'techs/:id', component: ListtechComponent},
  {path:'country/:id', component: CountryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListcountriesComponent,
    CountryComponent,
    AddtechComponent,
    CategsComponent,
    ListtechComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
