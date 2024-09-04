import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const Modules = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  FontAwesomeModule,
];

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [...Modules, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public faFacebookF = faFacebookF;
  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
  public faYoutube = faYoutube;
  isSearchVisible = false;

  toggleSearch() {
    this.isSearchVisible = true;
  }
}
