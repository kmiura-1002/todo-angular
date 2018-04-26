import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private service: AuthService,
    private router: Router) { }

  signOut(): void {
    this.service.signOut();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
