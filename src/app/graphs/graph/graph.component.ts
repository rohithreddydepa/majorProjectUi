import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GraphComponent implements OnInit {
  @Input() type: string = '';
  isLoading = false;
  data = {};
  error = false;
  apiError = false;
  constructor(public http: HttpService) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.apiError = false;
    this.http.get(`/graph`, { params: { type: this.type } }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.data = {
          labels: ['Title', 'Body', 'TitleBody'],
          datasets: [
            {
              label: this.type,
              backgroundColor:
                this.type === 'Precision' ? '#FFA726' : '#42A5F5',
              data: response.data,
            },
          ],
        };
      },
      error: (err) => {
        this.isLoading = false;
        this.apiError = true;
        err = true;
      },
    });
  }
}
