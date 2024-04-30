import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {

  socialLinks = [
    { url: "https://github.com/TechOpenSolve", icon: "github" },
    { url: "https://discord.gg/VcEFsQad", icon: "discord" },
    { url: "https://www.linkedin.com/company/techopensolve", icon: "linkedin" },
    { url: "https://twitter.com/TechOpenSolve", icon: "twitter" },
  ];

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github.svg'));
    this.iconRegistry.addSvgIcon('discord', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/discord.svg'));
    this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/linkedin.svg'));
    this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg'));
  }
}
