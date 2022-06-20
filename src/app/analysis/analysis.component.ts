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
  isApiFailed = false;
  isLoading = false;
  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('/preprocessing').subscribe({
      next: (res) => {
        this.data = {
          labels: Object.keys(res),
          datasets: [
            {
              data: Object.values(res),
              backgroundColor: [
                '#123b5e',
                '#1f68a5',
                '#2d95ec',
                '#6cb4f1',
                '#abd4f7',
                '#eaf4fd',
                '#123b5e',
                '#1f68a5',
                '#2d95ec',
                '#6cb4f1',
                '#abd4f7',
                '#eaf4fd',
              ],
            },
          ],
        };
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.isApiFailed = true;
      },
    });
  }
}
