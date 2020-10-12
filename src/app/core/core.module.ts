import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '**', component: ErrorComponent},
    ])
  ],
  exports: [
    NavBarComponent
  ]
})

export class CoreModule {}
