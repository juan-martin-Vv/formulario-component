import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuPageFormComponent } from './tu-page-form/tu-page-form.component';

const routes: Routes = [
  {path:"",component: TuPageFormComponent},
  {
    path:"**",redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
