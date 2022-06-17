import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SiderBarComponent implements OnInit {
  constructor(public themeSevice: HttpService, public router: Router) {}
  dockItems: any[] = [];
  dTheme = false;
  ngOnInit() {
    this.dockItems = [
      {
        label: 'Home',
        icon: 'fs-4 bi-house-door',
        link: '/',
      },
      {
        label: 'Analysis',
        icon: 'fs-4 bi-search',
        link: '/analysis',
      },
      {
        label: 'Metrics',
        icon: 'fs-4 bi-speedometer2',
        link: '/metrics',
      },
      {
        label: 'Graphs',
        icon: 'fs-4 bi-bar-chart',
        link: '/graphs',
      },
      {
        label: 'Predict',
        icon: 'fs-4 bi-graph-up-arrow',
        link: '/predict',
      },
    ];
    this.themeSevice.getTheme().subscribe((data) => {
      this.dTheme = data;
    });
  }
}
