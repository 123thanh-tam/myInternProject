import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

const components = [LayoutComponent, HeaderComponent, FooterComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet
  ],
  declarations: [...components],
  exports: [LayoutComponent]
})
export class LayoutModule { }
