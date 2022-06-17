import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnalysisComponent implements OnInit {
  constructor(private http: HttpService) {}
  tags = [];
  tagCount = [];
  data = {};
  ngOnInit(): void {
    this.http.get('/preprocessing').subscribe((res) => {
      this.data = {
        labels: Object.keys(res),
        datasets: [
          {
            data: Object.values(res),
            backgroundColor: [
              '#fade91',
              '#8affe0',
              '#d76df7',
              '#f54e4e',
              '#7FDBFF',
              '#9afa87',
              '#fade91',
              '#8affe0',
              '#d76df7',
              '#f54e4e',
              '#7FDBFF',
              '#9afa87',
            ],
          },
        ],
      };
    });
  }
}
