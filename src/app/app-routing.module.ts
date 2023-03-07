import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { MapPageComponent } from './map-page/map-page.component';

const routes: Routes = [
  {
    path:'',
    component:MapPageComponent,
    pathMatch:'full'
  }
  ,{
    path:'home',
    component:MapPageComponent
  },
  {
    path:'**',
    component:ErrorComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
