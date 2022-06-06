import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { IntoductionComponent } from './intoduction/intoduction.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  { path: '', component: IntoductionComponent },
  { path: 'predict', component: PredictComponent },
  { path: 'analysis', component: AnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
