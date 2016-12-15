import { Component } from '@angular/core';
import 'rxjs/Rx';
// this might not be working with angular-cli
require('!!style!css!sass!./main.scss'); // Magically to load the global scss file through webpack without style encapsulation

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './navBar/nav-bar.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
