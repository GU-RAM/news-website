import { Component, inject } from '@angular/core';
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
import { NewsService } from '@news/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

const Modules = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  FontAwesomeModule,
  HttpClientModule, // Add HttpClientModule here
];

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [...Modules, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public faFacebookF = faFacebookF;
  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
  public faYoutube = faYoutube;
  isSearchVisible = false;
  #getNewsService = inject(NewsService);

  constructor() {
    this.#getNewsService.getNews().subscribe({
      next: (data: any) => {
        console.log('News data:', data);
      },
      error: (err: any) => {
        console.error('Error fetching news:', err);
      },
    });
  }

  toggleSearch() {
    this.isSearchVisible = true;
  }
}
