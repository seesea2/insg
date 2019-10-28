import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bStaffLogin: boolean;
  uid: string;
  pwd: string;
  errMsg: string;

  constructor(private usersService: UsersService, private router: Router) {
    console.log('routes.url : ', router);
  }

  ngOnInit() {
    this.uid = '';
    this.pwd = '';
    this.errMsg = '';
  }

  login(uid: string, pwd: string) {
    this.usersService.login(uid, pwd).subscribe(
      data => {
        this.errMsg = '';
        console.log('login succeed: ', data);

        this.usersService.sendLoginStatus(true);
        if (data.bStaff) {
          this.router.navigate(['/staffs']);
        } else {
          this.router.navigate(['/gifts']);
        }
      },
      err => {
        this.errMsg = err;
        console.error('login failed, ', err);
        this.usersService.sendLoginStatus(false);
      }
    );
  }
}
