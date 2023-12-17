import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TouristComponent } from './tourist/tourist.component';

import { RouterOutlet } from '@angular/router';

const components = [
  LayoutComponent,
  FooterComponent,
  HeaderComponent,
  TouristComponent,
];

@NgModule({
  imports: [CommonModule, RouterOutlet],
  declarations: [...components],
  exports: [LayoutComponent],
})
export class LayoutModule {}
