import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GaugeModule} from "angular-gauge";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import {HttpHeaderInterceptor} from "./interceptors/http-headers-interceptor";
import {HttpErrorInterceptor} from "./interceptors/http-errors-interceptor";
import {HttpParamsInterceptor} from "./interceptors/http-params-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    GaugeModule.forRoot()




  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi:true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass:HttpErrorInterceptor,
      multi:true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass:HttpParamsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
