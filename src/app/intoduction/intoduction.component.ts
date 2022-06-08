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
        status: 'Start',
        id: '0',
        icon: PrimeIcons.CIRCLE,
        date: '15/10/2020 10:30',
        showMore: true,
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
      {
        status: 'Start',
        id: '1',
        icon: PrimeIcons.CIRCLE,
        date: '15/10/2020 10:30',
        showMore: true,
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
      {
        status: 'Start',
        id: '2',
        icon: PrimeIcons.CIRCLE,
        date: '15/10/2020 10:30',
        showMore: true,
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
    ];
  }
}
