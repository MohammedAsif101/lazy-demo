import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { BodypageComponent } from './bodypage/bodypage.component';

console.warn("Header Module")


@NgModule({
  declarations: [
    HeaderpageComponent,
    BodypageComponent

  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
