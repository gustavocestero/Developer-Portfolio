import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/tech-stack.webp',
      link: 'https://github.com/gustavocestero/Developer-Portfolio',
    },
    {
      name: 'Facial Recognition for Masked Users',
      description: 'Facial Recognition is a popular form of authentication which unexpectedly became hindered by the usage of masks during the Covid-19 Pandemic. This Senior porject made during my undergrad years aim to fix this issue by by combining traditional machine learning techniques with handcrafted facial landmark recognition changes.',
      technologies: ['Python', 'Jupyter Notebook', 'Git'],
      src: './assets/projects/masked-facial-rec.png',
      link: 'https://github.com/gustavocestero/Facial-Recognition-for-Masked-Users',
    },
    
  ];
}
