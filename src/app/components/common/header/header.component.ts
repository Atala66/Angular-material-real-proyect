import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
 @Input() navLinks: any[];
 @Input() sessionOwner: string;
 @Input() avatar: string;

  constructor(
    private routeSrv: Router
  ) { }

  ngOnInit() { }




  public navigateTo(route) {
    this.routeSrv.navigate([route]);

  }



}
