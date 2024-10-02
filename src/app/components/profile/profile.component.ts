import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  dynamicText: string = "";
  phrases: string[] =[
    "Team Player.",
    "Software Developer.",
    "Backend Engineer.",
    "Software Engineer.",
    "Code Enthusiast.",
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 50;
  deletingSpeed: number = 50;
  delayBetweenPhrases: number = 2000;


  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }

  openResume() {
    window.open("./assets/Gustavo R. Cestero - Resume 2024.docx (1).pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/gustavo-cestero-181b3b196', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/gustavocestero', '_blank');
  }
}
