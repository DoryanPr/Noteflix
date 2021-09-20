import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isConnected: boolean;
  isAddPage: Boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onClickSignout() {
    this.authService.signout().then(() => {
      this.router.navigateByUrl('auth');
    })
  }
}
