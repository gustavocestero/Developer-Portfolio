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
  styleUrls: ['./projects.component.scss']
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
    {
      name: 'Sales App Data Engineering Project',
      description: 'This project focuses on unifying different data sources from several file formats (JSON, YAML, CSV, and XML) and performing data analysis, which I have done through a jupyter notebook environment. The goal of the project was to ingest, match, and persist the data for further analysis, with Jupyter Notebook as the chosen environment for its clean code presentation and data visualization capabilities.',
      technologies: ['Python', 'Jupyter Notebook', 'Git'],
      src: './assets/projects/desktop-wallpaper-data-science-data-visualization.jpg',
      link: 'https://github.com/gustavocestero/-Sales-app-Data-Engineering-Project',
    },
    
  ];
}
