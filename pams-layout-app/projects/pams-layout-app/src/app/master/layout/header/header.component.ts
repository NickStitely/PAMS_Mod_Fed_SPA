import { Component, OnInit } from '@angular/core';
//import { UserService } from '@NickStitely/my-lib';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName: string = 'PAMS Application';
  userName: string = 'Nick';

  userService = {
    unique_id: 12
  }

  //constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
}
