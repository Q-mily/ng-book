import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  userName: string;

  constructor(private userService: UserService) {
    this.userName = "";
  }

  signIn(): void{
    this.userService.setUser({
      name: 'Nate Murry'
    });
    this.userName = this.userService.getUser().name;
    console.log(this.userName);
  }

  ngOnInit(): void {
  }

}
