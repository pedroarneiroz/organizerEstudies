import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "interpolation", component: InterpolationComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
