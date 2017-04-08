import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Description } from './description';

@NgModule({
  declarations: [
    Description,
  ],
  imports: [
    IonicModule.forRoot(Description),
  ],
  exports: [
    Description
  ]
})
export class DescriptionModule {}
