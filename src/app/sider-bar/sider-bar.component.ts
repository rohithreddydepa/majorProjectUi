import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SiderBarComponent implements OnInit {
  constructor() {}
  dockItems: any[]=[];

    ngOnInit() {
        this.dockItems = [
            {
                label: 'Home',
                icon: "fs-4 bi-house-door",
                active:false,
                link:'/'
            },
            {
                label: 'Analysis',
                icon: "fs-4 bi-search",
                active:false,
                link:'/analysis'
            },
            {
                label: 'Metrics',
                icon: "fs-4 bi-speedometer2",
                active:false,
                link:'/metrics'
            },
            {
                label: 'Graphs',
                icon: "fs-4 bi-bar-chart",
                active:false,
                link:'/graphs'
            },
            {
                label: 'Predict',
                icon: "fs-4 bi-graph-up-arrow",
                active:false,
                link:'/predict'
            }
        ];
    }
  onClick(index: number) {
    for(let i=0;i<5;i++) this.dockItems[i].active=false;
    this.dockItems[index].active=true;
  }
}
