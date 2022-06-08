import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @Input() tableName: string = '';
  constructor(private http: HttpService) {}
  labels: any[] = [];
  values: any[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('/metrics', { params: { model: this.tableName } }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.labels = response.labels;
        this.values = response.values;
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}
// this.http.get(`/graphs`,{params: })
