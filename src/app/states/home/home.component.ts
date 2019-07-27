import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public navLinks: any [];
  public sessionOwner: string;
  public avatar: string;

  constructor(
    private homeSrv: HomeService
  ) { }

  ngOnInit() {
   this.configNavbar();
  }



  public configNavbar() {
       this.sessionOwner = 'Lucy';
       this.avatar = '../../../assets/images/avatar.png';
       this.getNavbarLinks();
  }

  public getNavbarLinks() {
    this.homeSrv.gerNavbarLinks().subscribe(
      response => {
        if (response) {
          console.log('links ', response);
          this.navLinks = response.navLinks;
        }
      });
   }
}
