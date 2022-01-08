import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { DocumentationComponent } from './documentation/documentation.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagrindinisComponent,
    DocumentationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
