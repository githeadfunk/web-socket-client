import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    private auth:AuthService
    ) { }

  ngOnInit() {
  }

  private home(){
    this.router.navigate(['/']);
  }

  private log(){
  }

}
