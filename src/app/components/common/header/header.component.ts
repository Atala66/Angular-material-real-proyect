import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
   public sideNavOpen: false;

  constructor(
    private routeSrv: Router
  ) { }

  ngOnInit() { }

  public navigateTo(route) {
    this.routeSrv.navigate([route]);

  }

  private toggleSideNav() {

  }


}
