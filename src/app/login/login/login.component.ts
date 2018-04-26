import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private id: string;
  private pass: string;

  constructor(private service: AuthService,
    private router: Router) {
    this.id = '';
    this.pass = '';
  }

  ngOnInit() {
  }

  authentication(): void {
    const isLogin = this.service.signIn(this.id, this.pass);
    if (isLogin) {
      this.router.navigate(['/todo']);
    }
    this.pass = '';
  }
}
