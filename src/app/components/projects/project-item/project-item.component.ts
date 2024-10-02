import {Component, Input} from '@angular/core';
import {Project} from "../projects.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-item',
  standalone: true,
  templateUrl: './project-item.component.html',
  styleUrls: ['../projects.component.scss'],
  imports: [CommonModule] // Add CommonModule here
})
export class ProjectItemComponent {

  @Input({required: true}) project!: Project;
}
