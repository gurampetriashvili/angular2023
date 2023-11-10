import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor(public sharedService: SharedService) {

  }

  newsClicked() {

    console.log(this.sharedService.startingText);

  }

}
