import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.view.pug',
  styleUrls: ['./header.style.scss']
})
export class HeaderComponent {
  @Input() title: string;

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['drivers']);
  }
}
