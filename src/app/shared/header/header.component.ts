import { Component, OnInit, Input } from '@angular/core';
import { EnviromentService } from '../../service/enviroment.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  pageTitle: string;
  @Input()
  iconTitle: string;
  @Input()
  helpTitle: string;
  socialLinks;
  cartCounter;
  @Input()
  userStatusColor;
  constructor(private env: EnviromentService) {
      this.socialLinks = env.getLink();
   }

  ngOnInit() {
    this.cartCounter= 8;

  }

}
