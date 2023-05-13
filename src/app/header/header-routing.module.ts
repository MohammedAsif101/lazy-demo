import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodypageComponent } from './bodypage/bodypage.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';


const routes: Routes = [
 {path:'bodypage',component:BodypageComponent},
 {path:'headerpage',component:HeaderpageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
