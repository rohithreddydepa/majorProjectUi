import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiderBarComponent } from './sider-bar/sider-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IntoductionComponent } from './intoduction/intoduction.component';
import { PredictComponent } from './predict/predict.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { MetricsComponent } from './metrics/metrics.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { GraphComponent } from './graphs/graph/graph.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    AppComponent,
    SiderBarComponent,
    IntoductionComponent,
    PredictComponent,
    AnalysisComponent,
    MetricsComponent,
    GraphsComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    CardModule,
    SkeletonModule,
    FormsModule,
    InputTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
