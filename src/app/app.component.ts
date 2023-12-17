import { LayoutAboutModule } from './layout-about/layout-about.module';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import 'primeicons/primeicons.css';
import { LayoutModule } from './layout/layout.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutModule, LayoutAboutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myproject2';
}
