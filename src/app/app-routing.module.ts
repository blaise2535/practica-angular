import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresComponent } from './profesores/profesores.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'profesores', component: ProfesoresComponent},
  {path:'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
