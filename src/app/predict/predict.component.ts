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
  error = false;
  apiError = false;
  tagPredict =[];
  enableMsg = false;
  errMsg = '';
  placeHolder = 'Enter the text to predict';
  predictClick=false;
  constructor(private http: HttpService) {}
  predict() {
    this.predictClick=false;
    if (this.inputText.length == 0) {
      this.error = true;
      this.showMsg('Input should not be empty');
    } else if (/^\d+$/.test(this.inputText)) {
      this.error = true;
      this.showMsg('Input should not have all numbers');
    } else {
      this.http
        .get('/predictTag', { params: { q: this.inputText } })
        .subscribe({
          next: (response: any) => {
            this.tagPredict = response.tags
            this.predictClick=true;
          },
          error: (err: any) => {
            this.apiError = true;
            this.showMsg('Api Failed');
          },
        });
    }
  }
  showMsg(msg: string) {
    this.enableMsg = true;
    this.errMsg = msg;
    setTimeout(() => {
      this.enableMsg = false;
    }, 2000);
  }
  ngOnInit(): void {}
}
