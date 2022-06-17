import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'majorUi';
  themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
  dTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  constructor(
    public themeSevice: HttpService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
    this.themeSevice.getTheme().subscribe((data) => {
      this.dTheme = data;
    });
    this.setTheme();
  }
  changeTheme() {
    this.themeSevice.setTheme(!this.dTheme);
    this.setTheme();
  }
  setTheme() {
    if (this.dTheme) {
      this.themeLink.href = 'dark.css';
    } else {
      this.themeLink.href = 'light.css';
    }
  }
}
