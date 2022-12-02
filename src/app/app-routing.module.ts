import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrieveComponent } from './employeelist/retrieve/retrieve.component';

const routes: Routes = [
  {path: 'api/employees', component: RetrieveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
