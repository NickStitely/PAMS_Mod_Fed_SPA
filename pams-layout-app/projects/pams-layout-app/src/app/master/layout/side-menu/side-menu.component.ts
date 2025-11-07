import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isExpanded = !this.isExpanded;
  }
}
