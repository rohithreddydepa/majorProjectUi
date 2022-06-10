import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GraphsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  graphs = ['F1', 'Precision', 'Recall'];
  data = [
    'F1Score: This score will give us the harmonic mean of precision and recall. Mathematically, F1 score is the weighted average of the precision and recall. The best value of F1 would be 1 and worst would be 0.',
    'Precision: To overcome the limitations of Accuracy, Data Scientists usually use Precision, Recall and Specificity. Precision tells what proportion of positive predictions was actually correct. It achieves this by counting the samples correctly predicted as positive (TP) and dividing it by the total positive predictions, correct or incorrect (TP, FP).',
    'Recall: Recall aims at measuring what proportion of actual positives was identified correctly. It does so by dividing the correctly predicted positive samples (TP) by the total number of positives, either correctly predicted as positive or incorrectly predicted as negative (TP, FN).',
  ];
}
