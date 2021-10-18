import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isConnected: boolean;
  isAddPage: Boolean;
  tokenSub: Subscription;
  routerEventSub: Subscription;


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

    this.tokenSub = this.authService
      .token
      .subscribe((token: string) => {

          this.isConnected = !!token;
        }
      );
  }

  onClickSignout() {
    this.authService.signout().then(() => {
      this.router.navigateByUrl('auth');
    })
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
    this.routerEventSub.unsubscribe();
  }

}
