import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiderBarComponent } from './sider-bar/sider-bar.component';

import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { IntoductionComponent } from './intoduction/intoduction.component';
import { PredictComponent } from './predict/predict.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { MetricsComponent } from './metrics/metrics.component';
import { GraphsComponent } from './graphs/graphs.component';
@NgModule({
  declarations: [AppComponent, SiderBarComponent, IntoductionComponent, PredictComponent, AnalysisComponent, MetricsComponent, GraphsComponent],
  imports: [BrowserModule, AppRoutingModule, CardModule, SkeletonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
