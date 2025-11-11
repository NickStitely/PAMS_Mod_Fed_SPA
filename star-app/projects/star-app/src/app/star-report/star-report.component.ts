import { Component, OnInit } from '@angular/core';
import { UserService } from '@NickStitely/my-lib';

@Component({
  selector: 'app-star-report',
  templateUrl: './star-report.component.html',
  styleUrls: ['./star-report.component.scss'],
  standalone: false
})
export class StarReportComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
