import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../css/global/global.component.css']
})
export class FooterComponent implements OnInit {

  // overflowHeight: boolean = false;
  // overflowWidth: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(window.screen)
    // if (window.screen.height === 955) {
    //   this.overflowHeight = true;
    // }
    // if (window.screen.width == 360) {
    //   this.overflowWidth = true;
    // }
  }

}
