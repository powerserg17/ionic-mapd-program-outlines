import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Professors } from './professors';

@NgModule({
  declarations: [
    Professors,
  ],
  imports: [
    IonicModule.forRoot(Professors),
  ],
  exports: [
    Professors
  ]
})
export class ProfessorsModule {}
