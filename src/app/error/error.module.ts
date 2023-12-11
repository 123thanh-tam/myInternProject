import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ServerErrorComponent } from './server-error/server-error.component';

const compoents = [NotFoundComponent, AccessDeniedComponent, ServerErrorComponent]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...compoents],
  exports: [...compoents],
})
export class ErrorModule { }
