import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PredictComponent implements OnInit {
  inputText = '';
  placeHolder = 'Enter the text to predict';
  error = false;
  isLoading = false;
  apiError = false;
  tagPredict = '';
  constructor(private http: HttpService) {}
  predict() {
    if (this.inputText.length == 0) {
      this.error = true;
      alert('Input should not be empty');
    } else if (/^\d+$/.test(this.inputText)) {
      this.error = true;
      alert('Input should not have all numbers');
    } else {
      console.log(this.inputText);
      this.http
        .get('/predict', { params: { data: this.inputText } })
        .subscribe({
          next: (response: any) => {
            this.tagPredict = response;
          },
          error: (err: any) => {
            this.apiError = true;
          },
        });
    }
    console.log(this.inputText);
  }
  ngOnInit(): void {}
}
