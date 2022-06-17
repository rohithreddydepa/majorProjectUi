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
  error = false;
  apiError = false;
  dTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  ngOnInit(): void {
    this.isLoading = true;
    this.apiError = false;
    this.http.getTheme().subscribe((data) => {
      this.dTheme = data;
      // console.log(this.dTheme);
    });
    this.http.get('/metric', { params: { model: this.tableName } }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.labels = response.labels;
        this.values = response.values;
      },
      error: (err: any) => {
        this.isLoading = false;
        this.error = true;
        this.apiError = true;
      },
    });
  }
}
// this.http.get(`/graphs`,{params: })
