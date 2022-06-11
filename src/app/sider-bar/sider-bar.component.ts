import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss'],
})
export class SiderBarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  color = [true, false, false, false, false];
  onClick(index: number) {
    this.color = [false, false, false, false, false];
    this.color[index] = true;
  }
}
