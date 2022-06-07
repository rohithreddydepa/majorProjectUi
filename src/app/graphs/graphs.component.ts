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
}
