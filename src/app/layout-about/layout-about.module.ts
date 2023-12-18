import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAboutComponent } from './layout-about.component';
import { AboutComComponent } from './about-com/about-com.component';
import { GuideAboutComComponent } from './guide-about-com/guide-about-com.component';
import { LayoutModule } from '../layout/layout.module';

const components = [
  AboutComComponent,
  GuideAboutComComponent,
  LayoutAboutComponent
];
@NgModule({
  imports: [CommonModule, RouterOutlet, LayoutModule],
  declarations: [ ...components],
  exports: [LayoutAboutComponent],
})
export class LayoutAboutModule {}
