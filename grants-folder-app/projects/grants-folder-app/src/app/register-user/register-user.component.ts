import { Component, OnInit } from '@angular/core';
import { UserService } from '@NickStitely/my-lib';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  standalone: false
})
export class RegisterUserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
