import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {AboutComponent} from "./components/about/about.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent,ProjectsComponent, ProfileComponent, HeaderComponent, ExperienceComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
}
