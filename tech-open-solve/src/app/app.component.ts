import { ChangeDetectorRef, Component, OnDestroy, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";
import { FooterComponent } from "./components/footer/footer.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@Component({
	selector: "app-root",
	standalone: true,
	imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
    MatSlideToggleModule
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, OnDestroy {
	mobileQuery: MediaQueryList;
  switchIcons: any;

  navItems = [
    { name: "Women In Tech", route: "/women-in-tech" },
    { name: "Career Growth", route: "/career-growth" },
    { name: "Employment", route: "/employment" },
    { name: "Work Environment", route: "/work-environment" },
    { name: "Freelancing", route: "/freelancing" },
    { name: "Community", route: "/community" },
    { name: "Open Source", route: "/open-source" },
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, @Inject(PLATFORM_ID) private platformId: Object, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.iconRegistry.addSvgIcon('techopensolve', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/branding/TechOpenSolve.svg'));
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.switchIcons = document.querySelector('.mdc-switch__icons');
      this.switchIcons.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" class="mdc-switch__icon mdc-switch__icon--off"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" aria-hidden="true" fill="currentColor" class="mdc-switch__icon mdc-switch__icon--on"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
      `;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
