import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { GraphsComponent } from './graphs/graphs.component';
import { IntoductionComponent } from './intoduction/intoduction.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  { path: '', component: IntoductionComponent },
  { path: 'predict', component: PredictComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
