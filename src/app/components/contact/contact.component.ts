import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/gustavo-cestero-181b3b196', '_blank');
  }

  get email(): string {
    return 'gcestero456@gmail.com';
  }
}
