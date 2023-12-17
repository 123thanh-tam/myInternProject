import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAboutComponent } from './layout-about.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { AboutComComponent } from './about-com/about-com.component';
import { GuideAboutComComponent } from './guide-about-com/guide-about-com.component';

const components = [
  HeaderComponent,
  FooterComponent,
  AboutComComponent,
  GuideAboutComComponent,
];
@NgModule({
  imports: [CommonModule, RouterOutlet],
  declarations: [LayoutAboutComponent, ...components],
  exports: [LayoutAboutComponent],
})
export class LayoutAboutModule {}
