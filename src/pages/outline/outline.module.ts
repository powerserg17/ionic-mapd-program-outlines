import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Outline } from './outline';

@NgModule({
  declarations: [
    Outline,
  ],
  imports: [
    IonicModule.forRoot(Outline),
  ],
  exports: [
    Outline
  ]
})
export class OutlineModule {}
