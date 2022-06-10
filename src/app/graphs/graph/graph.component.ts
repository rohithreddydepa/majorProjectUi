import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { graph } from 'src/app/models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GraphComponent implements OnInit {
  @Input() type: string = '';
  isLoading = false;
  data: graph = {} as any;
  error = false;
  apiError = false;
  constructor(public http: HttpService) {}
  ngOnInit() {
    this.isLoading = true;
    this.getData();
  }
  getData() {
    this.isLoading = true;
    this.apiError = false;
    this.http.get(`/graphs`, { params: { type: this.type } }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.data = response;
      },
      error: (err) => {
        this.isLoading = false;
        this.apiError = true;
        err = true;
      },
    });
  }
}
