import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss'],
})
export class SiderBarComponent implements OnInit {
  constructor(router: Router) {
    console.log(router.routerState.snapshot.url);
  }
  ngOnInit(): void {}
}
