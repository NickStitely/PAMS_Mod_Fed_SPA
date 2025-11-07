import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grants-home',
  templateUrl: './grants-home.component.html',
  styleUrls: ['./grants-home.component.scss'],
  standalone: false
})
export class GrantsHomeComponent implements OnInit {
  grantNumber: string = 'GR-2023-001';
  grantName: string = 'Community Development Grant';
  address: string = '123 Main St, Anytown, USA';
  pointOfContact: string = 'John Doe (john.doe@example.com)';

  constructor() { }

  ngOnInit(): void {
  }

}
