import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {AboutComponent} from "./components/about/about.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent,],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
}
