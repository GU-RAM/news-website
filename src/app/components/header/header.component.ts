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

const Modules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  FontAwesomeModule,
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...Modules],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Changed to styleUrls
})
export class HeaderComponent {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  isSearchVisible = false;

  toggleSearch() {
    this.isSearchVisible = true;
  }
}
