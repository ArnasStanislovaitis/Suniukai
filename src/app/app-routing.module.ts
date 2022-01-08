import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';

const routes: Routes = [
  {path:"",component:PagrindinisComponent},
  {path: "documentation", component:DocumentationComponent},
  {path: '**', component:PagrindinisComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
