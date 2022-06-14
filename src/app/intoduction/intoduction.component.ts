import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-intoduction',
  templateUrl: './intoduction.component.html',
  styleUrls: ['./intoduction.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntoductionComponent implements OnInit {
  constructor() {}
  events: any[] = [];
  align = 'alternate';
  toggle(data: number) {
    this.events[data].showMore = !this.events[data].showMore;
  }
  ngOnInit() {
    console.log(window.innerWidth);
    if (window.innerWidth < 500) {
      this.align = '';
    }

    this.events = [
      {
        status: 'Data preprocessing',
        id: '0',
        icon: PrimeIcons.CIRCLE,
        date: '',
        showMore: true,
        data: 'Data preprocessing is the first and foremost step before feeding the data to the machine learning model.Because the algorithms learn from the data and it is heavily depends on it. Some of the data preprocessing steps we used are removing html tags and punctuation marks, converting all letters to lower case etc. for the better prediction of tags.',
      },
      {
        status: 'Training the model',
        id: '1',
        icon: PrimeIcons.CIRCLE,
        date: '',
        showMore: true,
        data: 'This step is the crucial in the project. The model training step involves exploring, analysing and engineering new features, splitting dataset, making the choice for the most suitable algorithm and then validating the created model for the prediction. We have split the dataset 80-20 to train and test the model and decided to go with the OneVsRest classifier algorithm of LinearSVC owing to the size and complexity of the dataset.',
      },
      {
        status: 'Result analysis',
        id: '2',
        icon: PrimeIcons.CIRCLE,
        date: '',
        showMore: true,
        data: 'This step is important to interpret the results achieved. The various performance measures of Machine Learning like F1 Score, Precision, Recall and Hamming Loss(HL) have been studied. These performance measures have been compared for the 3 different categories-Title based prediction, Body based prediction and Body and Title based prediction. Graphs are displayed for easy visual interpretation. As the performance of model developed based on both the title and body is best we built the model based on it ',
      },
      {
        status: 'User Interface',
        id: '3',
        icon: PrimeIcons.CIRCLE,
        date: '',
        showMore: true,
        data: 'Ease of use of the given model is equally important and one of the major requirements. We have used various front end technologies like Angular, HTML, CSS, Bootstrap etc to improve the user interface. This step is quite necessary as we need to predict and display the results to the user in as simple as possible',
      },
    ];
  }
}
